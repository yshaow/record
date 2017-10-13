/**
 * 异步action
 */
//大多数浏览器还不支持fetch，建议使用isomorphic-fetch库
import fetch from 'isomorphic-fetch'

export const  REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit){
  return {
    type:REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts (subreddit,json){
  return {
    type:RECEIVE_POSTS,
    subreddit,
    posts:json.data.children.map(child => child.data),
    receivedAt:Date.now()
  }
}

/**
 * thunk action创建函数
 */
function fetchPosts(subreddit){
  /**
   * Thunk middleware知道如何处理函数
   * 把dispatch房费通过参数的形式传给函数 以此让它自己能dispatch action
   */
  return function(dispatch){
    //首次dispatch 更新应用的state来通知API发起请求了
    dispatch(requestPosts(subreddit));

    /**
     * thunk middleware调用的函数可以有返回值，它会被当作dispatch方法的返回值传递
     * 这个案例中我们返回一个等待处理的promise，这不是redux middleware所必须的，但对于我们而言很方便
     */
    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json =>{
          //可以多次dispatch
         //这里使用请求结果更新应用的state
          dispatch(receivePosts(subreddit,json));
        }
      )
  }
}

function shouldFetchPosts(state,subreddit){
  const posts = state.postsBySubreddit[subreddit];

  if(!posts) return true;
  else if (posts.isFetching) return false;
  else return posts.didInvalidata
}

export function fetchPostsIfNeeded(subreddit){
  /**
   * 注意返回函数也接收getState()方法
   * 这里缓存的值可用时 减少网络请求
   */
  return (dispatch,getState) => {
    if(shouldFetchPosts(getState(),subreddit)){
      //请求数据
      return dispatch(fetchPosts(subreddit));
    }else{
      return Promise.resolve();//告诉调用代码不需要再等待了
    }
  }
}






















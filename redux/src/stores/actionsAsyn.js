/**
 * 异步Action测试
 */

/**
 * 同步action类型和action的创建函数
 * @type {string}
 */
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export function selectSubreddit (subreddit){
  return {
    type:SELECT_SUBREDDIT,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidatesubreddit(subreddt){
  return {
    type:INVALIDATE_SUBREDDIT,
    subreddt
  }
}

/**
 * 定义异步请求的action
 * @type {string}
 */
export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(subreddit){
  return {
    type:REQUEST_POSTS,
    subreddit
  }
}

/**
 * 定义异步响应的action
 * @type {string}
 */
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(subreddit,json){
  return {
    type:RECEIVE_POSTS,
    subreddit,
    posts:json.data.children.map(child => child.data),
    receivedAt:Date.now()
  }
}


























/**
 * Reddit reducers
 */
import {combineReducers} from 'redux'
import {SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,RECEIVE_POSTS,REQUEST_POSTS} from './actionsReddit'

function selectedSubreddit(state = 'reactjs',action){
  switch(action.type){
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function posts(state={
  isFetching:false,
  didInvalidata:false,
  items:[]
},action){
  switch(action.type){
    case INVALIDATE_SUBREDDIT:
      return Object.assign({},state,{
        didInvalidata:true
      });
    case REQUEST_POSTS:
      return Object.assign({},state,{
        isFetching:true,
        didInvalidata:false
      });
    case RECEIVE_POSTS:
      return Object.assign({},state,{
        isFetching:false,
        didInvalidata:false,
        items:action.posts,
        lastUpdated:action.receivedAt
      });
    default:
      return state;
  }
}

function postsBySubreddit(state = {},action){
  switch(action.type){
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({},state,{
        [action.subreddit]:posts(state[action.subreddit],action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer

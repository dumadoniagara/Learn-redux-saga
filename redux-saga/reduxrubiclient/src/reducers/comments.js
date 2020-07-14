const comments = (state = [], action) => {
  switch (action.type) {

    case 'LOAD_COMMENT_SUCCESS':
      console.log('succes kok gan')
      console.log('data di reducer:', action.comments);
      return action.comments.map((item) => {
        item.sent = true;
        return item
      })

    case 'POST_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          message: action.message,
          sent: true
        }
      ]

    case 'POST_COMMENT_SUCCESS':
      return action.comments.map((item) => {
        item.sent = true;
        return item
      })

    case 'POST_COMMENT_FAILURE':
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item
      })

    case 'DELETE_COMMENT':
      return state.filter((item) => item.id !== action.id)

    case 'DELETE_COMMENT_SUCCESS':
      return state

    case 'LOAD_COMMENT_FAILURE':
      console.log('load gagal');
      return state
    case 'DELETE_COMMENT_FAILURE':
    default:
      return state
  }
}

export default comments

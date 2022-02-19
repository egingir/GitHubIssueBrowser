export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const GET_BOOKMARKS = 'GET_BOOKMARKS';

export const removeBookmark = (bookmarkId: number) => {
  return async (dispatch: (arg0: {type: string; id: number}) => void) => {
    dispatch({type: REMOVE_BOOKMARK, id: bookmarkId});
  };
};

export const addBookmark = (bookmarkId: number) => {
  return async (dispatch: (arg0: {type: string; id: number}) => void) => {
    dispatch({type: ADD_BOOKMARK, id: bookmarkId});
  };
};

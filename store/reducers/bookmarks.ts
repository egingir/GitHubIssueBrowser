import {ADD_BOOKMARK, REMOVE_BOOKMARK} from '../actions/bookmarks';

const initialState = {
  bookmarks: [] as number[],
};

export default (
  state = initialState,
  action: {
    type: string;
    id: number;
  },
) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      state = {bookmarks: [...state.bookmarks, action.id]};
      break;
    case REMOVE_BOOKMARK:
      state = {
        bookmarks: state.bookmarks.filter(bookmark => bookmark !== action.id),
      };
      break;
  }
  return state;
};

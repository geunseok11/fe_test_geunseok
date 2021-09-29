export const initialState = {
  result: [],
  searchList: [],

  loadResultLoading: false,
  loadResultDone: false,
  loadResultError: null,

  loadSearchListLoading: true,
  loadSearchListDone: false,
  loadSearchListError: null,
};

export const LOAD_RESULT_REQUEST = "LOAD_RESULT_REQUEST";
export const LOAD_RESULT_SUCCESS = "LOAD_RESULT_SUCCESS";
export const LOAD_RESULT_FAILURE = "LOAD_RESULT_FAILURE";

export const LOAD_SEARCHLIST_REQUEST = "LOAD_SEARCHLIST_REQUEST"; // search list
export const LOAD_SEARCHLIST_SUCCESS = "LOAD_SEARCHLIST_SUCCESS";
export const LOAD_SEARCHLIST_FAILURE = "LOAD_SEARCHLIST_FAILURE";

export const loadResult = (data) => {
  console.log("loadResult", data);
  return {
    type: LOAD_RESULT_REQUEST,
    data,
  };
};

export const loadSearchList = (keyword) => {
  return {
    type: LOAD_SEARCHLIST_REQUEST,
    keyword,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESULT_REQUEST:
      return {
        ...state,
        loadResultLoading: true,
        loadResultDone: false,
        loadResultError: null,
      };
    case LOAD_RESULT_SUCCESS:
      return {
        ...state,
        loadResultLoading: false,
        loadResultDone: true,
        RESULT: action.data,
      };
    case LOAD_RESULT_FAILURE:
      return {
        ...state,
        loadResultLoading: false,
        loadResultError: action.error,
        review: state.result.filter((el) => el.id !== "not found"),
      };

    case LOAD_SEARCHLIST_REQUEST:
      return {
        ...state,
        loadSearchListLoading: true,
        loadSearchListDone: false,
        loadSearchListError: null,
      };
    case LOAD_SEARCHLIST_SUCCESS:
      return {
        ...state,
        loadSearchListLoading: false,
        loadSearchListDone: true,
        searchList: action.data,
      };
    case LOAD_SEARCHLIST_FAILURE:
      return {
        ...state,
        loadSearchListLoading: false,
        loadSearchListError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;

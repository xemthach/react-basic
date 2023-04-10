const initalState = {
    userListPagination: [],
    // totalPage: 10,
    // userDetail: {}
};

export const UserReducer = (state = initalState, { type, payload}) => {
    switch (type) {
        case GET_USER_LIST_PAGINATION:
            state.userListPagination = [...paypload.items];
            state.totalPages = payload.totalPages;
            return {...state};
        case SET_USER_DETAIL:
            state.userDetail = {...payload};
            return {...state};
            default:
                return state;
    }
};

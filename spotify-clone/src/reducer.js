export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBr9FOX8lSX28CqkYZTNtGYfubduTD0rnvnCxTfnP-5mDTxUIYEHib0yRKeilJ2poLvkYfqTtGMwt4PKMhY24QUgImFtgpQuaQsE9qm4jl62M0Ei7i4VrJbz-PaRi4KBeaDH-EZ1j7TvZ-JDNkaU1BWaTzEB7Pc_By8sQO6Y2xgbw3b9MAh"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        default:
            return state;
    }
}

export default reducer;
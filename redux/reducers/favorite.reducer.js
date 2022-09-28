export const favoriteReducer = (state = [], action) => {


    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return [...state, action.payload]

        case "EMPTY_FAVORITE":
            return []

        default:
            return state;
    }

}
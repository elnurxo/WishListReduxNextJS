export const emptyFavoriteAction = () => {
    return { type: 'EMPTY_FAVORITE', payload: '' }
}


export const addToFavoritesAction = (payload) => {
    return { type: 'ADD_TO_FAVORITE', payload: payload }
}
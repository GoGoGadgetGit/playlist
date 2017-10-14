export const addSongAction = {
    type: 'ADD',
    payload: {
        artist: artist,
        song: song,
        notes: notes
    }
}

export const addFavoriteAction = {
    type: 'FAVE',
    payload: id
}
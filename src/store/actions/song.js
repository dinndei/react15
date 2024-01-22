//כאן יש את הפעולות שנעשה באתר
//אין כאן ריאקט רק JS
export const selectSong=(song)=>{
    return{
        type:"SELECTED_SONG",
        payload:song
    }
}
export const addSong=(song)=>{
    return{
        type:"ADD_SONG",
        payload:song
    }
}
export const deleteSong=(songId)=>{
    return{
        type:"DELETE_SONG",
        payload:songId
    }
}
export const editedSong=(song)=>{
    return{
        type:"EDITED_SONG",
        payload:song
    }
}
export const saveEditedSong=(song)=>{
    return{
        type:"SAVE_EDITED_SONG",
        payload:song
    }
}
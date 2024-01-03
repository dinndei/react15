//כאן יהיו יותר המימושים של כל הפעולות שנעשה באתר
//נשתמש בסטייט ונשמור שם את השינויים
const initState = {
    arr: [
        { id: 1, name: "mode ani", level: 3, category: "emuna", src: "" },
        { id: 2, name: "efroach sheli", level: 2, category: "kids", src: "" },
        { id: 3, name: "tikvot", level: 7, category: "emuna", src: "" },
        { id: 4, name: "kadur adom", level: 4, category: "kids", src: "" }
    ],
    selectedSong: null,
    editedSong: null
}

export const songReducer = (state = initState, action)=>{
    switch (action.type) {
        case "EDITED_SONG":
            return {
                arr: state.arr,
                selectedSong: state.selectedSong,
                editedSong: action.payload
            }
        case "SAVE_EDITED_SONG":
            let  copy=state.arr.map(item=>{
                if(item.id!==action.payload.id)
                    return item
                return action.payload
            })
            return {
                selectedSong: state.selectedSong,
                editedSong: null,
                arr:copy
            }
        case "DELETE_SONG":
            return {
                arr: state.arr.filter(item=>item.id!==action.payload.id),
                selectedSong: state.selectedSong?.id!=action.payload?state.selectedSong:null,
                editedSong: state.editedSong?.id!=action.payload?state.editedSong:null
            }
        case "ADD_SONG":
            return {
               
                selectedSong: state.selectedSong,
                editedSong: state.editedSong,
                arr: [...state.arr,action.payload]
            }
        case "SELECTED_SONG":
            return {
                arr: state.arr,
                selectedSong:  action.payload,
                editedSong: state.editedSong
            }
            default: return state
    }
}
import {useDispatch} from 'react-redux'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { deleteSong } from '../actions/song';
import { editedSong,selectSong } from "../actions/song";

const ListItem = ({one}) => {
    let dispatch=useDispatch();//מאפשר שיגור אובייקטים לרדוסר.
    return ( <div className='song'>
           <Typography variant="h5" gutterBottom>{one.name}</Typography>
     <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={()=>{
dispatch(deleteSong(one.id))
        }}>delete</Button>
        <Button variant="outlined"  onClick={()=>{
dispatch(editedSong(one))}}>edit</Button>
        <Button variant="outlined"
         onClick={()=>{
            dispatch(selectSong(one))}}
        >display</Button>
      </Stack>
    </div> );
}
 
export default ListItem;

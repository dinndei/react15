import { useForm} from "react-hook-form";
import { saveEditedSong } from "../store/actions/song";
import { editedSong } from "../store/actions/song";
const Edit = () => {
    let {register,handleSubmit } =useForm({
        defaultValues:editedSong
    });
    const save=(data)=>{
        alert(JSON.stringify(data))
        saveEditedSong(data)
    }
    return ( 
        <form onSubmit={handleSubmit(save)}>
            <label>name</label>
            <input {...register("name")}/>
            <label>level</label>
            <input {...register("level")}/>
            <label>category</label>
            <input {...register("category")}/>
            <input type="submit"/>
        </form>
    );
}
 
export default Edit;
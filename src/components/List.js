import {useSelector} from 'react-redux'
import ListItem from './ListItem';
const List = () => {
    let arr=useSelector(cState=>cState.arr);
    return (  
        <><div>♥ song list ♥</div>
        <ul>
            {arr.map(item=><li key={item.id}>
                <ListItem one={item}/>
            </li>)}
        </ul>
        </>
    );
}
 
export default List;
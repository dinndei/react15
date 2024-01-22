import logo from './logo.svg';
import './App.css';
import List from './components/List.js';
import { editedSong } from './store/actions/song.js';
import Edit from './components/edit.js';
import { Provider } from 'react-redux';

function App() {

  return (
<Provider>
    <List/>
    {editedSong&&<Edit/>}
</Provider>

  );
}

export default App;

import { useGetApi } from './hooks/useGetApi';
import Profile from './containers/Profile';

function App() {
  const API = 'https://jsonplaceholder.typicode.com/posts/3/comments';
  const {characters}=useGetApi(API);
  console.log(characters);
  return (
    <div className="App">
      {/* <Login/> */}
      <Profile/>
    </div>
  );
}

export default App;

import './App.css';
import Test from './Test'
import Test2 from './Test'
import Render from './Render';
import ProfilePage from './pages/Profile/ProfilePage';
import {mockUsers} from './mockData';
import TodoListApp from './pages/TodoList/TodoListPage';
import {mockLists} from './mockList';

function App() {
  return (
    <>
      {/* <Test title="hello world!" />
      <Test2 title="ini property2" />
      <Render />
      <ProfilePage users={mockUsers} /> */ }
      <TodoListApp lists={mockLists}  />
    </>
  );
}

export default App;

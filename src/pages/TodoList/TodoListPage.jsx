import Header from './components/Header';
import TodoList from './components/TodoListContent';

export default function TodoListApp({lists}){
    return (
        <>
            <Header text="To Do App" />
            <TodoList key={lists.id} list={lists} />
        </>
    );
}
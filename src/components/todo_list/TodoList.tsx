import useTodoList from "../../hooks/useTodoList";
import Icons from "../../icons/Icons";
import AddTaskBtn from "../add_task_btn/AddTaskBtn";
import NoItems from "../no_items/NoItems";
import TodoItem from "../todo_item/TodoItem";
import './css/todo_list.scss'

const TodoList = () => {
    const { list, todoList, endItem, deleteItem, changeItem } = useTodoList()

    // Список пуст
    if(!list?.length) return (
        <NoItems 
            mode="black"
            icon={<Icons.Line name={'task_remove_02'}/>}
            button={<AddTaskBtn />}
        />
    ) 
    
    if(!todoList?.length) return <NoItems icon={<Icons.Line name={'task_remove_02'}/>} mode="black"/>

    return (
        <ul className="todo_list">
            {todoList.map(el => (
                <TodoItem 
                    item={el}
                    key={el.id}
                    handleCheck={() => endItem(el.id)}
                    handleDelete={() => deleteItem(el.id)}
                    changeItem={changeItem}
                />
            ))}
        </ul>
    );
};

export default TodoList;
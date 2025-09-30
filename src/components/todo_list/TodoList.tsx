import useTodoList from "../../hooks/useTodoList";
import Icons from "../../icons/Icons";
import AddTaskBtn from "../add_task_btn/AddTaskBtn";
import NoItems from "../no_items/NoItems";
import TodoItem from "../todo_item/TodoItem";

const TodoList = () => {

    const { list } = useTodoList()

    // Список пуст
    if(!list?.length) return (
        <NoItems 
            mode="black"
            icon={<Icons.Line name={'task_remove_02'}/>}
            button={<AddTaskBtn />}
        />
    )

    return (
        <ul className="todo_list">
            {list.map(el => (
                <TodoItem />
            ))}
        </ul>
    );
};

export default TodoList;
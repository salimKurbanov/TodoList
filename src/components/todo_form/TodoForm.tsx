import useTodoForm from "../../hooks/useTodoForm";
import Icons from "../../icons/Icons";
import Button from "../button/Button";
import TextArea from "../textarea/TextArea";
import './css/todo_form.scss';

export default function TodoForm() {

    const { task, error, handleInputTask, onSubmit } = useTodoForm()

    return (
        <form className={`todo_form`} onSubmit={onSubmit}>
            <h3>Новая задача</h3>

            <TextArea 
                value={task}
                placeholder="Описание"
                mode="black"
                error={error}
                icon={<Icons.Line name={'task_add_02'}/>}
                callback={(e) => handleInputTask(e.target.value)}
            />
            
            <Button
                mode="main_color"
                icon={<Icons.Line name={'add_01'}/>}
            >Добавить</Button>
        </form>
    );
}
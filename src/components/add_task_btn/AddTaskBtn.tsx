import { setListener } from "../../store/Store";
import Button from "../button/Button";
import Icons from "../../icons/Icons";

export default function AddTaskBtn() {
    const handleClick = () => setListener('open_task_add', true)

    return <Button 
        mode="main_color"
        icon={<Icons.Line name={'add_01'}/>}
        callback={handleClick}
    >Добавить задачу</Button>
}
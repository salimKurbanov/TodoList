import ModalLayout from "../modal_layout/ModalLayout";
import TodoForm from "./TodoForm";

export default function Modal() {
    return (
        <ModalLayout
            classMode='task_add'
            listenerOpen='open_task_add'
            listenerClose='close_task_add'
            maxWidth="500px"
        >
            <TodoForm />
        </ModalLayout> 
    );
}
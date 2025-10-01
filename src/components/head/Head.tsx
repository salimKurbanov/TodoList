import { useListStore } from "../../store/useListStore";
import AddTaskBtn from "../add_task_btn/AddTaskBtn";
import ActiveCount from "./ActiveCount";
import Filter from "./Filter";
import './css/head.scss'

const Head = () => {

    const { list } = useListStore()

    // Список пуст
    if(!list?.length) return null

    // В списке есть задачи
    return (
        <div className={`head`}>
            <ActiveCount list={list}/>

            <div className="control">
                <Filter />

                <AddTaskBtn />
            </div>
        </div>
    );
};

export default Head;
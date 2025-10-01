import type { TypeItem } from "../../types/types";
import { pluralize, pluralizeVerb } from "../../utils";

interface Props {
    list: TypeItem[]
}

const ActiveCount = ({ list }: Props) => {

    const activeTasks = list.filter(el => el.isActive).length

    // Задач нет
    if(activeTasks === 0) return <p>Готово, вы молодец!</p>

    // Отображение колличества выполненых задач
    const pluralWord = pluralize(activeTasks, 'задача', 'задачи', 'задач')
    const pluralVerb = pluralizeVerb(activeTasks, 'Осталась', 'Осталось')

    return <p>{pluralVerb} <span>{activeTasks}</span> {pluralWord}</p>
};

export default ActiveCount;
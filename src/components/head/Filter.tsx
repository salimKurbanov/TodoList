import { filterList } from "../../constants/constants";
import useFilter from "../../hooks/useFilter";
import Icons from "../../icons/Icons";
import IconBtn from "../button_icon/IconBtn";
import FilterItem from "./FilterItem";

export default function Filter() {

    const { isOpen, handleOpen, filter, setFilter } = useFilter()

    return (
        <div className={`filter`}>
            <IconBtn mode="grey" onClick={handleOpen}>
                <Icons.Line name={'filter_horizontal'}/>
            </IconBtn>

            <ul className={`${isOpen ? 'open' : ''}`}>
                {filterList.map(el => (
                    <FilterItem 
                        id={el.id}
                        isActive={filter === el.id}
                        label={el.label}
                        key={el.id}
                        onClick={() => setFilter(el.id)}
                    />
                ))}
            </ul>
        </div>
    );
}
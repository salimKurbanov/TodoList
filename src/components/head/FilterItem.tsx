interface Props {
    id: number,
    isActive: boolean,
    label: string,
    onClick: () => void
}

const FilterItem = ({ id, isActive, label, onClick }: Props) => {
    return (
        <li 
            key={id} 
            className={`${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </li>
    );
};

export default FilterItem;
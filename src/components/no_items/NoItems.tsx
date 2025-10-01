import type { TypeNoItems } from '../../types/types';
import './css/no_items.scss';

const NoItems = ({ icon, text, button, mode }: TypeNoItems) => {
    return (
        <div className={`no_items ${mode}`}>
            {!!icon && <div className='no_item_icon'>{icon}</div>}
            <p>{text || 'Здесь пока ничего нет'}</p>
            {button || null}
        </div>
    );
};

export default NoItems;
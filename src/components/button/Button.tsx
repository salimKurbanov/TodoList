import type { TypeButton } from '../../types/types';
import './css/button.scss';

export default function Button({ mode, disabled, icon, children, callback }: TypeButton) {

    return (
        <button 
            className={`main_button ${mode}`}
            onClick={disabled ? () => {} : callback}
            disabled={disabled}
        >
            {!!icon && <div className='btn_icon'>{icon}</div>}
            {children}
        </button>
    );
}
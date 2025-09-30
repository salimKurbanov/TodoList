import type { TypeIconBtn } from "../../types/types";
import './css/icon_btn.scss';

export default function IconBtn({ mode, disabled, children, onClick}: TypeIconBtn) {

    return (
        <button
            className={`icon_btn ${mode || ''}`}
            disabled={disabled}
            onClick={disabled ? () => {} : onClick}
        >
            {children}
        </button>
    );
};
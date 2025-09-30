import type { TypeTextarea } from '../../types/types';
import {  useEffect, useRef } from 'react';
import './css/textarea.scss'

const TextArea = ({
    value,
    placeholder, 
    mode,
    disabled,
    icon,
    error,
    callback = () => {},
    onFocusCallback = () => {},
    onBlurCallback = () => {},
}: TypeTextarea) => {
    const area = useRef<HTMLTextAreaElement>(null)

    const isActive = !!value

    useEffect(() => {
        const textarea = area.current;

        if (textarea) {
            textarea.style.height = '40px'; 
            const isOverflowing = textarea.scrollHeight > textarea.clientHeight; 
            
            if (isOverflowing) {
                textarea.style.height = `${textarea.scrollHeight}px`; 
            }
        }
    }, [value])

    return (
        <div className={`textarea_wrapper ${mode} ${isActive ? 'active' : ''} ${error ? 'error' : ''}`}>
            {!!icon && <div className='icon'>{icon}</div>}

            <textarea 
                ref={area}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={disabled ? () => {} : callback}
                onFocus={onFocusCallback}
                onBlur={onBlurCallback}
            >
            </textarea>

            <p className="error_message">{error}</p>
        </div>
    );
};

export default TextArea;
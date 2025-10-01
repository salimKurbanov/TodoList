import type { TypeCheckBox } from '../../types/types';
import { useId } from 'react';
import Icons from '../../icons/Icons';
import './css/check_box.scss';

export default function CheckBox({ isChecked, callback }: TypeCheckBox) {
    const id = useId();

    return (
        <label htmlFor={id} className={`check_box ${!!isChecked && 'checked'}`}>
            <input id={id} type="checkbox" hidden onChange={callback}/>
            <div className="check">
                <Icons.Line name={'tick_01'}/>
            </div>
        </label>
    );
}
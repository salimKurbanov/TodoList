import type { TypeIconsLine } from '../../../types/types';
import IconBtn from '../../button_icon/IconBtn';
import Icons from '../../../icons/Icons';

interface Props {
    onClick: () => void
    icon: TypeIconsLine
    classMode?: string
}

const ControllBtn = ({ icon, onClick, classMode }: Props) => {
    return (
        <IconBtn mode="black" classMode={`${classMode || ''} small`} onClick={onClick}>
            <Icons.Line name={icon}/>
        </IconBtn>
    );
};

export default ControllBtn;
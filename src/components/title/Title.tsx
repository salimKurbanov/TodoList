import type { TypeTitle } from "../../types/types";
import './css/title.scss'

export default function Title({ mode, children }: TypeTitle) {
    return (
        <h1 className={`main_title ${mode || ''}`}>
            {children}
        </h1>
    );
}
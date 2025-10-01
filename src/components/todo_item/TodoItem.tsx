import type { TypeTodoItem } from "../../types/types";
import React, { useState } from "react";
import CheckBox from "../check_box/CheckBox";
import TextArea from "../textarea/TextArea";
import ControllBtn from "./components/ControllBtn";

const TodoItem = React.memo(({ item, handleCheck, handleDelete, changeItem}: TypeTodoItem) => {
    const [input, setInput] = useState(item.description)
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        changeItem(item.id, input || item.description, 'description');
        setIsEdit(false)
    }
    
    return (
        <div className={`todo_item ${item.isActive ? '' : 'end'}`}>
            <CheckBox isChecked={!item.isActive} callback={handleCheck}/>

            {isEdit 
                ?<TextArea 
                    value={input}
                    placeholder="Впишите задачу"
                    mode="black"
                    callback={(e) => setInput(e.target.value)}
                />
                :<p className="description">{item.description}</p>
            }
            
            <div className="control">
                {!!item.isActive &&
                    <>
                        {isEdit 
                            ?<ControllBtn 
                                icon="tick_01"
                                onClick={handleEdit}
                            />
                            :<ControllBtn 
                                icon="edit_01"
                                onClick={() => setIsEdit(!isEdit)}
                            />
                        }
                    </>
                }

                <ControllBtn 
                    icon="delete_03"
                    onClick={handleDelete}
                    classMode="delete_btn"
                />
            </div>
        </div>
    );
},
    (oldProps, newProps) => oldProps.item === newProps.item
)

export default TodoItem
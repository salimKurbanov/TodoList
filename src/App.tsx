import { useState } from "react"
import CurrentDate from "./components/current_date/CurrentDate"
import TextArea from "./components/textarea/TextArea"
import Title from "./components/title/Title"
import TodoList from "./components/todo_list/TodoList"
import Icons from "./icons/Icons"

function App() {
    const [value, setValue] = useState<string>('')

  return (
    <main className="container">
        <CurrentDate />
        <Title mode="white">Мои задачи</Title>
        <TodoList />

        <TextArea 
            value={value}
            placeholder="Описание"
            icon={<Icons.Line name={'task_add_02'} />}
            callback={(e) => setValue(e.target.value)}
            mode="black"
            error={false}
        />
    </main>
  )
}

export default App
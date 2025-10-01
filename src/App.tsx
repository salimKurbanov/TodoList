import CurrentDate from "./components/current_date/CurrentDate"
import Head from "./components/head/Head"
import Title from "./components/title/Title"
import Modal from "./components/todo_form/Modal"
import TodoList from "./components/todo_list/TodoList"

function App() {

  return (
    <main className="container">
        <CurrentDate />
        <Title mode="white">Мои задачи</Title>
        <Head />
        <TodoList />

        {/* Модальное окно добавления задачи */}
        <Modal />
    </main>
  )
}

export default App
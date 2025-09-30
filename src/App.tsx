import CurrentDate from "./components/current_date/CurrentDate"
import Filter from "./components/filter/Filter"
import Title from "./components/title/Title"
import Modal from "./components/todo_form/Modal"
import TodoList from "./components/todo_list/TodoList"

function App() {

  return (
    <main className="container">
        <CurrentDate />
        <Title mode="white">Мои задачи</Title>
        <Filter />
        <TodoList />

        {/* Модальное окно добавления задачи */}
        <Modal />
    </main>
  )
}

export default App
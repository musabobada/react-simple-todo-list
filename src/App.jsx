import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import TodoItem from "./components/todoItem";
import NewItem from "./components/newItem";
import "./assets/App.scss";

let initialState = [
  { id: 0, text: "buy groceries", isChecked: false },
  { id: 1, text: "call mom", isChecked: true },
  { id: 2, text: "visit my friend", isChecked: false },
  { id: 3, text: "finish homework", isChecked: false },
  { id: 4, text: "exercise for 30 minutes", isChecked: true },
];

function App() {
  const [list, setList] = useState(initialState);
  const [isVisibleForm, setisVisibleForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState();

  function handleChange(e, id) {
    const updetedList = list.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: e.target.checked }
      }
      return item
    })
    setList(updetedList)
  }
  function handleDelete(id) {
    setList(list => list.filter(item => item.id !== id))
  }
  function hanldeSubmit(e) {
    e.preventDefault()
    if (text) {
      setList(list => [...list, { id: list.length, isChecked, text }])
    }
  }
  function handleAdd() {
    if (text) {
      setList(list => [...list, { id: list.length, isChecked, text }])
    } else {
      setisVisibleForm(isVisibleForm => !isVisibleForm)
    }
  }
  function handleclose() {
    setText("")
    setIsChecked("")
    setisVisibleForm(false)
  }

  return (
    <div className="container">
      <h3>Todo List</h3>
      <ul className="todo">
        {!list.length > 0 ? (<li>Empty list. let&apos;s create some 💪</li>) :
          list.map((item, i) => <TodoItem key={i} id={item.id} text={item.text} isChecked={item.isChecked} onChange={handleChange} handleDelete={handleDelete} />
          )}
        {isVisibleForm && (<NewItem
          text={text} setText={setText} isChecked={isChecked} setIsChecked={setIsChecked} handleclose={handleclose} hanldeSubmit={hanldeSubmit}
        />)}
        <li>
          <button title="button" type="button" onClick={handleAdd}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;

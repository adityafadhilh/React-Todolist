import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleClick = (e) => {
    setList((prevValue) => {
      return [...prevValue, inputText];
    })
    setInputText("")
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={handleClick}>Add</button>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </div>
  );
}

export default App;

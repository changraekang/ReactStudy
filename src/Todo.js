import React, { useState } from "react";

const Todo = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const sort = () => {
    //setToDos(toDos.sort());
    let sort = [...toDos];
    setToDos(sort.sort());
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>해야할 업무 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="업무내용을 적어주세요"
        />
        <button>Add To Do</button>
      </form>
      <button onClick={sort}>정렬</button>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;

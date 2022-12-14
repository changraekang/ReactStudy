import React, { useState } from "react";

const Todo = () => {
  const [toDo, setToDo] = useState("");
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(0);
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const sort = () => {
    //setToDos(toDos.sort());
    let sort = [...toDos];
    setToDos(sort.sort());
  };
  const plus = () => {
    //setTest((test) => test + 1);
    //setTest((test) => test + 2);
    setTest(test + 1);
    setTest(test + 2);
  };
  const plus2 = () => {
    setTest2((test) => test + 1);
    setTest2((test) => test + 2);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
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
      <button onClick={plus}>더하기</button>
      <button onClick={plus2}>더하기2</button>
      <hr />
      <ul>
        {test}
        {test2}
        {/*

        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        */}
      </ul>
    </div>
  );
};
export default Todo;

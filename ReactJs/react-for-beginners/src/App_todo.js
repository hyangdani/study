import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  console.log(toDos);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if( toDo === ""){
      return;
    }
    //setToDos(function(currentArray){ return []});
    //setToDos(currentArray => []);
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");

    /*
    const food = [1,2,3,4];
    food
      (4) [1, 2, 3, 4]
    [6, food]
      (2) [6, Array(4)]
    [6, ...food]
      (5) [6, 1, 2, 3, 4]

    ["a","b","c","d","e"].map(()=>"1")
      (5) ['1', '1', '1', '1', '1']
    ["a","b","c","d","e"].map((item)=>item.toUpperCase())
      (5) ['A', 'B', 'C', 'D', 'E']

    {toDos.map((item) => <li>{item}</li>)}
      : Warning: Each child in a list should have a unique "key" prop.
    -> {toDos.map((item, index) => <li key={index}>{item}</li>)}
    */
  };
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function Hello(){
  useEffect(() => {
    console.log("hi :-)");
    return function(){
      console.log("bye :-)");
    }
  },[]);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //console.log("render"); // click change state, every time render
 
  useEffect(() => {
    console.log("iRunOnlyOnce");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    if(keyword !=="" && keyword.length > 5){
      console.log("search For", keyword);
    }  
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword&counter' changes.");
  }, [keyword, counter]);

   
  const [showing, setShowing] = useState(true);
  const onClickShowing = () => setShowing((prev) => !prev);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here.." value={keyword}/>
      <h1>{counter}</h1>    
      <button onClick={onClick}>click me</button><br/>
      {showing?<Hello/>:null}
      <button onClick={onClickShowing}>{showing?"Hide":"Show"}</button>
    </div>
  );
}

export default App;

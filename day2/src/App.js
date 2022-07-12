import './App.css';
import Child from './Child';
import Currentdate from './Currentdate';
import List from './List';
import Mycomponent from './Mycomponent';

function App() {
  let arr=["Default","bar","foo"] 
  let list1 = ["Walk, ","Cook, ","Bake"]
  let list2 = ["Study, ","Code, ","Eat"]
  return (
    <div className="App">
      {arr.map((x)=><Child name={x}/>)}
      {/* <Child name={"DEFAULT"}/> */}
      <h3>What is the date today</h3>
      <Currentdate  date={Date()}/>
      <Mycomponent/>
      <h1>ToDo List </h1>
      <h2>Today</h2>
      <List list={list1}/>
      <h2>Tomorrow</h2>
      <List list={list2}/>
    </div>
  );
}

export default App;

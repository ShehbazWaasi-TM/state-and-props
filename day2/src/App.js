import './App.css';
import Child from './Child';

function App() {
  let arr=["Default","bar","foo"] 
  return (
    <div className="App">
      {arr.map((x)=><Child name={x}/>)}
      {/* <Child name={"DEFAULT"}/> */}
    </div>
  );
}

export default App;

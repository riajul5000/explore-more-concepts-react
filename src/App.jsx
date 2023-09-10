import './App.css'
import Counter from './Counter';
import Users from './User';
import Team from './team';

function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  function addToFive(num){
     alert(num + 5);
  }

  return (
    <>
      <h1>React core concepts 2</h1>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('Third Clicked')}}>Click 3</button>
      <button onClick={() =>{addToFive(10)}}>Clicked 4</button>
    </>
  )
}

export default App

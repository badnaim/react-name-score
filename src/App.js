import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [users, setUsers] = useState(UsersList);

  function decrement() {
    setScore(score - 1);
  }
  function increment() {
    setScore(func1 + 1);
  }
  function add() {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <div className="box">
        <div className="header">
          <div>Total players: {number}</div>
          <div>
            <button>By name</button>
          </div>
          <div>
            <button>By score</button>
          </div>
        </div>
        {users.map((user, index) => (
          <div className="added" key={index}>
            <div id="one">#{index + 1}</div>
            <div id="two">{user.name}</div>
            <div className="score">
              <button id="btn" onClick={decrement}>
                -
              </button>
              {user.score}
              <button id="btn" onClick={increment}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={add}>Add player</button>
    </div>
  );
}

export default App;

import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My name is {props.name} and age is {props.age}
        </h1>
      </header>
    </div>
  );
}

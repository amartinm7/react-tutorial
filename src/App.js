import './App.css';
import './components/button/MyButton'
import MyButton from "./components/button/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Welcome</code>
        </p>
      </header>
      <main>
        <article>
          <h1>Welcome to react tutorial</h1>
          <section>
            <h2>Push the button</h2>
            <MyButton>hello</MyButton>
            <p>visit the MyButton code to see how it works</p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;

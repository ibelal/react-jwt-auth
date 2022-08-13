import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import useToken from "./helpers/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

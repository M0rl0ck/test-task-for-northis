import Styles from "./App.module.css";

function App() {
  const token = import.meta.env.VITE_GITHUB_API_TOKEN;
  return <div className={Styles.App}>Token = {token}</div>;
}

export default App;

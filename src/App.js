import "./App.scss";
import Container from "./MainBox";
import store from "./store";

function App() {
  return <Container store={store} id="main-window" />;
}

export default App;

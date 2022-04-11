import "./scss/App.scss";
import Container from "./MainBox";
import { store } from "./index";

function App() {
  return <Container store={store} id="main-window" />;
}

export default App;

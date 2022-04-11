import "./scss/App.scss";
import Container from "./MainBox";
import { store } from "./index";

function App() {
  return <Container store={store} />;
}

export default App;

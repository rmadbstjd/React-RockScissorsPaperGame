import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";
import PlayBtn from "./component/PlayBtn";
function App() {
  return (
    <div>
      <Box player="user" />
      <Box player="computer" />
      <PlayBtn />
    </div>
  );
}

export default App;

import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;

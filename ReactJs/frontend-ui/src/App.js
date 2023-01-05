import "./App.css";
import Home from "./components/Home";
import Vehicaloan from "./components/Vehicaloan";


import Navigator from "./NavigationBar";
import UploadForm from "./FileUpload";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personal from "./components/Personal";
import MainPage from "./components/MainPage";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route element=></Route>
      </Routes>
      </BrowserRouter> */}
      <Router>
      <Navigator />
      <Switch>
      <Route path='/' exact component={MainPage}></Route>
      <Route path='/Home' exact component={Home}></Route>
      <Route path='/vehical' component={Vehicaloan}></Route>
      <Route path='/personal' component={Personal}></Route>
      <Route path='/batchProcessing' component={UploadForm}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

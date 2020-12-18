import "./App.css";
import Navigation from "./components/navigation";
import Notifications from "./components/notifications";
import Search from "./components/search";
import Input from "./components/input";
import Button from "./components/button";
import AltButton from "./components/altButton";
import { buttonsTypeA, buttonsTypeB } from "./constants";

const Main = () => {
  return (
    <div className={"dash-main-container"}>
      <div className="dash-section">
        {" "}
        <h3 className={"section-header"}> search </h3> <Search />{" "}
      </div>
      <div className="dash-section">
        {" "}
        <h3 className={"section-header"}> Notifications </h3> <Notifications />
      </div>
      <div className="dash-section">
        {" "}
        <h3 className={"section-header"}> Input </h3> <Input />{" "}
      </div>
      <div className="dash-section">
        {" "}
        <h3 className={"section-header"}> Buttons </h3> 
        { buttonsTypeA.map( (btnText, i ) => <Button text={btnText} key={i}/> )} 
        <br/>
        { buttonsTypeB.map( (btnText, i ) => <AltButton text={btnText} key={i}/> )} 

      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;

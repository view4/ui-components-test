import './App.css';
import Navigation from "./components/navigation";


const Main = () => {
  return (
    <div className={"dash-main-container"}>
      <div className="dash-section"> <h3 className={"section-header"}> search </h3> </div>
      <div className="dash-section"> <h3 className={"section-header"}> Notifications </h3> </div>
      <div className="dash-section"> <h3 className={"section-header"}> Input </h3> </div>
      <div className="dash-section"> <h3 className={"section-header"}> Buttons </h3> </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;

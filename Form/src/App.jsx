import Home from "./Modulos/Inicio/Inicio";
import MyAppBar from "./Modulos/AppBar";
import "./App.css";

function App() {
  return (
    <div className="cajaPrincipal">
      <MyAppBar />
      <Home />
    </div>
  );
}

export default App;

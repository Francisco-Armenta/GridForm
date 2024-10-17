import Home from "./Modulos/Inicio/Inicio";
import MyAppBar from "./Modulos/AppBar";
import "./App.css";
import Valores from "./Modulos/VisionBox";

function App() {
  return (
    <div className="cajaPrincipal">
      <MyAppBar />
      <Valores />
    </div>
  );
}

export default App;

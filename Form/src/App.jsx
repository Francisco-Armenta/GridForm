import Home from "./Modulos/Inicio/Inicio";
import MyAppBar from "./Modulos/AppBar";

import "./index.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <MyAppBar />
      <Home />
    </div>
  );
}

export default App;

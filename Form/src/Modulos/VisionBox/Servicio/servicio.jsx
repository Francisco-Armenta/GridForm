import { BlueBox, SpanBlueBox, TittleBlueBox } from "../StylesB";
import ServicioIcon from "../../../assets/Icono-servicio.svg";

function Servicio() {
  return (
    <BlueBox>
      <img src={ServicioIcon} alt="Servicio" />
      <TittleBlueBox>Servicio</TittleBlueBox>
      <SpanBlueBox>
        Fomentamos canales de comunicación abierta entre clientes y compañeros,
        con el objetivo de mejorar la atención y calidad del servicio.
      </SpanBlueBox>
    </BlueBox>
  );
}

export default Servicio;

import { BlueBox, SpanBlueBox, TittleBlueBox } from "../StylesB";
import InnovacionIcon from "../../../assets/Icono-innovacion.svg";

function Innovacion() {
  return (
    <BlueBox>
      <img src={InnovacionIcon} alt="Innovacion" />
      <TittleBlueBox>Innovación</TittleBlueBox>
      <SpanBlueBox>
        Fomentamos una cultura de retroalimentación que impulsa la mejora
        continua en cada aspecto de nuestro trabajo.
      </SpanBlueBox>
    </BlueBox>
  );
}

export default Innovacion;

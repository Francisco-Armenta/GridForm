import { BlueBox, SpanBlueBox, TittleBlueBox } from "../StylesB";
import HonestidadIcon from "../../../assets/Icono-honestidad.svg";

function Honestidad() {
  return (
    <BlueBox>
      <img src={HonestidadIcon} alt="Honestidad" />
      <TittleBlueBox>Honestidad</TittleBlueBox>
      <SpanBlueBox>
        Trabajamos con un enfoque a ser totalmente genuinos y leales para
        brindar un mejor producto y servicio al cliente.
      </SpanBlueBox>
    </BlueBox>
  );
}

export default Honestidad;

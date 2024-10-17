import { BlueBox, SpanBlueBox, TittleBlueBox } from "../StylesB";
import ExelenciaIcon from "../../../assets/Icono-exelencia.svg";

function Exelencia() {
  return (
    <BlueBox>
      <img src={ExelenciaIcon} alt="Honestidad" />
      <TittleBlueBox>Exelencia</TittleBlueBox>
      <SpanBlueBox>
        Realizamos un trabajo ejemplar, de forma eficiente y efectiva asegurando
        la calidad y excelencia del trabajo realizado.
      </SpanBlueBox>
    </BlueBox>
  );
}

export default Exelencia;

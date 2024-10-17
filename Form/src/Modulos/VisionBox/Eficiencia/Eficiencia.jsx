import { BlueBox, SpanBlueBox, TittleBlueBox } from "../StylesB";
import EficienciaIcon from "../../../assets/Icono-eficiencia.svg";

function Eficiencia() {
  return (
    <BlueBox>
      <img src={EficienciaIcon} alt="Eficiencia" />
      <TittleBlueBox>Eficiencia</TittleBlueBox>
      <SpanBlueBox>
        Realizamos un trabajo ejemplar, de forma eficiente y efectiva asegurando
        la calidad y excelencia del trabajo realizado.
      </SpanBlueBox>
    </BlueBox>
  );
}

export default Eficiencia;

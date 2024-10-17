import HonestidadIcon from "../../../assets/Icono-honestidad.svg";
import ExcelenciaIcon from "../../../assets/Icono-exelencia.svg";
import InnovacionIcon from "../../../assets/Icono-innovacion.svg";
import ServicioIcon from "../../../assets/Icono-servicio.svg";
import EficienciaIcon from "../../../assets/Icono-eficiencia.svg";
import AccordionCard from "./AccordionCard";

const cartas = [
  {
    icono: <img src={HonestidadIcon} alt="Honestidad" />,
    titulo: "Honestidad",
    contenido:
      "Trabajamos con un enfoque a ser totalmente genuinos y leales para brindar un mejor producto y servicio al cliente.",
  },
  {
    icono: <img src={ExcelenciaIcon} alt="Excelencia" />,
    titulo: "Exelencia",
    contenido:
      "Realizamos un trabajo ejemplar, de forma eficiente y efectiva asegurando la calidad y excelencia del trabajo realizado.",
  },
  {
    icono: <img src={ServicioIcon} />,
    titulo: "Servicio",
    contenido:
      "Fomentamos canales de comunicación abierta entre clientes y compañeros, con el objetivo de mejorar la atención y calidad del servicio.",
  },
  {
    icono: <img src={EficienciaIcon} />,
    titulo: "Eficiencia",
    contenido:
      "Trabajamos de forma organizada, con un enfoque claro en resultados. Simple, eficiente, ágil y eficaz.",
  },
  {
    icono: <img src={InnovacionIcon} />,
    titulo: "Innovacion",
    contenido:
      "Fomentamos una cultura de retroalimentación que impulsa la mejora continua en cada aspecto de nuestro trabajo.",
  },
];

function Arreglo() {
  return (
    <>
      <AccordionCard cards={cartas} />
    </>
  );
}

export default Arreglo;

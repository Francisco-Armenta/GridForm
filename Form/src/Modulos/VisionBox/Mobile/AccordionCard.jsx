import { AccordionDetails, AccordionSummary, Box, colors } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AccordionBlue,
  SpanBlueBox,
  StackAccordion,
  TittleBlueBox,
} from "../StylesB";
import PropTypes from "prop-types";

function AccordionCard({ cards }) {
  console.log(cards);
  return (
    <StackAccordion spacing={2}>
      {cards.map((card, index) => (
        <AccordionBlue key={index}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                textJustify: "center",
                gap: "10px",
              }}
            >
              {card.icono}

              <TittleBlueBox> {card.titulo}</TittleBlueBox>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <SpanBlueBox sx={{ textAlign: "left", fontSize: "14px" }}>
              {card.contenido}
            </SpanBlueBox>
          </AccordionDetails>
        </AccordionBlue>
      ))}
    </StackAccordion>
  );
}

AccordionCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icono: PropTypes.element.isRequired, // Tipo para un nodo (puede ser JSX, string, etc.)
      titulo: PropTypes.string.isRequired, // El título debe ser un string
      contenido: PropTypes.string.isRequired, // El contenido debe ser un string
    })
  ).isRequired, // El prop `cards` es un array y es obligatorio
};

export default AccordionCard;

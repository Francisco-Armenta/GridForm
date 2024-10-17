import {
  StackGreeyBox,
  TypeContentBox,
  TypeTittle,
  ButtonGreeyBoxS,
  GreeyBox,
} from "../Styles";
import Box from "@mui/material/Box";
import Icono2 from "../../Imagenes/Icono2.png";

function BoxSearch() {
  return (
    <GreeyBox>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <img
          src={Icono2}
          style={{
            aspectRatio: "1/1",
            width: "100px",
            objectFit: "contain",
          }}
        />
        <StackGreeyBox>
          <TypeTittle>Seguimiento de denuncia</TypeTittle>
          <TypeContentBox>¿Cuál es el estatus de mi denuncia?</TypeContentBox>
          <TypeContentBox>
            ¿En qué paso va mi denuncia? Verifica el seguimiento de tu denuncia.
          </TypeContentBox>
        </StackGreeyBox>
      </div>

      <Box>
        <ButtonGreeyBoxS
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          Seguimiento de mi denuncia
        </ButtonGreeyBoxS>
      </Box>
    </GreeyBox>
  );
}

export default BoxSearch;

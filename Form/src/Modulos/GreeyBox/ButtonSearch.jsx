import {
  StackGreeyBox,
  ButtonGreeyBoxS,
  GreeyButton,
  TypeTittleButton,
  TypeContentMobile,
} from "../Styles";
import Box from "@mui/material/Box";
import Icono2 from "../../Imagenes/Icono2.png";

function ButtonSearch() {
  return (
    <GreeyButton variant="contained" sx={{ textTransform: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <img
          src={Icono2}
          style={{
            aspectRatio: "1/1",
            width: "52px",
            objectFit: "contain",
          }}
        />
        <StackGreeyBox spacing={1}>
          <TypeTittleButton>Seguimiento de denuncia</TypeTittleButton>
          <TypeContentMobile>
            ¿Cuál es el estatus de mi denuncia? ¿En qué paso va mi denuncia?
            Verifica el seguimiento de tu denuncia.
          </TypeContentMobile>
        </StackGreeyBox>
      </div>

      <Box>
        <ButtonGreeyBoxS
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          Seguimiento de mi denuncia
        </ButtonGreeyBoxS>
      </Box>
    </GreeyButton>
  );
}

export default ButtonSearch;

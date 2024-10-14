import {
  StackGreeyBox,
  ButtonGreeyBox,
  GreeyButton,
  TypeContentMobile,
  TypeTittleButton,
} from "../Styles";
import Icono1 from "../../Imagenes/Icono1.png";
import Box from "@mui/material/Box";

function ButtonCreate() {
  return (
    <GreeyButton sx={{ textTransform: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <img
          src={Icono1}
          style={{
            aspectRatio: "1/1",
            width: "52px",
            objectFit: "contain",
          }}
        />
        <StackGreeyBox spacing={1}>
          <TypeTittleButton>Línea de denuncia</TypeTittleButton>
          <TypeContentMobile>
            ¿Quieres denunciar algún tipo de comportamiento? Reporta cualquier
            incidente de forma anónima y segura.
          </TypeContentMobile>
        </StackGreeyBox>
      </div>

      <Box>
        <ButtonGreeyBox
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
          Registra tu denuncia
        </ButtonGreeyBox>
      </Box>
    </GreeyButton>
  );
}

export default ButtonCreate;

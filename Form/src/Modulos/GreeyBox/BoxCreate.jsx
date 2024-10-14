import {
  GreeyBox,
  StackGreeyBox,
  TypeTittle,
  TypeContentBox,
  ButtonGreeyBox,
} from "../Styles";
import Icono1 from "../../Imagenes/Icono1.png";
import Box from "@mui/material/Box";

function BoxCreate() {
  return (
    <GreeyBox>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={Icono1}
          style={{
            aspectRatio: "1/1",
            width: "100px",
            objectFit: "contain",
          }}
        />
        <StackGreeyBox>
          <TypeTittle>Línea de denuncia</TypeTittle>
          <TypeContentBox>
            ¿Quieres denunciar algún tipo de comportamiento?
          </TypeContentBox>
          <TypeContentBox>
            Reporta cualquier incidente de forma anónima y segura.
          </TypeContentBox>
        </StackGreeyBox>
      </div>

      <Box>
        <ButtonGreeyBox
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
        >
          Registra tu denuncia
        </ButtonGreeyBox>
      </Box>
    </GreeyBox>
  );
}

export default BoxCreate;

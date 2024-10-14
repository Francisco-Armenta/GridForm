import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TypeContentMobile, TypeTittleMobile } from "../Styles";
import Trabajador from "../../Imagenes/trabajador.png";
import GreeyBoxCreate from "../GreeyBox/GreeyBoxCreate";
import GreeyBoxSearch from "../GreeyBox/GreeyBoxSearch";
import ManualDeUsuario from "../GreeyBox/ManualDeUsuario";

function HomeMobile() {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        width: "90%",
        marginTop: "30px",
      }}
    >
      <Stack
        sx={{
          maxWidth: "calculate(100%-30px)",
        }}
      >
        <TypeTittleMobile>
          El presente mecanismo es un sistema de cumplimiento para prevenir,
          disuadir, detectar y otorgar tratamiento a conductas irregulares.
        </TypeTittleMobile>
      </Stack>

      <Stack direction="row" sx={{ maxWidth: "1440px" }}>
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
          <img
            src={Trabajador}
            style={{ width: "427px", height: "485px", marginRight: "40px" }}
          />
        </Box>

        <Box sx={{ overflow: "hidden", width: "100%" }}>
          <Stack spacing={1} sx={{ width: "100%" }}>
            <TypeContentMobile>
              ¿Has sido víctima o testigo de alguna irregularidad en Grupo
              Calzapato? Que vaya en contra del Código de Conducta, Valores o
              buenas prácticas, tu voz vale, es confidencial presenta aquí tu
              denuncia.
            </TypeContentMobile>
            <GreeyBoxCreate />
            <GreeyBoxSearch />
            <ManualDeUsuario />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default HomeMobile;

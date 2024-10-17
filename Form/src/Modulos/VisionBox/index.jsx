import Honestidad from "./Honestidad/Honestidad";
import Exelencia from "./Exelencia/Exelencia";
import { TypeSpan, TypeTittle, ContainerBox, StackBlueBox } from "./StylesB";
import Stack from "@mui/material/Stack";
import Servicio from "./Servicio/servicio";
import Eficiencia from "./Eficiencia/Eficiencia";
import Innovacion from "./Innovacion/Innovacion";
import { Box, useMediaQuery } from "@mui/material";

import Arreglo from "./Mobile/Arreglo";

function Valores() {
  const sizeSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      {sizeSmall ? (
        <Stack
          spacing={3}
          sx={{ width: "75%", maxWidth: "75%", height: "auto" }}
        >
          <Box>
            <TypeTittle>Valores</TypeTittle>
            <TypeSpan>
              Pasión por los resultados, innovación, trabajo en equipo,
              comunicación funcional y oportuna, lealtad y honestidad.
            </TypeSpan>
          </Box>
          <Arreglo />
        </Stack>
      ) : (
        <ContainerBox>
          <Stack
            spacing={3}
            sx={{ width: "75%", maxWidth: "75%", height: "auto" }}
          >
            <Box>
              <TypeTittle>Valores</TypeTittle>
              <TypeSpan>
                Pasión por los resultados, innovación, trabajo en equipo,
                comunicación funcional y oportuna, lealtad y honestidad.
              </TypeSpan>
            </Box>

            <StackBlueBox direction={"row"}>
              <Honestidad />
              <Exelencia />
              <Servicio />
              <Eficiencia />
              <Innovacion />
            </StackBlueBox>
          </Stack>
        </ContainerBox>
      )}
    </>
  );
}

export default Valores;

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  GreeyBox,
  StackGreeyBox,
  TypeContent,
  TypeContentBox,
  TypeTittle,
  ButtonGreeyBox,
} from "../Styles";
import Trabajador from "../../Imagenes/trabajador.png";
import Icono1 from "../../Imagenes/Icono1.png";

function Home() {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        width: "100%",
        marginTop: "30px",
      }}
    >
      <Stack
        sx={{
          maxWidth: "1440px",
          margin: "0px",
        }}
      >
        <TypeTittle>
          El presente mecanismo es un sistema de cumplimiento para prevenir,
          disuadir, detectar y otorgar tratamiento a conductas irregulares.
        </TypeTittle>
      </Stack>

      <Stack direction="row" sx={{ maxWidth: "1440px" }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={Trabajador}
            style={{ width: "427px", height: "485px", marginRight: "40px" }}
          />
        </Box>

        <Box sx={{ overflow: "hidden", width: "100%" }}>
          <Stack sx={{ width: "100%" }}>
            <TypeContent>
              ¿Has sido víctima o testigo de alguna irregularidad en Grupo
              Calzapato? Que vaya en contra del Código de Conducta, Valores o
              buenas prácticas, tu voz vale, es confidencial presenta aquí tu
              denuncia.
            </TypeContent>

            <GreeyBox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                  "@media (min-width:900px)": {
                    alignItems: "flex-start",
                  },

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
                <ButtonGreeyBox sx={{ display: { xs: "none", md: "block" } }}>
                  Registra tu denuncia
                </ButtonGreeyBox>
              </Box>
            </GreeyBox>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Home;

// function Home() {
//   return (
//     <BoxContainer sx={{ display: "flex", flexDirection: "column" }}>
//       <CustomHome>
//         <TypeHome>
//           El presente mecanismo es un sistema de cumplimiento para prevenir,
//           disuadir, detectar y otorgar tratamiento a conductas irregulares.
//         </TypeHome>
//       </CustomHome>

//       <CustomImagen>
//         <img src={Trabajador} style={{ objectFit: "contain" }} />
//       </CustomImagen>
//     </BoxContainer>
//   );
// }

// export default Home;

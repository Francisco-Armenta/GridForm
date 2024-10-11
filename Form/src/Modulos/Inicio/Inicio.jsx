import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypeHome, TypeContent, TypeContent2 } from "../Styles";
import Trabajador from "../../Imagenes/trabajador.png";
import Icono1 from "../../Imagenes/Icono1.png";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";

function Home() {
  return (
    <Box sx={{ flexGrow: 1, alignItems: "center" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{ marginTop: "50px" }}
      >
        <Grid size={{ sm: 0, md: 1 }}></Grid>
        <Grid size={{ sm: 12, md: 10 }}>
          <TypeHome>
            El presente mecanismo es un sistema de cumplimiento para prevenir,
            disuadir, detectar y otorgar tratamiento a conductas irregulares.
          </TypeHome>
        </Grid>
        <Grid size={{ sm: 0, md: 1 }}></Grid>
        <Grid size={{ sm: 0, md: 1 }}></Grid>
        <Grid size={{ xs: 0, sm: 0, md: 4 }}>
          <Box
            component="img"
            src={Trabajador}
            alt="example"
            sx={{
              width: "90%",
              height: "auto",
              maxWidth: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
          ></Box>
        </Grid>

        <Grid size={{ sm: 10, md: 6 }}>
          <Grid container rowSpacing={2}>
            <Grid size={12}>
              <TypeContent>
                ¿Has sido víctima o testigo de alguna irregularidad en Grupo
                Calzapato? Que vaya en contra del Código de Conducta, Valores o
                buenas prácticas, tu voz vale, es confidencial presenta aquí tu
                denuncia.
              </TypeContent>
            </Grid>
          </Grid>

          <Grid
            size={12}
            sx={{
              maxHeight: "140px",
              backgroundColor: "#F2F2F2",
              borderRadius: "8px",
              padding: "20px 0px 20px 20px",
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid container spacing={0}>
              <Grid size={{ xs: 2, md: 1.5, lg: 2 }}>
                <Box
                  component="img"
                  src={Icono1}
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                ></Box>
              </Grid>
              <Grid size={7}>
                <TypeHome sx={{ alignItems: "start" }}>
                  Línea de denuncia
                  <TypeContent2 sx={{ textAlign: "justify" }}>
                    ¿Quieres denunciar algún tipo de comportamiento?
                    <br />
                    Reporta cualquier incidente de forma anónima y segura.
                  </TypeContent2>
                </TypeHome>
              </Grid>
              <Grid
                size={{ xs: 0, sm: 0, md: 3 }}
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "right",
                }}
              >
                <Button
                  variant="contined"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#243B7A",
                    fontSize: "11px",
                    width: "184px",
                    height: "38px",
                    color: "white",
                    padding: "3px",
                  }}
                >
                  Registra tu denuncia
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
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

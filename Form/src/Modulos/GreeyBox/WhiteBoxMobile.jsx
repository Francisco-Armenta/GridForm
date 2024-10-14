import { WhiteBox, TypeManual, TypeManualSecondary } from "../Styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MyIcon from "../../assets/Icon.svg";
import IconDownload from "../../assets/IconDownload.svg";
import { Box } from "@mui/material";

function WhiteBoxMobile() {
  return (
    <WhiteBox>
      <Stack sx={{ alignItems: "center", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E9F8DF",
            width: "100%",
            height: "28px",
            borderRadius: "4px",
          }}
        >
          <img
            src={MyIcon}
            width={26}
            height={26}
            style={{ margin: "10px 20px 10px 15px" }}
          />

          <TypeManualSecondary sx={{ color: "#0B7E28" }}>
            Confidencialidad garantizada
          </TypeManualSecondary>
        </Box>
        <Box>
          <TypeManual sx={{ textAlign: "center" }}>
            ¿Cómo hago mi denuncia? Descarga aquí el manual de cómo hacer tu
            denuncia paso por paso.
          </TypeManual>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              width: "100%",
              height: "36px",
              backgroundColor: "white",
              border: " 1px solid #243B7A",
              color: "#243B7A",
            }}
          >
            <img
              src={IconDownload}
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            Manual de usuario
          </Button>
        </Box>
      </Stack>
    </WhiteBox>
  );
}

export default WhiteBoxMobile;

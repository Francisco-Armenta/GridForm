import { WhiteBox, TypeManual, TypeManualSecondary } from "../Styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MyIcon from "../../assets/Icon.svg";
import IconDownload from "../../assets/IconDownload.svg";

function WhiteBoxPc() {
  return (
    <WhiteBox>
      <Stack>
        <TypeManual>
          ¿Cómo hago mi denuncia? Descarga aquí el manual de cómo hacer tu
          denuncia paso por paso.
        </TypeManual>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            width: "193px",
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
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          width: "208px",
          height: "65px",
          background: "#E9F8DF",
          borderRadius: "5px",
          padding: "5px 10px 5px 10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={MyIcon} style={{ margin: "10px 20px 10px 15px" }} />

        <TypeManualSecondary sx={{ color: "#0B7E28" }}>
          Confidencialidad garantizada
        </TypeManualSecondary>
      </Stack>
    </WhiteBox>
  );
}

export default WhiteBoxPc;

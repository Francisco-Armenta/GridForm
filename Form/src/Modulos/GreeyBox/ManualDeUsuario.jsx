import { useMediaQuery } from "@mui/material";
import WhiteBoxMobile from "./WhiteBoxMobile";
import WhiteBoxPc from "./WhiteBoxPc";

function ManualDeUsuario() {
  const sizeSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return <>{sizeSmall ? <WhiteBoxMobile /> : <WhiteBoxPc />}</>;
}

export default ManualDeUsuario;

import BoxCreate from "./BoxCreate";
import ButtonCreate from "./ButtonCreate";
import { useMediaQuery } from "@mui/material";

function GreeyBoxCreate() {
  const sizeSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return <>{sizeSmall ? <ButtonCreate /> : <BoxCreate />}</>;
}

export default GreeyBoxCreate;

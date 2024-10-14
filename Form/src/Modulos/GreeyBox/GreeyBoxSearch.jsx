import { useMediaQuery } from "@mui/material";
import BoxSearch from "./BoxSearch";
import ButtonSearch from "./ButtonSearch";

function GreeyBoxSearch() {
  const sizeSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return <>{sizeSmall ? <ButtonSearch /> : <BoxSearch />}</>;
}

export default GreeyBoxSearch;

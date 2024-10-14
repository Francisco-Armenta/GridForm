import HomeMobile from "./InicioMobile";
import HomePc from "./InicioPc";
import { useMediaQuery } from "@mui/material";

function Home() {
  const sizeSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return <>{sizeSmall ? <HomeMobile /> : <HomePc />}</>;
}

export default Home;

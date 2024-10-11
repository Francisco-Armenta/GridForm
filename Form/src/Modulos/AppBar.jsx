import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Logo from "../Imagenes/Logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { CustomAppBar } from "./Styles";

function MyAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "black", height: "84.91" }}
    >
      <Toolbar>
        <CustomAppBar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Logo"
            sx={{ width: "100px" }}
          >
            <img
              src={Logo}
              style={{ height: 30, display: "flex", alignItems: "start" }}
            />
          </IconButton>
        </CustomAppBar>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            <strong>LÍNEA DE BUENA PRACTICA</strong>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", marginRight: "5vw" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#243B7A",
              width: "146px",
              height: "34px",
              padding: "5px 10px 5px 10px",
              textTransform: "none",
              borderRadius: "5px",
            }}
          >
            Regresar
            <LogoutIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;

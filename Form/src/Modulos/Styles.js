import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const CustomAppBar = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  marginLeft: "100px",
});

export const TypeTittle = styled(Typography)({
  fontFamily: "Circular std",
  fontSize: "24.5px",
  fontWeight: "700",
  textAlign: "left",
  width: "100%",
  color: "#000000",
});

export const TypeContent = styled(Typography)({
  fontFamily: "Circular Std",
  fontSize: "23px",
  fontWeight: "450",
  lineHeight: "27.83px",
  textAlign: "left",
  textJustify: "auto",
});

export const GreeyBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#F2F2F2",
  borderRadius: "8px",
  justifyContent: "space-between",
  width: "calculate(100%-15px)",
  height: "auto",
  padding: "20px",
});

export const TypeContentBox = styled(Typography)({
  fontFamily: "Circular Std",
  fontSize: "16px",
  fontWeight: "450",
  lineHeight: "27.83px",
  textAlign: "left",
  textJustify: "auto",
});

export const StackGreeyBox = styled(Stack)({
  alignItems: "flex-start",
});

export const ButtonGreeyBox = styled(Button)({
  backgroundColor: "#243B7A",
  marginTop: "56px",
  width: "184px",
  height: "44px",
  color: "white",
  textTransform: "none",
});

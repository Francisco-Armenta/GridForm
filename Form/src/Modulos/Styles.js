import { styled } from "@mui/material/styles";

export const CustomAppBar = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  marginLeft: "100px",
});

export const TypeHome = styled("div")({
  display: "flex",
  margin: "10px",
  fontFamily: "Circular std",
  fontSize: "20px",
  fontWeight: "700",
  flexDirection: "column",

  textAlign: "center",
  color: "#000000",
});

export const TypeContent = styled("div")({
  fontFamily: "Circular Std",
  fontSize: "18px",
  fontWeight: "450",
  lineHeight: "27.83px",
  textAlign: "left",
});

export const TypeContent2 = styled("div")({
  fontFamily: "Circular Std",
  fontSize: "12px",
  fontWeight: "450",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textAlign: "left",
});

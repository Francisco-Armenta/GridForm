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
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "23px",
  fontWeight: "700",
  textAlign: { xs: "center", sm: "center", md: "center" },
  width: "100%",
  color: "#000000",
});

export const TypeTittleMobile = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "16px",
  fontWeight: "700",
  textAlign: { xs: "center", sm: "center", md: "center" },
  lineHeight: "20px",
  width: "100%",
  color: "#000000",
});
export const TypeTittleButton = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "20px",
  fontWeight: "700",
  textAlign: { xs: "center", sm: "center", md: "center" },
  lineHeight: "20px",
  width: "100%",
  color: "#000000",
});

export const TypeContent = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "23px",
  fontWeight: "450",
  lineHeight: "27.83px",
  textAlign: "left",
  textJustify: "auto",
});

export const TypeContentMobile = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "12px",
  fontWeight: "450",
  lineHeight: "15px",
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
  marginBottom: "20px",
});

export const GreeyButton = styled(Button)({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#F2F2F2",
  borderRadius: "8px",
  justifyContent: "space-between",
  width: "100%",
  height: "auto",
  padding: "20px",
  marginBottom: "20px",
  color: "black",
});

export const TypeContentBox = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "16px",
  fontWeight: "450",
  lineHeight: "27.83px",
  textAlign: "left",
  textJustify: "auto",
});

export const StackGreeyBox = styled(Stack)({
  alignItems: "flex-start",
  textAlign: "left",
});

export const ButtonGreeyBox = styled(Button)({
  backgroundColor: "#243B7A",
  marginTop: "56px",
  width: "184px",
  height: "44px",
  color: "white",
  textTransform: "none",
});

export const WhiteBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "white",
  borderRadius: "8px",
  width: "100%",
  justifyContent: "space-between",

  height: "auto",
  padding: "0px",
  marginBottom: "20px",
});

export const TypeManual = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "15px",
  fontWeight: "450",
  lineHeight: "27.83px",
  textAlign: "left",
  textJustify: "auto",
  flexWrap: "wrap",
});

export const TypeManualSecondary = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "27.83px",
  textAlign: "left",
  textJustify: "auto",
  flexWrap: "wrap",
});

export const ButtonGreeyBoxS = styled(Button)({
  backgroundColor: "#243B7A",
  marginTop: "56px",
  width: "243px",
  height: "44px",
  color: "white",
  textTransform: "none",
});

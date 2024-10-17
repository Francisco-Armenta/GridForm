import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";

export const ContainerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#E9EBF2",
  width: "100%",
  minHeight: "566px",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px",
});

export const TypeTittle = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "30px",
  fontWeight: "700",
  lineHeight: "37.95px",
  textAlign: "center",
  color: "#000000",
  width: "100%",
});
//74.47%
export const TypeSpan = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontSize: "20px",
  fontWeight: "450",
  lineHeight: "25.3px",
  textAlign: "center",
  color: "#000000",
});

export const TittleBlueBox = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontWeight: "700",
  lineHeight: "31.62px",
  textAlign: "center",
  textJustify: "center",
  color: "#FFFFFF",
  fontSize: "20px",
  "@media (min-width: 1800px)": {
    fontSize: "25px",
  },
});

export const SpanBlueBox = styled(Typography)({
  fontFamily: "'Circular Std',sans-serif",
  fontWeight: "450",
  lineHeight: "17.71px",
  textAlign: "center",
  color: "#FFFFFF",
  fontSize: "12px",
  "@media (min-width: 1800px)": {
    fontSize: "14px",
  },
});

export const BlueBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "3%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#243B7A",
  borderRadius: "20px",
  width: "18%",
  minWidth: "179px",
  maxHeight: "221",
  aspectRatio: "246/310",
  padding: "1%",
});

export const StackBlueBox = styled(Stack)({
  alignItems: "center",
  width: "100%",
  gap: "2%",
  height: "auto",
  "@media (max-width: 1430px)": {
    overflowX: "scroll",
  },
});

export const AccordionBlue = styled(Accordion)({
  alignItems: "center",
  width: "100%",
  gap: "2%",
  height: "auto",
  backgroundColor: "#243B7A",
});

export const StackAccordion = styled(Stack)({
  alignItems: "center",
  width: "100%",
  height: "auto",
});

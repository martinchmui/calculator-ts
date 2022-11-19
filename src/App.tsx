import React, { useState } from "react";
import { Paper, styled, Container, Grid, Button } from "@mui/material";
import { OperationButton } from "./OperationButton";
import { DigitButton } from "./DigitButton";

const OutputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };
  const selectOperation = (operation: string) => {
    if (prevValue) {
      const value = calculate();
      setCurrentValue(`${value}`);
      setPrevValue(`${value}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };
  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };
  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };
  const percent = () => {
    const current = parseFloat(currentValue);
    setCurrentValue((current / 100).toString());
  };
  const calculate = () => {
    if (!prevValue || !operation) return currentValue;
    const current = parseFloat(currentValue);
    const previous = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "÷":
        result = previous / current;
        break;
      case "×":
        result = previous * current;
        break;
      case "-":
        result = previous - current;
        break;
      case "+":
        result = previous + current;
        break;
    }
    return result;
  };
  const equals = () => {
    const value = calculate();
    setCurrentValue(`${value}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <OperationButton
              operation={"AC"}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <OperationButton
              operation={"C"}
              selectOperation={del}
              selectedOperation={operation}
            />
            <OperationButton
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <OperationButton
              operation={"÷"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"7"} enterDigit={setDigit} />
            <DigitButton digit={"8"} enterDigit={setDigit} />
            <DigitButton digit={"9"} enterDigit={setDigit} />
            <OperationButton
              operation={"×"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"4"} enterDigit={setDigit} />
            <DigitButton digit={"5"} enterDigit={setDigit} />
            <DigitButton digit={"6"} enterDigit={setDigit} />
            <OperationButton
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"1"} enterDigit={setDigit} />
            <DigitButton digit={"2"} enterDigit={setDigit} />
            <DigitButton digit={"3"} enterDigit={setDigit} />
            <OperationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <DigitButton digit={"0"} enterDigit={setDigit} xs={6} />
            <DigitButton digit={"."} enterDigit={setDigit} />
            <Grid item xs={3}>
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;

import { Button, Grid } from "@mui/material";

interface DigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}

export const DigitButton: React.FC<DigitButtonProps> = ({
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};

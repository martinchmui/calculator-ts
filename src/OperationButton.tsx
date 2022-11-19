import { Button, Grid, styled } from "@mui/material";

interface OperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgba(0, 0, 139, .1)",
  borderColor: props.selected ? "#fff" : "rgba(0, 0, 139, 0.5)",
}));

export const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  selectedOperation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};

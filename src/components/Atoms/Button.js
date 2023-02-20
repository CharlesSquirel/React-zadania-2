import { StyledButton } from "./StyledButton";

function Button({onClick, title}) {
  return (
      <StyledButton onClick={onClick}>
        {title}
      </StyledButton>
  );
}

export default Button;

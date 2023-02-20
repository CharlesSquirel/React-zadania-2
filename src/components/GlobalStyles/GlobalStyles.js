import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  border: none;

}

select, button {
    cursor: pointer;
}
`;

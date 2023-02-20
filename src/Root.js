import "./App.css";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import ProductsList from "./components/ProductsList/ProductsList";

function Root() {
  return (
    <>
      <GlobalStyle />
      <ProductsList />
    </>
  );
}

export default Root;

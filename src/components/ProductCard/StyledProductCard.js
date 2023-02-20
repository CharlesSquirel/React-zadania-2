import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 15px;
  border-radius: 5px;
  border: 2px solid rgb(248, 141, 141);
  background-color: white;
  padding: 10px;

  h1 {
    font-size: 50px;
    text-transform: capitalize;
  }

  .category,
  .brand {
    font-style: italic;
    text-transform: capitalize;
    font-size: 22px;
  }

  .img {
    width: 367px;
    height: 248px;
  }

  .description {
    font-size: 20px;
    font-weight: 400;
  }

  .price {
    font-size: 35px;
  }
`;

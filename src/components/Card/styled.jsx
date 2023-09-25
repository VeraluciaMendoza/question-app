import { styled } from "styled-components"

export const Wrapper = styled.div`
  width: 155px;
  min-height: 155px;
  border-radius: 20px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  margin-top: 2.5rem;
  padding: 1rem;

  /* img {
    position: absolute;
    top: -20px;
  } */
`

export const ImageContainer = styled.div`
  display: inline-block;
  /* position: relative; */
  overflow: hidden;

  img {
    position: absolute;
    top: -20px;
  }

  div {
    width: 81px;        /* Define el ancho del óvalo */
    height: 8px;       /* Define la altura del óvalo */
    background-color: rgba(28, 28, 28, 0.77); /* Color del óvalo, elige el que prefieras */
    border-radius: 50%; 
  }

`

export const Category = styled.h4`
  color: red;
`
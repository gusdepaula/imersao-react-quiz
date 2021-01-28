import styled from "styled-components";

const LoadingSpan = styled.span`
  display: block;
  width: 70px;
  height: 70px;
  margin: auto;
  border: 6px solid #0d47a1;
  border-left-color: transparent;
  border-radius: 100%;
  -webkit-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpan;

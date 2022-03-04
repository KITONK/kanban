import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  width: 1920px;
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 1600px) {
    width: 1140px;
  }
`;

export default Container;

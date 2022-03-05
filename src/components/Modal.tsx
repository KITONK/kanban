import React from "react";
import styled from "styled-components";

interface Props {
    active: any;
    setActive: any;
    children: any;
}

const Modal = ({active, setActive, children}: Props) => {
    return (
        <Wrapper className={active ? "active" : ""} onClick={() => setActive(false)}>
            <Content className={active ? "active" : ""} onClick={e => e.stopPropagation()}>
                {children}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;

    &.active {
        opacity: 1;
        pointer-events: all;
    }
`;

const Content = styled.div`
    padding: 36px 50px;
    border-radius: 12px;
    background-color: white;
    width: 50%;
    transform: scale(0.5);
    transition: 0.4s all;

    &.active {
        transform: scale(1);
    }
`;

export default Modal;
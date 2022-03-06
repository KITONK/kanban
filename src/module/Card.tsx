import React from "react";
import styled from "styled-components";

interface Props {
    card: any;
    status?: any;
    canMoveLeft?: any;
    canMoveRight?: any;
    onMoveLeft?: any;
    onMoveRight?: any;
    onOpen?: any;
}

const Card = ({
    card,
    status,
    canMoveLeft, 
    canMoveRight,
    onMoveLeft,
    onMoveRight,
    onOpen,
    } : Props) => {

    return (
    <Wrapper onClick={onOpen}>
        <Title>
            <Text>{card.text}</Text>
            <Action>
                {canMoveLeft && <Arrow onClick={onMoveLeft}>
                    <Image src="/images/Button/arrow_left.svg" alt="arrowLeft"/>
                </Arrow>}
                {canMoveRight && <Arrow onClick={onMoveRight}>
                    <Image src="/images/Button/arrow_right.svg" alt="arrowRight"/>
                </Arrow>}
            </Action>
        </Title>
        <Description>{card.description}</Description>
    </Wrapper>
)};

const Wrapper = styled.div`
    padding: 19px 13px;
    background-color: #C4C4C4;
    margin-bottom: 30px;
`;

const Title = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
`;


const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: #000000;

    @media (max-width: 1440px) {
        font-size: 18px;
    }
`;

const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 8px;
`;

const Arrow = styled.button`
    background-color: #ffffff;
    padding: 21px 13px;
`;

const Image = styled.img``;

const Description= styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;

    @media (max-width: 1440px) {
        font-size: 18px;
    }
`;

export default Card;
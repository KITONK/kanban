import React from "react";
import styled from "styled-components";

import Card from "./Card";

interface Props {
    board: any;
    cards: any;
    columnIndex: number;
    onMoveLeft: any;
    onMoveRight: any;
}

const Board = ({
    board,
    cards, 
    columnIndex,
    onMoveLeft,
    onMoveRight,
    } : Props) => {
    return (
        <Wrapper>
            <Title>
                <TitleText>{board.title}</TitleText>
            </Title>
            {cards.map((card: any, cardIndex: any) => (
                <Card 
                    key={cardIndex} 
                    card={card}
                    canMoveLeft={columnIndex !== 0}
                    canMoveRight={columnIndex !== 3}
                    onMoveLeft={() => onMoveLeft(cardIndex)}
                    onMoveRight={() => onMoveRight(cardIndex)}
                />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: calc(24.08% - 6px);
    height: calc(100vh - 108px);
    padding: 27px 28px;
    background-color: white;
`;

const Title = styled.div`
    margin-bottom: 63px;
`;

const TitleText = styled.span`
    font-family: "Roboto", sans-serif;
    font-size: 27px;
    line-height: 32px;
    color: #000000;
`;

export default Board;
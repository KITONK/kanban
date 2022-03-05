import React, { useState } from "react";
import styled from "styled-components";

import Card from "./Card";
import Input from "./Input/Input";
import Modal from "./Modal";

interface Props {
    board: any;
    cards: any;
    columnIndex: number;
    onMoveLeft: any;
    onMoveRight: any;
    onRemove: any;
}

const Board = ({
    board,
    cards, 
    columnIndex,
    onMoveLeft,
    onMoveRight,
    onRemove
    } : Props) => {

    const [isOpen, onOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const showCardModal = () => {
        return (
            <>
                <Modal 
                    active={isOpen} 
                    setActive={onOpen}
                >
                    {cards.map((card: any, cardIndex: any) => (
                        <CardModal key={cardIndex}>
                            <Content>
                                <Column type="input">
                                    <Input
                                        label="Title"
                                        name="title"
                                        value={card.text}
                                        onChange={(e: any) => setTitle(e.target.value)}
                                        placeholder="Card title"
                                    />
                                    <Input
                                        label="Description"
                                        name="description"
                                        type="description"
                                        value={card.description}
                                        onChange={(e: any) => setDescription(e.target.value)}
                                        placeholder="Card description"
                                    />
                                </Column>
                                <Column type="content">
                                    <Status>
                                        Status: <span>{board.title}</span>
                                    </Status>
                                    
                                    {card.tags.map((tag: any) => (
                                        <div key={tag.title} style={{display: "flex", gap: "70px", alignItems: "center", marginTop: "20px"}}>
                                            <span style={{fontSize: "18px"}}>Tags:</span>
                                        <Tag style={{color: tag.color || "white", backgroundColor: tag.bgcolor || 'orange'}}>{tag.title}</Tag>
                                        </div>
                                    ))}
                                    
                                    {card.user.map((executor: any) => (
                                        <div key={executor.lastName - executor.firstName} style={{display: "flex", gap: "42px", alignItems: "center", marginTop: "20px"}}>
                                            <span style={{fontSize: "18px"}}>Executor:</span>
                                            <User>
                                                <Name>{executor.name} - {executor.firstName} {executor.lastName}</Name>
                                                <Email>{executor.email}</Email>
                                            </User>
                                        </div>
                                    ))}
                                </Column>
                            </Content>
                            <ButtonBlock>
                                <Button onClick={() => { onOpen(false)}}>Save</Button>
                                <Button types="delete" onClick={() => { onRemove(board.id, cardIndex), onOpen(false)}}>Delete</Button>
                            </ButtonBlock>
                        </CardModal>
                    ))}
                </Modal>
            </>
        )
    }

    return (
        <Wrapper>
            <Title>
                <TitleText>{board.title}</TitleText>
            </Title>
            {cards.map((card: any, cardIndex: any) => (
                <Card 
                    key={cardIndex} 
                    card={card}
                    status={board.title}
                    onOpen={onOpen}
                    canMoveLeft={columnIndex !== 0}
                    canMoveRight={columnIndex !== 3}
                    onMoveLeft={() => onMoveLeft(cardIndex)}
                    onMoveRight={() => onMoveRight(cardIndex)}
                />
            ))}
            {showCardModal()}
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

const CardModal = styled.div``;
const Content = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`;

const Tag = styled.div`
    padding: 2px 3px;
    border-radius: 3px;
    margin: 2px 5px;
    font-size: 70%;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
`;

const Column = styled.div<{type?: string}>`
    ${({type}) =>
        type === "input" &&
        `
        width: 60%;        
    `};

    ${({type}) =>
        type === "content" &&
        `
        width: 30%;        
    `};
`;

const Status = styled.div`
    display: flex; 
    gap: 60px;
    align-items: center;
    font-size: 18px;
`;

const Name = styled.span`
    font-size: 18px;
`;
const Email = styled.span`
    margin-top: -1px;
    text-align: center;
    font-size: 14px;
`;

const ButtonBlock = styled.div`
    display: flex; 
    justify-content: end;
    gap: 8px;
`;

const Button = styled.button<{types?: string}>`
    font-size: 18px;
    border-radius: 4px;
    border: 2px solid #c7c7c7;
    background-color: transparent;
    color: #5a5a5a;

    ${({types}) =>
        types === "delete" &&
        `
        border: 2px solid #f5547d;
        background-color: #f5547d;
        color: white;
    `};
`;

export default Board;
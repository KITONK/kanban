import React, { useState } from "react";
import styled from "styled-components";

import Input from "../components/Input/Input";
import Modal from "./Modal";
import TextArea from "../components/TextArea/TextArea";

interface Props {
    onAddCard: (e:any, t: any) => void;
}

const AddCard = ({onAddCard} : Props) => {

    const [isOpen, onOpen] = useState(false);
    const [cardTitleValue, setCardTitleValue] = useState('');
    const [cardDescriptionValue, setCardDescriptionValue] = useState('');
    const [cardTagsValue, setCardTagsValue] = useState('');
    const [executorNameValue, setExecutorNameValue] = useState('');
    const [executorFirstNameValue, setExecutorFirstNameValue] = useState('');
    const [executorLastNameValue, setExecutorLastNameValue] = useState('');
    const [executorEmailValue, setExecutorEmailValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onClose = () => {
        onOpen(false);
        setCardTitleValue('');
        setCardDescriptionValue('');
    }

    const addCard = () => {
        if(!cardTitleValue || !cardDescriptionValue) {
            alert('Enter data');
            return;
        }

        const obj = {
            id: Math.random(),
            text: cardTitleValue,
            description: cardDescriptionValue,
            tag: cardTagsValue,
            user: [{
                name: executorNameValue, 
                firstName: executorFirstNameValue,
                lastName: executorLastNameValue,
                email: executorEmailValue,
            }],
        };

        setIsLoading(true);
        onAddCard(1, obj);
        onClose();
        setIsLoading(false);

    }

    return (
        <div>
            <Button onClick={() => onOpen(true)}>
                <span>+</span>
            </Button>
             {isOpen && (
                <Modal 
                    active={isOpen} 
                    setActive={onOpen}                 
                >
                    <Button type="close" onClick={onClose}>
                        <span>X</span>    
                    </Button>
                        <Input 
                            label="Card title"
                            value={cardTitleValue}
                            onChange={(e: any) => setCardTitleValue(e.target.value)}
                            placeholder="Enter card title here" 
                            name="title"
                        />
                        <TextArea 
                            label="Card description"
                            value={cardDescriptionValue} 
                            onChange={(e:any) => setCardDescriptionValue(e.target.value)} 
                            placeholder="Enter card description here"
                            name="description"
                        />
                        <Input 
                                label="Card tags"
                                value={cardTagsValue}
                                onChange={(e: any) => setCardTagsValue(e.target.value)}
                                placeholder="Enter card tags here" 
                                name="tags"
                        />
                        <Row>
                            <div>
                                <Input 
                                    label="Executor nickname"
                                    value={executorNameValue} 
                                    onChange={(e:any) => setExecutorNameValue(e.target.value)} 
                                    placeholder="Enter executor nickname here"
                                    name="nickname"
                                />
                            </div>
                            <div>
                                <Input 
                                    label="Executor email"
                                    value={executorEmailValue} 
                                    onChange={(e:any) => setExecutorEmailValue(e.target.value)} 
                                    placeholder="Enter executor email here"
                                    name="executor"
                                    type="email"
                                />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <Input 
                                    label="Executor first name"
                                    value={executorFirstNameValue} 
                                    onChange={(e:any) => setExecutorFirstNameValue(e.target.value)} 
                                    placeholder="Enter executor first name here"
                                    name="firstName"
                                />
                            </div>
                            <div>
                                <Input 
                                    label="Executor last name"
                                    value={executorLastNameValue} 
                                    onChange={(e:any) => setExecutorLastNameValue(e.target.value)} 
                                    placeholder="Enter executor last name here"
                                    name="lastName"
                                />
                            </div>
                        </Row>
                        <ButtonBlock>
                            <AddButton onClick={addCard}>
                                {isLoading ? "Adding..." : "Add Card"}
                            </AddButton>
                        </ButtonBlock>
                </Modal>
            )}
        </div>
    );
};

const AddButton = styled.button`
    background: #9611FF;
    font-size: 18px;
    padding: 7px 10px;
    border-radius: 4px;
    border: 2px solid #9611FF;
    color: white;
    cursor: pointer;
`;

const ButtonBlock = styled.div`
    display: flex; 
    justify-content: end;
    gap: 8px;
`;

const Row = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;

    & > div {
        width: calc(50% - 12px);
    }
`;

const Button = styled.div<{type?: string}>`
  border-radius: 50%;
  padding: 20px 25px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background-color: #9611FF;
  position: absolute;
  bottom: 40px;
  right: 120px;
  cursor: pointer;

  ${({type}) =>
    type === "close" &&
    `
        color: #9611FF;
        padding: 0;
        top: 10px;
        right: 20px;
        bottom: 950px;
    `};

`;

export default AddCard;
import { useState } from "react";
import styled from "styled-components";

interface Props {
    onAddTask: (e:any, t: any) => void;
}

const AddCard = ({onAddTask} : Props) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [cardTitleValue, setCardTitleValue] = useState('');
    const [cardDescriptionValue, setCardDescriptionValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onClose = () => {
        setVisiblePopup(false);
        setCardTitleValue('');
        setCardDescriptionValue('');
    }

    const addTask = () => {
        if(!cardTitleValue || !cardDescriptionValue) {
            alert('Enter data');
            return;
        }

        const obj = {
            id: Math.random(),
            text: cardTitleValue,
            description: cardDescriptionValue,
        };

        setIsLoading(true);
        onAddTask(1, obj);
        onClose();
        setIsLoading(false);

    }

    return (
        <div>
            <Button onClick={() => setVisiblePopup(true)}>
                <Image src="/images/Button/plus.svg" alt="plus" />
            </Button>
             {visiblePopup && (
                <Popup>
                    <PopupDialog>
                        <Button type="close">
                            <Image 
                                onClick={onClose}
                                src="/images/Button/close.svg"
                                alt="close"
                            />
                        </Button>
                        <Input 
                            value={cardTitleValue} 
                            onChange={e => setCardTitleValue(e.target.value)} 
                            className="field" 
                            placeholder="Enter task title here"
                        />
                        <Input 
                            value={cardDescriptionValue} 
                            onChange={e => setCardDescriptionValue(e.target.value)} 
                            className="field" 
                            placeholder="Enter task description here"
                            type="description"
                        />
                        <AddButton onClick={addTask}>
                            {isLoading ? "Adding..." : "Add"}
                        </AddButton>
                    </PopupDialog>
            </Popup>
            )}
        </div>
    );
};

const AddButton = styled.button`
    background: #9611FF;
    color: white;
    border: 1px solid #C9C9C9;
    box-sizing: border-box;
    border-radius: 14px;
    padding: 23px 44px;
    font-size: 27px;
    cursor: pointer;
`;

const Input = styled.input<{type?: string}>`
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    box-sizing: border-box;
    border-radius: 14px;
    padding: 23px 44px;
    margin-bottom: 20px;
    font-size: 27px;

    ${({type}) =>
    type === "description" &&
    `
        padding: 23px 44px 116px;
    `};

    ::placeholder {
        font-family: "Roboto", sans-serif;
        font-size: 27px;
        line-height: 32px;
        color: #555353;
    }
`;

const Popup = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
`;

const PopupDialog = styled.div`
    width: 100%;
    max-width: 1214px;
    background: white;
    position: relative;
    padding: 242px 184px;
    background-color: #FFFFFF;
    max-height: calc(100vh - 40px);
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Button = styled.div<{type?: string}>`
  width: 137px;
  padding: 48px 58px;
  border-radius: 50%;
  background-color: #9611FF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 100px;
  right: 40px;
  cursor: pointer;

  ${({type}) =>
    type === "close" &&
    `
        padding: 65px 58px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 950px;
    `};

`;

const Image = styled.img``;

export default AddCard;
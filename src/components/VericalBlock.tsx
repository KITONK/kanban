import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task";

interface Props {
    board: any;
    tasks: any;
    columnIndex: number;
    onMoveLeft: any;
    onMoveRight: any;
}

const VerticalBlock = ({
    board,
    tasks, 
    columnIndex,
    onMoveLeft,
    onMoveRight,
    } : Props) => {
    return (
        <Wrapper>
            <Title><span>{board.title}</span></Title>
            {tasks.map((task: any, taskIndex: any) => (
                <Task 
                    key={taskIndex} 
                    task={task}
                    canMoveLeft={columnIndex !== 0}
                    canMoveRight={columnIndex !== 3}
                    onMoveLeft={() => onMoveLeft(taskIndex)}
                    onMoveRight={() => onMoveRight(taskIndex)}
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

    span {
        font-family: "Roboto", sans-serif;
        font-size: 27px;
        line-height: 32px;
        color: #000000;
    }
`;

export default VerticalBlock;
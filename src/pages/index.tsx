import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";

import Container from '../components/Container';
import Board from '../components/Board';
import AddCard from '../components/AddCard';
import { addCard, moveCard, removeCard } from '../redux/actions/actions';
import { getBoards } from '../redux/reducers';
import { useState } from 'react';

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector(getBoards);
  
  const onAddTask = (listId: any, taskObj: any) => {
    dispatch(addCard({listId, taskObj}));
  }

  const onMove = (columnIndex: number, taskIndex: number, direction: any) => {
    dispatch(moveCard({columnIndex, taskIndex, direction}));
  }

  const onRemove = (listId: any, taskId: any) => {
      dispatch(removeCard({listId, taskId}));
  }

  const [cardDetailActive, setCardDetailActive] = useState(true);

  return (
      <Wrapper>
        <Container>
        <Row>
          {boards.map((board: any, columnIndex: any) =>
            <Board 
              key={columnIndex}
              cards={board.cards}
              columnIndex={columnIndex}
              board={board}
              onMoveLeft={(cardIndex: any) => onMove(columnIndex, cardIndex, DIRECTION_LEFT)}
              onMoveRight={(cardIndex: any) => onMove(columnIndex, cardIndex, DIRECTION_RIGHT)}
              onRemove={(taskId: any) => onRemove(board.id, taskId)}
            />
          )}
        </Row>
        <AddCard
          onAddTask={onAddTask}
        />
        </Container>
      </Wrapper>
)};


const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0 21px;
  padding: 48px 0;
`;

const Wrapper = styled.div`
  background-color: #C4C4C4;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Title = styled.span``;

export default Home;


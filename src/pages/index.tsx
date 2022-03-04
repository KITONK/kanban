import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import AddTask from '../components/AddTask';
import Container from '../components/Container';
import VerticalBlock from '../components/VericalBlock';
import { addCard, moveCard } from '../redux/actions/actions';
import { getBoards } from '../redux/reducers';

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

  // const handleMove = (columnIndex: number, taskIndex: number, direction: any) => {
  //       console.log("hello")
  //       setBoarders(board => {
  //         board = [...board];
  //         // board[columnIndex].tasks = [...board[columnIndex].tasks];
  //         const task = board[columnIndex].tasks.splice(taskIndex, 1);
  //         board[columnIndex + direction].tasks.splice(taskIndex, 0, ...task);
  //         // board[columnIndex + direction].tasks = [...board[columnIndex + direction].tasks];
  //         // board[columnIndex + direction].tasks.push(task);
  //         return board;
  //       })
  // }

  return (
      <Wrapper>
        <Container>
        <Row>
          {boards.map((board: any, columnIndex: any) =>
            <VerticalBlock 
              key={columnIndex}
              tasks={board.tasks}
              columnIndex={columnIndex}
              board={board}
              onMoveLeft={(taskIndex: any) => onMove(columnIndex, taskIndex, DIRECTION_LEFT)}
              onMoveRight={(taskIndex: any) => onMove(columnIndex, taskIndex, DIRECTION_RIGHT)}
            />
          )}
        </Row>
          <AddTask
            board={boards}
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

const Board = styled.div``;
const Title = styled.span``;

// const mapStateToProps = (state: any) => {
//   const cardIds = Object.keys(state)
//   const cards = cardIds.map(id => state[id])
//   const cardsByColumn = boards.reduce((cardsByColumn: any, _, columnIndex) => {
//     if (undefined === cardsByColumn[columnIndex]) {
//       cardsByColumn[columnIndex] = []
//     }
//     cardsByColumn[columnIndex] = cards.filter(card => card.columnIndex === columnIndex)
//     return cardsByColumn
//   }, [])
//   return { cardsByColumn }
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   move: (columnIndex:any, taskId: any, direction: any) => dispatch({type: MOVE, columnIndex, taskId, direction}),
//   load: () => dispatch({type: LOAD}),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;


import { ADD_CARD, DELETE_CARD, MOVE_CARD } from "../actions/actions";


const initialState = {
    boards: [
        {
            id: 1,
            title: "To do",
            cards: [
              {
                id: 1,
                text: "Task title goes here1",
                description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor...",
                tags: [
                    {
                        bgcolor: "red",
                        color: "white",
                        title: "MileAuto",
                    },
                ],
                user: [
                    {
                        name: "Phil",
                        firstName: "Phillip",
                        lastName: 'Ghostling',
                        email: "phil.ghost@gmail.com"
                    },
                ],
              },
            ],
          },
          {
            id: 2,
            title: "In progress",
            cards: [
              {
                id: 2,
                text: "Task title goes here2",
                description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor...",
                tags: [
                    {
                        bgcolor: "black",
                        color: "white",
                        title: "Fundee"
                    },
                ],
                user: [
                    {
                        name: "Phil",
                        firstName: "Phillip",
                        lastName: 'Ghostling',
                        email: "phil.ghost@gmail.com"
                    },
                ],
              },
            ],
          },
          {
            id: 3,
            title: "Review",
            cards: [
                
            ],
          },
          {
            id: 4,
            title: "Done",
            cards: [
      
            ],
          },
    ],
}

export const cardReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case MOVE_CARD: {
            const newBoards = [...state.boards]
            const [task] = newBoards[action.payload.columnIndex].cards.splice(action.payload.taskIndex, 1)
            newBoards[action.payload.columnIndex + action.payload.direction].cards.push(task)
            return {...state, boards: newBoards}
        }

        case ADD_CARD: {
            const newBoards = [...state.boards].map((board: any) => {
                if(board.id === action.payload.listId) {
                    board.cards = [...board.cards, action.payload.taskObj];
                }
                return board;
            });
            return {...state, boards: newBoards}
        }

        case DELETE_CARD: {
            const newBoards = [...state.boards].map((board: any) => {
                if(board.id === action.payload.listId) {
                  board.cards = [...board.cards.filter((card: any) => card.id !== action.payload.taskId)];
                }
                return board;
              });
              return {...state, boards: newBoards}
        }

        default: 
            return state;
    }
};

export const getBoards = (state: any) => state.boards;
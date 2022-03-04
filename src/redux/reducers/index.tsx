import { ADD_CARD, MOVE_CARD } from "../actions/actions";


const initialState = {
    boards: [
        {
            id: 1,
            title: "To do",
            tasks: [
              {
                id: 1,
                text: "Task title goes here1",
                description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor..."
              },
            ],
          },
          {
            id: 2,
            title: "In progress",
            tasks: [
              {
                id: 2,
                text: "Task title goes here2",
                description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor..."
              },
            ],
          },
          {
            id: 3,
            title: "Review",
            tasks: [
                
            ],
          },
          {
            id: 4,
            title: "Done",
            tasks: [
      
            ],
          },
    ],
}

export const Reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case MOVE_CARD: {
            const newBoards = [...state.boards]
            const [task] = newBoards[action.payload.columnIndex].tasks.splice(action.payload.taskIndex, 1)
            newBoards[action.payload.columnIndex + action.payload.direction].tasks.push(task)
            return {...state, boards: newBoards}
        }

        case ADD_CARD: {
            const newBoards = [...state.boards].map((board: any) => {
                if(board.id === action.payload.listId) {
                    board.tasks = [...board.tasks, action.payload.taskObj];
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
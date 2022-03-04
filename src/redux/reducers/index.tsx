
import * as actions from "../actions/actions";

const initialState = {
    tasks: [],
}

export const Reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actions.MOVE: {
            const {columnIndex, taskIndex, direction} = action
            console.log("hello");
            // const board = action.payload;
            // const tasks = [...state.tasks, board];
            return {...state, 
                tasks: [...state.tasks, {text: "aads", description: "everv", id: 2}]
            };
            // const board = [...state.boards];
            // board[columnIndex] = {
            //     ...board[columnIndex],
            //     tasks: [...board[columnIndex].tasks]
            // }
            // board[columnIndex + direction] = {
            //     ...board[columnIndex + direction],
            //     tasks: [...board[columnIndex + direction].tasks]
            // }
            // const task = board[columnIndex].tasks.splice(taskIndex, 1);
            // board[columnIndex + direction].tasks.splice(taskIndex, 0, task);
            // board[columnIndex + direction].tasks.push(task)
            // return {...state, board};
        }

        default: 
            return state;
    }
}

export const move = (columnIndex: any, taskIndex: any, direction: any) => ({type: actions.MOVE, columnIndex, taskIndex, direction}); 

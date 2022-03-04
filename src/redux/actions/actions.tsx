export const MOVE_CARD = "MOVE_CARD";
export const ADD_CARD = "ADD_CARD";

export const moveCard = ({ columnIndex, taskIndex, direction }: any) => {
    return {
        type: MOVE_CARD,
        payload: {
            columnIndex,
            taskIndex,
            direction,
        },
    };
};

export const addCard = ({listId, taskObj}: any) => {
    return {
        type: ADD_CARD,
        payload: {
            listId,
            taskObj,
        },
    };
};
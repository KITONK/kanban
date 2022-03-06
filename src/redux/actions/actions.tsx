export const MOVE_CARD = "MOVE_CARD";
export const ADD_CARD = "ADD_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const DELETE_CARD = "DELETE_CARD";

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

export const removeCard = ({listId, taskId}: any) => {
    return {
        type: DELETE_CARD,
        payload: {
            listId,
            taskId,
        },
    };
};

export const editCard = ({listId, taskObj}: any) => {
    return {
        type: EDIT_CARD,
        payload: {
            listId,
            taskObj,
        },
    };
};
import {
  ADDTODO,
  DELETTODO,
  EDITTODO,
  FILTERTODO,
  CHECKTODO,
} from "../actiontype/actionType";

export const addtodo = (newTODO) => {
  return {
    type: ADDTODO,
    payload: newTODO,
  };
};
export const checktodo = (id, isDone) => {
  return {
    type: CHECKTODO,
    payload: { id, isDone },
  };
};
export const edittodo = (Id, newDescription) => {
  return {
    type: EDITTODO,
    payload: Id,
  };
};
export const delettodo = (Id) => {
  return {
    type: DELETTODO,
    payload: Id,
  };
};
export const filtertodo = (status) => {
  return {
    type: FILTERTODO,
    payload: status,
  };
};

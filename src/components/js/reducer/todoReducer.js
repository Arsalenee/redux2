import { tasks } from "../../components/data";
import {
  ADDTODO,
  DELETETODO,
  EDITTODO,
  FILTERTODO,
  CHECKTODO,
} from "../actiontype/actionType";

const initstate = {
  tasks: tasks,
  statuts: "all",
};

export const todoReducer = (state = initstate, action) => {
  switch (action.type) {
    case ADDTODO:
      console.log(action);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDITTODO:
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.Id == action.payload.Id
            ? {
                ...e,
                description: action.payload.newDescription,
                isDone: action.payload.isDoneEdit,
              }
            : e
        ),
      };

    case DELETETODO:
      return {
        ...state,
        tasks: state.tasks.filter((e) => e.Id != action.payload),
      };
    case FILTERTODO:
      return {
        ...state,
        status: action.payload,
      };
    case CHECKTODO:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id == action.payload.id
            ? { ...e, isDone: !action.payload.isDone }
            : e
        ),
      };
    default:
      return state;
  }
};

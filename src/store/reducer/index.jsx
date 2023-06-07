import * as types from "../types";
export function reducer(state, action) {
  switch (action.type) {
    case types.openModalSavePinType:
      return {
        ...state,
        type: action.type,
        mode: "savePin",
        activePinId: action.payload,
      };
    case types.closeModalsType:
      return {
        ...state,
        type: action.type,
        mode: null,
      };

    case types.fetchFoldersInitType:
      return {
        ...state,
        type: action.type,
      };
    case types.fetchFoldersSuccessType:
      return {
        ...state,
        type: action.type,
        folders: action.payload,
      };
    case types.openModalCreateFolderType:
      return {
        ...state,
        type: action.type,
        mode: "createFoder",
      };
    case types.saveFoldersSuccessType:
      return {
        ...state,
        type: action.type,
        folders: [...state.folders, action.payload],
      };

    default:
      return {
        ...state,
        type: action.type,
      };
  }
}

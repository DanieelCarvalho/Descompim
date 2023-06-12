import * as types from "../types/";
import * as pinService from "../../services/pinService";

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const openModalSavePin = (pinId) => ({
  type: types.openModalSavePinType,
  payload: pinId,
});

export const openModalCreateFolder = () => ({
  type: types.openModalCreateFolderType,
});
export const closeModalsAction = () => ({
  type: types.closeModalsType,
});

export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType,
});
export const fetchFoldersSuccessAction = (folders) => ({
  type: types.fetchFoldersSuccessType,
  payload: folders,
});
export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction());
  const folders = await pinService.getFolders();
  dispatch(fetchFoldersSuccessAction(folders));
};

// ---

export const saveFolderInitAction = () => ({
  type: types.saveFoldersInitType,
});
export const saveFolderSuccessAction = (folder) => ({
  type: types.saveFoldersSuccessType,
  payload: folder,
});
export const saveFoldersAction = async (dispatch, folderName, pinId) => {
  dispatch(saveFolderInitAction());

  await sleep(1000);
  const newFolder = await pinService.saveFolder(folderName);
  const folder = await pinService.savePinFolder(newFolder.id, pinId);
  dispatch(saveFolderSuccessAction(folder));
};

export const savePinInFoldersInitAction = () => ({
  type: types.savePinInFoldersInitType,
});
export const savePinInFoldersSuccessAction = (folders) => ({
  type: types.savePinInFoldersSuccessType,
  payload: folders,
});

export const savPinInFolderAction = async (dispatch, pinId, folderId) => {
  dispatch(savePinInFoldersInitAction());

  await sleep(1000);
  await pinService.savePinFolder(folderId, pinId);
  console.log(pinId, folderId);
  const folders = await pinService.getFolders();
  dispatch(savePinInFoldersSuccessAction(folders));
};
// ---
export const fetchPinsInitiAction = () => ({
  type: types.fetchPinsInitType,
});
export const fetchPinsSuccessAction = (pinsData) => ({
  type: types.fetchPinsSuccessType,
  payload: pinsData,
});
export const fetchPinsAction = async (dispatch) => {
  dispatch(fetchPinsInitiAction());
  const pinsData = await pinService.getPins();
  dispatch(fetchPinsSuccessAction(pinsData));
};

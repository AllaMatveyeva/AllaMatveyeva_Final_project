export const SET_MODAL = "userCard/SET_MODAL";
export const SHOW_MOFAL = "userCard/SHOW_MOFAL";

export const setModal = (value) => ({
  type: SET_MODAL,
  payload: value,
});

export const showModal = (value) => ({
  type: SHOW_MOFAL,
  payload: value,
});

import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from './reducer';

export const openModal = () => ({ type: OPEN_MODAL });

export const closeModal = () => ({ type: CLOSE_MODAL });

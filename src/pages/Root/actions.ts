import { Dispatch } from 'redux';

import { loadRoot, loadRootError, loadRootSuccess } from './slice';
import { delay } from 'utils/delay';
import { data } from 'utils/mock/data';

// Define a thunk that dispatches action creator
export const initiateRoot = () => async (dispatch: Dispatch) => {
  try {
    dispatch(loadRoot());
    await delay(3000); // async imitation
    dispatch(loadRootSuccess(data));
  } catch (error: unknown) {
    dispatch(loadRootError(error));
  }
};

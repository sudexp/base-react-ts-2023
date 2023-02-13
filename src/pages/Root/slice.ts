import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Root type
export interface Root {
  id: string;
  text: string;
}

// Define a type for the slice state
interface RootInitialState {
  loading: boolean;
  error: unknown;
  data: Root[];
}

// Define the initial state using that type
export const initialState: RootInitialState = {
  loading: false,
  error: null,
  data: [],
};

export const slice = createSlice({
  name: 'Root',
  initialState,
  reducers: {
    loadRoot: state => {
      state.loading = true;
      state.error = null;
    },
    loadRootError: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadRootSuccess: (state, action: PayloadAction<Root[]>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadRoot, loadRootError, loadRootSuccess } = slice.actions;

// Other code such as selectors can use the imported `RootState` type
export const data = (state: RootInitialState) => state.data;

export default slice.reducer;

import { counterSlice } from './slice';

const { actions: slice } = counterSlice;



export const IncrementAction = (count) => (dispatch) => {
    dispatch(slice.incrementByAmount(count))
}



export const ResetAction = (count) => (dispatch) => {
    dispatch(slice.resetCount(count))
}

//changedSize
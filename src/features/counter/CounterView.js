import React from 'react';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrease, increase, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.count);

  const dispatch = useDispatch();
    return (
        <div>
            <h2>React Redux Toolkit Counter App</h2>
            <h1>{count}</h1>

            <button onClick={()=>{dispatch(increase())}}>Increase</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
            <button onClick={()=>{dispatch(decrease())}}>Decrease</button>
        </div>
    );
};

export default CounterView;
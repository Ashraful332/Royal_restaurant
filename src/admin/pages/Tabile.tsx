import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../../app/store'
import { increment, decrement, incrementByAmount } from '../../app/features/counter/counterSlice'


const Table = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    )
}

export default Table;
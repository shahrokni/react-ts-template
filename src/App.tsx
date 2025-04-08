import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import { increment, decrement } from './store/slices/counterSlice'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App

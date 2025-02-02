import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../app/slices/counterSlice';
import styles from './Counter.module.css'

export default function Counter() {
    const count = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            {/* omit additional rendering output here */}
        </div>
    )
}
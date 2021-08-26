import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import { increase , decrease, setDiff } from '../modules/counter';

function CounterContainer() {

    // useSelector 는 리덕스 스토어의 상태를 조회하는 Hook
    // state 의 값은 store.getState() 의 반환과 동일함.
    const { number , diff } = useSelector(state => ({
        number : state.counter.number,
        diff : state.counter.diff
    }))

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 hook
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch( decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    
    return (
        <Counter
        // 상태와
        number = {number}
        diff = {diff}

        //액션을 디스패치 하는 함수들을 props 로 넣어줌
        onIncrease = {onIncrease}
        onDecrease = {onDecrease}
        onSetDiff = {onSetDiff}
        />
    );
}

export default CounterContainer;

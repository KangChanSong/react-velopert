import { createStore } from 'redux'

// createStore 는 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어만 만든다.

// 리덕스에서 관리 할 상태 정의
const initialState = {
    counter : 0,
    text : '',
    list: []
};

// 액션 타입 정의. 주로 대문자로 작성
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/*액션 생성 함수 정의 */
// 액션 생성 함수는 주로 camelCase로 작성
const increase = () => {
    return {
        type : INCREASE,
    }
}

const decrease = () => {
    return {
        type : DECREASE,
    }
}

const changeText = text => {
    return {
        type : CHANGE_TEXT,
        text,
    }
}

const addToList = item => {
    return {
        type : ADD_TO_LIST,
        item,
    }
}

// 리듀서 만들기
// 위 액션 생성 함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어보자.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야함!
function reducer(state = initialState, action){
    // state 의 초깃값을 initialStore 로 지정햇음

    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter : state.counter + 1,
            }
        case DECREASE:
            return {
                ...state,
                counter : state.counter - 1,
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list : state.list.concat(action.item),
            }
    
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore();

console.log(store.getState()); //현재 store 안에 들어있는 상태를 조회함.


// 스토어안에 들어있는 상태가 바뀔때마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을때는 unsubscribe()를 호출

//액션들을 dispatch 해보자.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text : '와우'}));
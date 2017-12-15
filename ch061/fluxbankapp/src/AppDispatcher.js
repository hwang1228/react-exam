import { Dispatcher } from 'flux'

//logging 하지 않는다면 걍 라이브러리에 있는거 받아다가 export 하면 됨.
// export default new Dispatcher();

class AppDispatcher extends Dispatcher {
    dispatch(action = {}) { //action 파라미터의 default 값은 빈 객체({}) - es6 문법
        console.log("Dispatched", action);
        super.dispatch(action);
    }
}

export default new AppDispatcher();
import { call, put, takeEvery } from "redux-saga/effects";

//write mock login api
const api = {
  login() {
    //return a promise object
    return new Promise((resolve, reject) => {
      //mock async
      setTimeout(() => {
        //login success or failure using a random number
        if (Math.random() > 0.5) {
          //login success
          resolve({ id: 1, name: "Richard" });
        } else {
          reject({ message: "username or password incorrect!" });
        }
      }, 1000);
    });
  },
};

//write star function generator
function* login(action) {
  try {
    //call async method
    const res = yield call(api.login);
    //put action, reducer
    yield put({ type: "login", res });
  } catch (error) {
    yield put({type:'login_failed',message:error.message})
  }
}

function* mySaga(){
    //event listen, action cause login
    yield takeEvery('login_request',login)
}

export default mySaga

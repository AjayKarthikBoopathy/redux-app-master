import { createSlice } from "@reduxjs/toolkit";
// import { useReducer } from "react";

//useReducer method
// const [state, dispatch] = useReducer(reducer, initialState)
// const initialState = {data :{name : "", password: ""}}
// function reducer(state, action) {
//     switch(action.type){
//         case "login":
//             return {state.data: action.payload}      //return {...state, data: action.payload}
//         default :
//         return state
//     }
// }

//Redux Toolkit method - assigned with a reducer name(userSlice) - loginUser(action/method)
 const userSlice = createSlice({
    name : "userInfo",
    initialState : {
        data : {name : "", password : ""}
    },
    reducers : {
    loginUser : (state, action)=>{
         state.data = action.payload
    }
}
})

//exporting these two separately
export const {loginUser} = userSlice.actions
export default userSlice.reducer
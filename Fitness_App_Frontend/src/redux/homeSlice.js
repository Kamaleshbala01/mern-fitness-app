import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
    name:"challenges",
    initialState : {
        challenges : [],
        beginners : [],
        intermidiates : [],
        advances : []
    },
    reducers : {
        initHome : (state,action)=>{
            state.challenges = action.payload.challenge;
            state.beginners = action.payload.beginner;
            state.intermidiates = action.payload.intermidiate;
            state.advances = action.payload.advance
        }
    }
});

export const {initHome} = HomeSlice.actions;
export default HomeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const ResSlice = createSlice({
name:"Job",
initialState:{
    selectedJob:null,
    JobIsOpen:false,
},
reducers:{
    selectJob:(state,action)=>{
        state.selectedJob=action.payload;
    },
    openJob:(state)=>{
        state.JobIsOpen=true;
    },
    closeJob:(state)=>{
        state.JobIsOpen=false
    }
}
});
export const {selectJob,openJob,closeJob}=ResSlice.actions;
export const selectOpenJob =(state) => state.Job.selectedJob;
export const selectJobIsOpen =(state) => state.Job.JobIsOpen;
export default ResSlice.reducer;
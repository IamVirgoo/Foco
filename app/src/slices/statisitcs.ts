import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export default interface Statistic {
    statisticTypeName : string,
    statisticNumber : number
};

export interface Statistics {
    values: Array<Statistic>
};

const initialData : Statistics = {
    values: [
        {
            statisticTypeName: "Humidity",
            statisticNumber: 40.50
        },
        {
            statisticTypeName: "Temperature",
            statisticNumber: 29
        },
        {
            statisticTypeName: "Luminosity",
            statisticNumber: 52
        },
        {
            statisticTypeName: "Voltage",
            statisticNumber: 52
        },
    ]
};

export const statisticController = createSlice({
    name : "statistic",
    initialState : initialData,
    reducers : {
        appendStat: (state, action: PayloadAction<Statistic>) => {
            state.values.push(action.payload);
            /** @TODO: Write a function to synchronize statistical data. If there is a component that considers the overall correlation of the data, then this function will be necessary */
        },
    }
});

export const {
    appendStat
} = statisticController.actions;

export const statistics_list = (state: AppState) => state.statistic;

export const statisticsReducer = statisticController.reducer;
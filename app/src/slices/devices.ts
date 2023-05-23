import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export default interface Device {
    deviceId? : number,
    deviceName? : string,
    deviceTypes? : any
};

export interface Devices {
    values : Array<Device>
}

const initialData : Devices = {
    values: []
};

export const deviceController = createSlice({
    name : "devices",
    initialState : initialData,
    reducers : {
        appendDevice : (state, action: PayloadAction<{
            deviceId : number,
            deviceName : string,
            deviceTypes : any
        }>) => {
            state.values.push(action.payload);
        },
        removeDevice : (state, action : PayloadAction<Device>) => {}
    }
})

export const {
    appendDevice,
    removeDevice
} = deviceController.actions

export const deviceList = (state: AppState) => state.devices.values;

export const devicesReducer = deviceController.reducer;
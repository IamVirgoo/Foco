import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export default interface Device {
    deviceId : number,
    deviceName : string
};

export interface Devices {
    values : Array<Device>
};

const initialData : Devices = {
    values: [
        {
            deviceName : "device-1",
            deviceID : 1
        },
        {
            deviceName : "device-2",
            deviceID : 2
        },
        {
            deviceName : "device-3",
            deviceID : 3
        },
        {
            deviceName : "device-4",
            deviceID : 4
        },
    ]
};

export const deviceController = createSlice({
    name : "devices",
    initialState : initialData,
    reducers : {
        appendDevice : (state, action: PayloadAction<Device>) => {
            state.values.push(action.payload);
        },
        removeDevice : (state, action : PayloadAction<Device>) => {
            state.values.remove(action.payload)
        }
    }
})

export const {
    appendDevice,
    removeDevice
} = deviceController.actions

export const deviceList = (state: AppState) => state.devices.values;

export const devicesReducer = deviceController.reducer;
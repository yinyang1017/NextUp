import moment from "moment";
import { height, width } from "../constants/dimensions";
import { v5 as uuidv5 } from 'uuid';
export const getDesiredNumber = (desiredNumber = 12) => {
    let number = desiredNumber;
    const factor = number / Math.min(height, width);
    const newNumber = Math.min(height, width) * factor;
    const adjustedNewNumber = Math.floor(newNumber / 4) * 4;
    return adjustedNewNumber
}

export const extractKeyValuesToArray = (obj, keys) => {
    return obj && Object.entries(obj)
        .filter(([key]) => keys.includes(key))
        .map(([key, value]) => ({ key, value }));
};

export const getFormatedDate = (date = moment(), format = APP_CONFIG.DATE_FORMAT.DEFAULT) => {
    return moment(date).format(format)
}

export const getFormatedTime = (date = moment(), format = APP_CONFIG.DATE_FORMAT.HH_MM) => {
    return moment(date).format(format)
}

export const getSliceAt = (str = ' STring', range1 = 0, range2 = 2) => str.slice(range1, range2)

export const getTripStatus = (key) => {
    return tripStatus[key]
}

export const getUniqueId = (dataString) => {
    const namespace = uuidv5.URL;
    return uuidv5(dataString, namespace);

}
import data from "./data.js";

export function isDataHasName(name) {
    if (data.find(v => v.from === name || v.to === name)) {
        return true;
    }
    return false;
}

export function isNotSamePath(v1, v2) {
    if (v1 !== v2) {
        return true;
    }
    return false;
}
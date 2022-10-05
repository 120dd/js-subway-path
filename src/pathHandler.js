import View from "./view.js";
import Path from "./path.js";
import { isDataHasName, isNotSamePath } from "./validator.js";

export default class {
    constructor() {
        this.view = new View();
        this.path = new Path();
        this.view.registerSearchButtonEvent(this.requestFindPath);
    }
    
    requestFindPath = (from, to, searchType) => {
        if (this.checkPathName(from, to)) {
            return;
        }
        try {
            const pathData = this.path.getPathData(from, to, searchType);
            this.view.renderResult(pathData);
        } catch (e) {
            this.view.alert(e);
        }
    }
    
    checkPathName(from, to) {
        if (!isNotSamePath(from, to)) {
            this.view.alert("출발역과 도착역이 동일할 수 없습니다.");
            return true;
        }
        if (!isDataHasName(from) && !isDataHasName(to)) {
            this.view.alert("없는 역 입니다.");
            return true;
        }
        return false;
    }
}
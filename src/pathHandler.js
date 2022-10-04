import View from "./view.js";
import Path from "./path.js";

export default class {
    constructor() {
        this.view = new View();
        this.path = new Path();
        this.view.registerSearchButtonEvent(this.requestFindPath);
    }
    
    requestFindPath = (from, to, searchType) => {
        const pathData = this.path.getPathData(from, to, searchType);
        this.view.renderResult(pathData);
    }
}
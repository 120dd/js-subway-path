import Dijkstra from "./utils/Dijkstra.js";
import data from "./data.js";

export default class {
    constructor() {
        this.dijkstra = new Dijkstra();
        this.#initData();
    }
    
    #initData() {
        data.forEach(v => {
            this.dijkstra.addEdge(v.from, v.to, v.distance);
        });
    }
    
    getPathData(from, to, searchType) {
        const resultArr = this.dijkstra.findShortestPath(from, to);
        const pathDistance = this.getPathDistance(resultArr);
        const pathMinute = this.getPathTime(resultArr);
        return {
            searchType,
            pathArr: resultArr,
            pathDistance,
            pathMinute
        }
    }
    
    getPathDistance(resultArr) {
        let pathDistance = 0;
        for (let i = 0 ; i < resultArr.length - 1 ; i ++) {
            const idx = data.findIndex(
                v => v.from === resultArr[ i ] && v.to === resultArr[ i + 1 ]
                    ||
                    v.to === resultArr[ i ] && v.from === resultArr[ i + 1 ]
            );
            pathDistance += data[ idx ].distance
        }
        return pathDistance;
    }
    
    getPathTime(resultArr) {
        let pathTime = 0;
        for (let i = 0 ; i < resultArr.length - 1 ; i ++) {
            const idx = data.findIndex(
                v => v.from === resultArr[ i ] && v.to === resultArr[ i + 1 ]
                    ||
                    v.to === resultArr[ i ] && v.from === resultArr[ i + 1 ]
            );
            pathTime += data[ idx ].minute
        }
        return pathTime;
    }
    
}
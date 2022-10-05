import Dijkstra from "./utils/Dijkstra.js";
import data from "./data.js";
import { constants } from "./constants.js";

export default class {
    constructor() {
        this.dijkstraDistance = new Dijkstra();
        this.dijkstraTime = new Dijkstra();
        this.#initDistanceData();
        this.#initTimeData();
    }
    
    #initDistanceData() {
        data.forEach(v => {
            this.dijkstraDistance.addEdge(v.from, v.to, v.distance);
        });
    }
    
    #initTimeData() {
        data.forEach(v => {
            this.dijkstraTime.addEdge(v.from, v.to, v.minute);
        });
    }
    
    getPathData(from, to, searchType) {
        let resultArr;
        if (searchType === constants.DISTANCE_TYPE) {
            resultArr = this.dijkstraDistance.findShortestPath(from, to);
        }
        if (searchType === constants.TIME_TYPE) {
            resultArr = this.dijkstraTime.findShortestPath(from, to);
        }
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
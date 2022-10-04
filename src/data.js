const stations = {
    NAMBUTEOMINEOL: "남부터미널",
    YANGJAESIMINUISUP: "양재시민의숲",
    GYODAE: "교대",
    YEOGSAM: "역삼",
    GANGNAM: "강남",
    YANGJEA: "양재",
    MEABONG: "매봉",
}

export default [
    { from: stations.GYODAE, to: stations.GANGNAM, distance: 2, minute: 3 },
    { from: stations.GANGNAM, to: stations.YEOGSAM, distance: 2, minute: 3 },
    { from: stations.GYODAE, to: stations.NAMBUTEOMINEOL, distance: 3, minute: 2 },
    { from: stations.NAMBUTEOMINEOL, to: stations.YANGJEA, distance: 6, minute: 5 },
    { from: stations.GANGNAM, to: stations.YANGJEA, distance: 2, minute: 8 },
    { from: stations.YANGJEA, to: stations.MEABONG, distance: 1, minute: 1 },
    { from: stations.YANGJEA, to: stations.YANGJAESIMINUISUP, distance: 10, minute: 3 },
]

// dijkstra.addEdge("교대", "강남", 2);
// dijkstra.addEdge("강남", "역삼", 2);
// dijkstra.addEdge("교대", "남부터미널", 3);
// dijkstra.addEdge("남부터미널", "양재", 6);
// dijkstra.addEdge("양재", "매봉", 1);
// dijkstra.addEdge("강남", "양재", 2);
// dijkstra.addEdge("양재", "양재시민의숲", 10);
import { constants, SEARCH_TYPE_KR } from "./constants.js"

export const TEMPLATES = {
    FORM: `
<div>
    <h1>🚇지하철 길찾기</h1>
    <form>
        <div>
            <strong>출발역</strong>
            <input type="text" id=${constants.DEPARTURE_STATION_NAME_INPUT}>
        </div>
        <br/>
        <div>
            <strong>도착역</strong>
            <input type="text" id=${constants.ARRIVAL_STATION_NAME_INPUT}>
        </div>
        <br/>
        <input checked="checked" type="radio" name=${constants.SEARCH_TYPE} value=${constants.DISTANCE_TYPE}>
        <label for=${constants.DISTANCE_TYPE}><strong>최단거리</strong></label>
        <input type="radio" name=${constants.SEARCH_TYPE} value=${constants.TIME_TYPE}>
        <label for=${constants.DISTANCE_TYPE}><strong>최소시간</strong></label>
        <br/>
        <br/>
            <input id=${constants.SEARCH_BUTTON} type="button" value="길찾기">
    </form>
</div>
    `,
    RESULT: (route, distance, minute, searchType) => `
<div id="result">
    <h1>📝결과</h1>
    <h2>${SEARCH_TYPE_KR[ searchType ]}</h2>
    <table border="1">
    <thead>
    <td>총 거리</td>
    <td>총 소요시간</td>
    </thead>
    <tr>
    <td>${distance}Km</td>
    <td>${minute}분</td>
</tr>
<tr>
<td colspan="2">${route}</td>
</tr>
</table>
</div>
    `
}
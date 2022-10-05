import { $ } from "./utils/dom.js"
import { TEMPLATES } from "./templates.js";
import { constants } from "./constants.js";

export default class {
    constructor() {
        this.renderForm();
    }
    
    renderForm() {
        $(constants.APP).insertAdjacentHTML("beforeend", TEMPLATES.FORM)
    }
    
    clearNode(selector) {
        if ($(`#${selector}`)) {
            $(`#${selector}`).remove();
        }
    }
    
    renderResult(resultData) {
        this.clearNode(constants.RESULT);
        const route = resultData.pathArr.join("→");
        $(constants.APP).insertAdjacentHTML(
            "beforeend",
            TEMPLATES.RESULT(
                route,
                resultData.pathDistance,
                resultData.pathMinute,
                resultData.searchType
            )
        )
    }
    
    registerSearchButtonEvent(callback) {
        $(`#${constants.SEARCH_BUTTON}`).addEventListener("click", () => {
            const from = $(`#${constants.DEPARTURE_STATION_NAME_INPUT}`).value;
            const to = $(`#${constants.ARRIVAL_STATION_NAME_INPUT}`).value;
            const searchType = $(`input[name=${constants.SEARCH_TYPE}]:checked`).value;
            callback(from, to, searchType)
        })
    }
}
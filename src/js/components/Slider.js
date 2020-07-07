import regeneratorRuntime from "regenerator-runtime";
import {API_TOKEN} from "../config.js";
class Slider{
    constructor(sliderWrapper, sliderBtnPrev, sliderBtnNext){
        //properties related with DOM
        this.sliderWrapper = sliderWrapper;
        this.sliderBtnPrev = sliderBtnPrev;
        this.sliderBtnNext = sliderBtnNext;
    }
}

export default Slider;
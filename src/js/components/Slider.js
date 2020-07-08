import regeneratorRuntime from "regenerator-runtime";
import {API_TOKEN} from "../config.js";
class Slider{
    constructor(sliderWrapper, sliderBtnPrev, sliderBtnNext){
        //properties related with DOM
        this.sliderWrapper = sliderWrapper;
        this.sliderBtnPrev = sliderBtnPrev;
        this.sliderBtnNext = sliderBtnNext;

        //properties related with data
        this.API_KEY = 'https://api.football-data.org/v2/competitions/PL/teams';

        //calling methods - now it is very helpful at development
        this.drawClubs();
    }

    async getClubs(){
        try{
            const clubsRespone = await fetch(this.API_KEY, {
                "method": "GET",
                "headers": {
                    "X-Auth-Token": API_TOKEN,
                }
            })
            const clubsData = await clubsRespone.json();
            return clubsData;
        }catch(err){
            throw new Error(err);
        }
    }

    drawClubs(){
        this.getClubs().then((clubsRes)=>{
            //it is an array of all PL clubs
            const {teams} = clubsRes;
            
            for(const club of teams){
                const clubCrest = document.createElement('img');
                clubCrest.src = club.crestUrl;

                this.sliderWrapper.appendChild(clubCrest)
            }
        });
    }
}

export default Slider;
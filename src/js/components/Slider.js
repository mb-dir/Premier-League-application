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
        this.getClubs();
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

        getClubsFromAPI(this.API_KEY).then((clubsRes) => {
            const {teams} = clubsRes;
            //it is an array of all PL clubs
            return teams;
        });
    }
}

export default Slider;
import regeneratorRuntime from "regenerator-runtime";

//https://www.npmjs.com/package/smoothscroll-polyfill
import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

import {API_TOKEN} from "../config.js";
class Slider{
    constructor(sliderWrapper, sliderBtnPrev, sliderBtnNext){
        //properties related with DOM
        this.sliderWrapper = sliderWrapper;
        this.sliderBtnPrev = sliderBtnPrev;
        this.sliderBtnNext = sliderBtnNext;

        //properties related with data
        this.API_KEY = 'https://api.football-data.org/v2/competitions/PL/teams';

        //properites related with class
        this.scrollPosition = 0;//This properties is use in buttons handling

        //calling methods - now it is very helpful at development
        this.drawClubs();
        this.buttonsHandling();
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
                const {id} = club; 
                const clubCrest = document.createElement('img');
                
                clubCrest.classList.add("clubsSlider__crest");
                clubCrest.src = club.crestUrl;
                clubCrest.dataset.clubId = id;

                this.sliderWrapper.appendChild(clubCrest);
            }
        });
    }

    //buttons handling
    buttonsHandling(){
        //150 is a conventional value - imo it looks good with 150 px offset
        this.sliderBtnNext.addEventListener('click', ()=>{
            this.scrollPosition = this.sliderWrapper.scrollLeft + 150;
            this.sliderWrapper.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        });

        this.sliderBtnPrev.addEventListener('click', () => {
            this.scrollPosition = this.sliderWrapper.scrollLeft - 150;
            this.sliderWrapper.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        });
    }
}

export default Slider;
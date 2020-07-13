import {API_TOKEN} from "../config.js";
class ClubsInfo{
    constructor(clubsInfoWrapper, sliderWrapper) {
        //properties related with DOM
        this.clubsInfoWrapper = clubsInfoWrapper;
        this.sliderWrapper = sliderWrapper;

        //properties related with data
        this.API = 'https://api.football-data.org/v2/teams/';

        //calling methods
        this.crestClickHandling();
    }

    crestClickHandling(){
        this.sliderWrapper.addEventListener('click', (e)=>{
            const {target} = e;
            const clubID = target.dataset.clubId;

            this.drawClubInfoContent(clubID);
        });
    }
    drawClubInfoContent(clubID){
        this.getClubInfo(clubID).then((clubInfoRes) => {
            const {address, clubColors, crestUrl, email, name, venue, website} = clubInfoRes;
        });       
    }
    async getClubInfo(clubID){
        const API_KEY = `${this.API}${clubID}`
         try {
             const clubInfoRespone = await fetch(API_KEY, {
                 "method": "GET",
                 "headers": {
                     "X-Auth-Token": API_TOKEN,
                 }
             })
             const clubInfo = await clubInfoRespone.json();
             //it is an object with information about the club
             return clubInfo;
         } catch (err) {
             throw new Error(err);
         }
    }
}

export default ClubsInfo;
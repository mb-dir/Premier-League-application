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
        //Handling the asnync method
        this.getClubInfo(clubID).then((clubInfoRes) => {
            //Clearing all contents before adding the next one
            this.clubsInfoWrapper.innerHTML = '';

            const {address, clubColors, crestUrl, email, name, venue, website, squad} = clubInfoRes;//squad is an array

            //Object which will be passed to the function which create an article content
            const informationObject = {
                address,
                clubColors, 
                crestUrl, 
                email, 
                name, 
                venue, 
                website,
            };

            /*CREATEING THE STRUCTURE ELEMENTS*/

            //HEADER - h2
            const clubNameHeader = document.createElement('h2');
            clubNameHeader.classList.add('clubsInfo__clubName');
            clubNameHeader.textContent = name;

            //WRAPPER - div
            const wrapper = document.createElement('div');
            wrapper.classList.add('clubsInfo__wrapper');

            //ARTICLE(clubInfo) - article
            const clubsInfoArticle = document.createElement('article');
            clubsInfoArticle.classList.add('clubsInfo__clubInfo');

            //ARTICLE(squad) - article
            const clubsSquadArticle = document.createElement('article');
            clubsSquadArticle.classList.add('clubsInfo__squad');

            /*THE TWO FOLLOWING ELEMENTS ARE CREATED WITH THE SPECIAL FUNCTION*/

            const informationArticle = createArticleInside(clubsInfoArticle, "information", "infoList", informationObject);
            const squadArticle = createArticleInside(clubsSquadArticle, "squad", "squadList", squad);

            this.clubsInfoWrapper.appendChild(clubNameHeader);
            wrapper.appendChild(informationArticle);
            wrapper.appendChild(squadArticle);
            this.clubsInfoWrapper.appendChild(wrapper);


            //an auxiliary function to create the inside content of the single article
            //articleContainer - container for the article content
            //headerMessage - title of the article
            //listClass - name of css class shich will be added to ul(informationList)
            //data - object witch data about the club(in this case a special object(informationObject) or an array(squad))
            function createArticleInside(articleContainer, headerMessage, listClass, data) {
                //ARTICLE HEADER - h3
                const articleHeader = document.createElement('h3');
                articleHeader.classList.add('clubsInfo__header');
                articleHeader.textContent = headerMessage;

                //LIST - ul
                const informationList = document.createElement('ul');
                informationList.classList.add('list');
                informationList.classList.add(`clubsInfo__${listClass}`);

                //LIST ITEM - li - iteration through all informations about the club and creating (based on this informations) lists item
                //if data is an array that means that we have to create the team sheet
                if (Array.isArray(data)){
                    //If array's length === 0 that means the API does not deliver us the squad
                    if (data.length === 0){
                        const errorInfo = document.createElement('span');
                        errorInfo.classList.add('errorInfo');
                        errorInfo.textContent = 'Sorry, the squad are not available now';

                        articleContainer.appendChild(articleHeader);
                        articleContainer.appendChild(errorInfo);
                        return articleContainer; 
                    }else{
                        for (const info of data) {
                            const {name, role} = info;
                            if(role === "PLAYER"){
                                const listItem = document.createElement('li');

                                listItem.classList.add('list__item');
                                listItem.classList.add('clubsInfo__player');

                                listItem.textContent = name;

                                informationList.appendChild(listItem);
                            }
                        }
                    }
                    //In the other case we create the list with informations
                }else{
                    for (const key of Object.keys(data)) {
                        //If something does not extist we go to the next iteration
                        if (data[key] === null) {
                            continue;
                        }

                        const listItem = document.createElement('li');

                        listItem.classList.add('list__item');
                        listItem.classList.add('clubsInfo__info');

                        //SPECIAL CASES
                        if(key === 'crestUrl'){
                            listItem.classList.add('clubsInfo__clubInfo--crest');

                            const crest = document.createElement('img');

                            crest.classList.add('list__crest');
                            crest.src = data[key];

                            listItem.innerHTML = '<b>crest:</b>';
                            listItem.appendChild(crest);
                        } else if (key === 'website'){
                            const websiteLink = document.createElement('a');

                            websiteLink.classList.add('link');
                            websiteLink.href = data[key];
                            websiteLink.target = '_blank';
                            websiteLink.textContent = 'website';

                            listItem.appendChild(websiteLink);
                        }else{//NORMAL CASE
                            listItem.innerHTML = `<b>${key}</b>: ${data[key]}`;
                        }
                        informationList.appendChild(listItem);
                    }
                }
                //to the article container we append the header(previously created) and the information list
                articleContainer.appendChild(articleHeader);
                articleContainer.appendChild(informationList);
                return articleContainer;       
            }
        });       
    }
    async getClubInfo(clubID){
        const API_KEY = `${this.API}${clubID}`;
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
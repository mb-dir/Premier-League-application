class ClubsInfo{
    constructor(clubsInfoWrapper, sliderWrapper) {
        //properties related with DOM
        this.clubsInfoWrapper = clubsInfoWrapper;
        this.sliderWrapper = sliderWrapper;

        //calling methods
        this.crestClickHandling();
    }

    crestClickHandling(){
        this.sliderWrapper.addEventListener('click', (e)=>{
            const {target} = e;

            console.log(target);
        });
    }
}

export default ClubsInfo;
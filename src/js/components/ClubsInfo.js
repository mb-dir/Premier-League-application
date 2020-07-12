class ClubsInfo{
    constructor(clubsInfoWrapper, sliderWrapper) {
        this.clubsInfoWrapper = clubsInfoWrapper;
        this.sliderWrapper = sliderWrapper;

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
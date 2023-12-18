function liveStage(years){

    let stage = ""
    if (years < 0){
        stage = "out of bounds"
    }
    else if(years <= 2){
        stage = "baby"
    }
    else if (years <= 13){
        stage = "child"
    }
    else if (years <= 19){
        stage = "teenager"
    }
    else if (years <= 65){
        stage = "adult"
    }
    else{
        stage = "elder"
    }
    console.log(stage)
}

liveStage(20)
liveStage(1)
liveStage(100)
liveStage(-99)
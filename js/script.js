function Random(max) {
    return Math.floor(Math.random() * max);
}

function getRandomBuild(){
    var num = Random(3);
    
    if(num == 0){
        document.getElementById("firstBuild").style.display = "block";
    }else if (num == 1){
        document.getElementById("secondBuild").style.display = "block";
    }else if(num ==2){
        document.getElementById("thirdBuild").style.display = "block";
    }
}

window.onload = getRandomBuild();
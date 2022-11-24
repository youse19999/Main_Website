var logoblur = 15;
var blurchangespeed = 25
function changeblurlogo(blurpx){
    document.querySelector("html").style.filter = "blur(" + blurpx + "px)"
    if(logoblur >= 0){
        logoblur -= 1;
        //console.log("blur change to " + logoblur);
        setTimeout(changeblurlogo,blurchangespeed,logoblur);
    }

}
function HSite(){
	document.location = "HHH.html";
}
function GoWallpaper(){
	document.location = "Wallpaper.html"
}
function play(){
    playlogoblur();
}
function playlogoblur(){
    setTimeout(changeblurlogo,blurchangespeed,logoblur);
}
function GoSims(){
    document.location = "Sims.html";
}
function GoAbout(){
    document.location = "About.html";
}
function GoMods(){
    document.location = "Mods.html";
}
function GoIndex(){
    document.location = "index.html";
}
function GoModTheSims(){
    var res = confirm("外部サイトに移動していいですか？");
    if(res == true){
        document.location = "https://modthesims.info/member.php?u=10264439";
    }
}
function GoGithub(){
    var res = confirm("外部サイトに移動していいですか？");
    if(res == true){
        document.location = "https://modthesims.info/member.php?u=10264439";
    }
}
var logoblur = 15;
var blurchangespeed = 25
function changeblurlogo(blurpx){
    document.querySelector("html").style.filter = "blur(" + blurpx + "px)"
    if(logoblur >= 0){
        logoblur -= 1;
        //console.log("blur change to " + logoblur);
        setTimeout(changeblurlogo,blurchangespeed,logoblur);
    }

}
function play(){
    playlogoblur();
}
function playlogoblur(){
    setTimeout(changeblurlogo,blurchangespeed,logoblur);
}
function GoSims(){
    document.location = "Sims.html";
}
function GoAbout(){
    document.location = "About.html";
}
function GoMods(){
    document.location = "Mods.html";
}
function GoIndex(){
    document.location = "index.html";
}
function GoModTheSims(){
    var res = confirm("外部サイトに移動していいですか？");
    if(res == true){
        document.location = "https://modthesims.info/member.php?u=10264439";
    }
}
function GoGithub(){
    var res = confirm("外部サイトに移動していいですか？");
    if(res == true){
        document.location = "https://github.com/youse19999";
    }
}

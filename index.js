var logoblur = 15;
var blurchangespeed = 25
function changeblurlogo(blurpx){
    document.querySelector("html").style.filter = "blur(" + blurpx + "px)"
    if(logoblur >= 0){
        logoblur -= 1;
        console.log("blur change to " + logoblur);
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
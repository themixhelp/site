function fadeIn1(){
    document.getElementById("container").animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: "forwards"
      });
}

function fadeIn2(){
    document.getElementById("content-container").animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
      ], {
        // timing options
        duration: 500,
        iterations: 1,
        fill: "forwards"
      });
}

function about(){
    document.getElementById("about").style.display = "unset";
    document.getElementById("programming").style.display = "none";
    document.getElementById("gallerySite").style.display = "none";
    document.getElementById("blog").style.display = "none";

    fadeIn2();
}
function programming(){
    document.getElementById("about").style.display = "none";
    document.getElementById("programming").style.display = "unset";
    document.getElementById("gallerySite").style.display = "none";
    document.getElementById("blog").style.display = "none";

    fadeIn2();
}
function gallerySite(){
    document.getElementById("about").style.display = "none";
    document.getElementById("programming").style.display = "none";
    document.getElementById("gallerySite").style.display = "unset";
    document.getElementById("blog").style.display = "none";

    fadeIn2();
}
function blog(){
    document.getElementById("about").style.display = "none";
    document.getElementById("programming").style.display = "none";
    document.getElementById("gallerySite").style.display = "none";
    document.getElementById("blog").style.display = "unset";

    fadeIn2();
}
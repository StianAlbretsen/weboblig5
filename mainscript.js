window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("toppBtn").style.display = "block";
    } 
    else {
        document.getElementById("toppBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//---------------------------------- Meny ----------------------------------------------------
window.onload = oppstart;

function oppstart(){
    
    document.getElementById("navMenuBtn").addEventListener("click", mobileMenu);
    document.getElementById("subMenu1").addEventListener("click", subMenu1);
    document.getElementById("subMenu2").addEventListener("click", subMenu2);
    document.getElementById("subMenu3").addEventListener("click", subMenu3);
    document.getElementById("subMenu4").addEventListener("click", subMenu4);

    // Viser alle submenyene
    function mobileMenu() {
        document.getElementById("subNav1").classList.toggle("hiddenAlways");
        document.getElementById("subNav2").classList.toggle("hiddenAlways");
        document.getElementById("subNav3").classList.toggle("hiddenAlways");
        document.getElementById("subNav4").classList.toggle("hiddenAlways");
    }

    // Viser submeny 1 og skjuler de andre hvis de er åpne
    function subMenu1() {
        document.getElementById("subNav1").classList.toggle("hiddenAlways");
        document.getElementById("subNav2").classList.add("hiddenAlways");
        document.getElementById("subNav3").classList.add("hiddenAlways");
        document.getElementById("subNav4").classList.add("hiddenAlways");
    }
    function subMenu2() {
        document.getElementById("subNav2").classList.toggle("hiddenAlways");
        document.getElementById("subNav1").classList.add("hiddenAlways");
        document.getElementById("subNav3").classList.add("hiddenAlways");
        document.getElementById("subNav4").classList.add("hiddenAlways");
    }
    function subMenu3() {
        document.getElementById("subNav3").classList.toggle("hiddenAlways");
        document.getElementById("subNav2").classList.add("hiddenAlways");
        document.getElementById("subNav1").classList.add("hiddenAlways");
        document.getElementById("subNav4").classList.add("hiddenAlways");
    }
    function subMenu4() {
        document.getElementById("subNav4").classList.toggle("hiddenAlways");
        document.getElementById("subNav2").classList.add("hiddenAlways");
        document.getElementById("subNav1").classList.add("hiddenAlways");
        document.getElementById("subNav3").classList.add("hiddenAlways");
    }
}
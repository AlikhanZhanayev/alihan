function popup(){
    var btn = document.getElementById("btn_white").innerHTML;
    if(btn == "Log In"){
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"}, "slow");
        document.body.style.overflow = "hidden";
    }
    else{
        logout();
    }
}

function close_popup(){
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
}

function login(name){
    document.querySelector(".user_profile").style.display = "inline";
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("btn_white").innerHTML = "Log Out";
    close_popup();
}

function logout(){
    document.querySelector(".user_profile").style.display = "none";
    document.getElementById("btn_white").innerHTML = "Log In";
}
function load(){
    $("#all").animate({opacity: '1'}, "slow");
}
function change(a){
    switch(a){
        case "BLOG":
        document.getElementById("text").innerHTML = "Join our blog";
    }       
}
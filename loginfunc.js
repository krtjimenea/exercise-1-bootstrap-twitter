function logUserin(){
    
    //Get username input
    var username = document.getElementById("username-field"); 
    var password = document.getElementById("password-field");
    var alertdiv = document.getElementById("alertbox");
    var alertdivmsg = document.getElementById("alertboxmsg")

    
    //Check input if valid
    if(username.value == "Chibi-chan" && password.value == "pubteambestteam"){
        window.location.href="home.html" //direct to homepage
    }else{
        //Error Message
        alertdiv.style.display = "flex";
        alertdivmsg.style.display = "flex";

    }
}

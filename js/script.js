$(document).ready(function() {
    var database = firebase.database();
    var StatusRelay1;
    var StatusRelay2;
    var StatusRelay3;
    var StatusRelay4;
    var StatusRelay5;
    var StatusRelay6;
    var StatusRelay7;
    var StatusRelay8;
    var StatusRelay9;
    
    var suhu1;
    var suhu2;
    var suhu3;
    var suhu4;

    database.ref().child('Relay').on("value",function(snap){
        StatusRelay1 = snap.val().StatusRelay1;
        StatusRelay2 = snap.val().StatusRelay2;
        StatusRelay3 = snap.val().StatusRelay3;
        StatusRelay4 = snap.val().StatusRelay4;
        StatusRelay5 = snap.val().StatusRelay5;
        StatusRelay6 = snap.val().StatusRelay6;
        StatusRelay7 = snap.val().StatusRelay7;
        StatusRelay8 = snap.val().StatusRelay8;
        StatusRelay9 = snap.val().StatusRelay9;
            
        if(StatusRelay1 == "ON"){
            document.getElementById("dh-sts-kamartamu").innerHTML = "ON";
            $("#dh-ic-kamartamu").removeClass("nav-link disabled");
            $("#dh-ic-kamartamu").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-kamartamu").innerHTML = "OFF";
            $("#dh-ic-kamartamu").removeClass("nav-link active");
            $("#dh-ic-kamartamu").addClass("nav-link disabled");
        }

        if(StatusRelay2 == "ON"){
            document.getElementById("dh-sts-teras").innerHTML = "ON";
            $("#dh-ic-teras").removeClass("nav-link disabled");
            $("#dh-ic-teras").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-teras").innerHTML = "OFF";
            $("#dh-ic-teras").removeClass("nav-link active");
            $("#dh-ic-teras").addClass("nav-link disabled");
        }

        if(StatusRelay3 == "ON"){
            document.getElementById("dh-sts-ruangtengah").innerHTML = "ON";
            $("#dh-ic-ruangtengah").removeClass("nav-link disabled");
            $("#dh-ic-ruangtengah").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-ruangtengah").innerHTML = "OFF";
            $("#dh-ic-ruangtengah").removeClass("nav-link active");
            $("#dh-ic-ruangtengah").addClass("nav-link disabled");
        }

        if(StatusRelay4 == "ON"){
            document.getElementById("dh-sts-kamardepan").innerHTML = "ON";
            $("#dh-ic-kamardepan").removeClass("nav-link disabled");
            $("#dh-ic-kamardepan").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-kamardepan").innerHTML = "OFF";
            $("#dh-ic-kamardepan").removeClass("nav-link active");
            $("#dh-ic-kamardepan").addClass("nav-link disabled");
        }
    })

    database.ref().child('Temp').on("value",function(snap){
        suhu1 = snap.val().suhu1;
        suhu2 = snap.val().suhu2;
        suhu3 = snap.val().suhu3;
        suhu4 = snap.val().suhu4;

        document.getElementById("temp-kamartamu").innerHTML = suhu1;
        document.getElementById("temp-teras").innerHTML = suhu2;
        document.getElementById("temp-ruangtengah").innerHTML = suhu3;
        document.getElementById("temp-kamardepan").innerHTML = suhu4;
    });
});
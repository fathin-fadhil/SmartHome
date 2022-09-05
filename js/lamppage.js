var StatusRelay1;
var StatusRelay2;
var StatusRelay3;
var StatusRelay4;
var StatusRelay5;
var StatusRelay6;
var StatusRelay7;
var StatusRelay8;
var StatusRelay9;

$(document).ready(function() {
    var database = firebase.database();    

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
            $("#sts-terasdepan").text("ON");
            $("#ic-terasdepan").addClass("ic-active");
            $("#ic-terasdepan").removeClass("bi-lightbulb-off-fill");
            $("#ic-terasdepan").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-terasdepan").text("OFF");
            $("#ic-terasdepan").removeClass("ic-active");
            $("#ic-terasdepan").removeClass("bi-lightbulbfill");
            $("#ic-terasdepan").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay2 == "ON"){
            $("#sts-ruangtamu").text("ON");
            $("#ic-ruangtamu").addClass("ic-active");
            $("#ic-ruangtamu").removeClass("bi-lightbulb-off-fill");
            $("#ic-ruangtamu").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-ruangtamu").text("OFF");
            $("#ic-ruangtamu").removeClass("ic-active");
            $("#ic-ruangtamu").removeClass("bi-lightbulbfill");
            $("#ic-ruangtamu").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay3 == "ON"){
            $("#sts-kamardepan").text("ON");
            $("#ic-kamardepan").addClass("ic-active");
            $("#ic-kamardepan").removeClass("bi-lightbulb-off-fill");
            $("#ic-kamardepan").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-kamardepan").text("OFF");
            $("#ic-kamardepan").removeClass("ic-active");
            $("#ic-kamardepan").removeClass("bi-lightbulbfill");
            $("#ic-kamardepan").addClass("bi-lightbulb-off-fill");
        }

        if(StatusRelay4 == "ON"){            
        $("#sts-ruangtengah").text("ON");
            $("#ic-ruangtengah").addClass("ic-active");
            $("#ic-ruangtengah").removeClass("bi-lightbulb-off-fill");
            $("#ic-ruangtengah").addClass("bi-lightbulb-fill");
        } else {
            $("#sts-ruangtengah").text("OFF");
            $("#ic-ruangtengah").removeClass("ic-active");
            $("#ic-ruangtengah").removeClass("bi-lightbulbfill");
            $("#ic-ruangtengah").addClass("bi-lightbulb-off-fill");
        }
    })
});


function togTerasDepan(){
    var firebaseRef = firebase.database().ref().child("Relay/StatusRelay1");
        if(StatusRelay1 == "ON"){
            firebaseRef.set("OFF");
            StatusRelay1="OFF";
        } else {
            firebaseRef.set("ON");
            StatusRelay1="ON";
        }
}

function togRuangTamu(){
    var firebaseRef = firebase.database().ref().child("Relay/StatusRelay2");
        if(StatusRelay2 == "ON"){
            firebaseRef.set("OFF");
            StatusRelay2="OFF";
        } else {
            firebaseRef.set("ON");
            StatusRelay2="ON";
        }
}

function togKamarDepan(){
    var firebaseRef = firebase.database().ref().child("Relay/StatusRelay3");
        if(StatusRelay3 == "ON"){
            firebaseRef.set("OFF");
            StatusRelay3="OFF";
        } else {
            firebaseRef.set("ON");
            StatusRelay3="ON";
        }
}

function togRuangTengah(){
    var firebaseRef = firebase.database().ref().child("Relay/StatusRelay4");
        if(StatusRelay4 == "ON"){
            firebaseRef.set("OFF");
            StatusRelay4="OFF";
        } else {
            firebaseRef.set("ON");
            StatusRelay4="ON";
        }
}
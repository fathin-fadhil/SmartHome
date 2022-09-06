// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();
//spinner end

$(document).ready(function() {
    var database = firebase.database();
    var StatusRelay1;
    var StatusRelay2;
    var StatusRelay3;
    var StatusRelay4;
    var suhu1;
    var suhu2;
    var suhu3;
    var suhu4;

    database.ref().child('Relay').on("value",function(snap){
        StatusRelay1 = snap.val().StatusRelay1;
        StatusRelay2 = snap.val().StatusRelay2;
        StatusRelay3 = snap.val().StatusRelay3;
        StatusRelay4 = snap.val().StatusRelay4;
            
        if(StatusRelay1 == "ON"){
            document.getElementById("dh-sts-terasdepan").innerHTML = "ON";
            $("#dh-ic-terasdepan").removeClass("nav-link disabled");
            $("#dh-ic-terasdepan").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-terasdepan").innerHTML = "OFF";
            $("#dh-ic-terasdepan").removeClass("nav-link active");
            $("#dh-ic-terasdepan").addClass("nav-link disabled");
        }

        if(StatusRelay2 == "ON"){
            document.getElementById("dh-sts-ruangtamu").innerHTML = "ON";
            $("#dh-ic-ruangtamu").removeClass("nav-link disabled");
            $("#dh-ic-ruangtamu").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-ruangtamu").innerHTML = "OFF";
            $("#dh-ic-ruangtamu").removeClass("nav-link active");
            $("#dh-ic-ruangtamu").addClass("nav-link disabled");
        }

        if(StatusRelay3 == "ON"){
            document.getElementById("dh-sts-kamardepan").innerHTML = "ON";
            $("#dh-ic-kamardepan").removeClass("nav-link disabled");
            $("#dh-ic-kamardepan").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-kamardepan").innerHTML = "OFF";
            $("#dh-ic-kamardepan").removeClass("nav-link active");
            $("#dh-ic-kamardepan").addClass("nav-link disabled");
        }

        if(StatusRelay4 == "ON"){            
        document.getElementById("dh-sts-ruangtengah").innerHTML = "ON";
            $("#dh-ic-ruangtengah").removeClass("nav-link disabled");
            $("#dh-ic-ruangtengah").addClass("nav-link active");
        } else {
            document.getElementById("dh-sts-ruangtengah").innerHTML = "OFF";
            $("#dh-ic-ruangtengah").removeClass("nav-link active");
            $("#dh-ic-ruangtengah").addClass("nav-link disabled");
        }
    })

    database.ref().child('Temp').on("value",function(snap){
        suhu1 = snap.val().suhu1;
        suhu2 = snap.val().suhu2;
        suhu3 = snap.val().suhu3;
        suhu4 = snap.val().suhu4;

        document.getElementById("temp-ruangtamu").innerHTML = suhu1;
        document.getElementById("temp-teras").innerHTML = suhu2;
        document.getElementById("temp-ruangtengah").innerHTML = suhu3;
        document.getElementById("temp-kamardepan").innerHTML = suhu4;
    });
});
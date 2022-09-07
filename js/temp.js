//spinner start
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();
//spinner end
var suhu1;
var suhu2;
var suhu3;
var suhu4;

$(document).ready(function() {
    //sidebar toggle start
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    var database = firebase.database();

    database.ref().child('Temp').on("value",function(snap){
        suhu1 = snap.val().suhu1;
        suhu2 = snap.val().suhu2;
        suhu3 = snap.val().suhu3;
        suhu4 = snap.val().suhu4;

        /* document.getElementById("t1").innerHTML = suhu1 + '°C';
        document.getElementById("t2").innerHTML = suhu2 + '°C'; */
        update(Number(suhu1), Number(suhu2));

    });
});

function update(num1, num2) {
    gauge1.setValueAnimated(num1,2)
    gauge2.setValueAnimated(num2,2)
    
}
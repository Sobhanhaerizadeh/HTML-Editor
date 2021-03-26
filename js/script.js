$(document).ready(function() {
    $("#txt").hover(function() {
        $("#txt").css("border-color", "black");
    });
    $("#txt").keyup(function() {

        // $tx = document.getElementById('txt').value;
        var tx = $("#txt").val();
        $("#dav").html(tx);
        // if (tx == "sobhan") {
        //     alert("King :)");
        // } else {
        //     alert("Patient!");
        // }
    });
    $(".btn").click(function() {
        $("#dav").toggleClass("show")
    });
});
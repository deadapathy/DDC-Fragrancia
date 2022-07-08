$(document).ready(function () {
    $('.js-example-basic-single').select2();
});


$(function rdBtn() {
    //$("#block2").hide()

    $("#consumption").on('click', function () {
        $("#block2").hide()
        $("#block3").hide()
        $("#block1").show("slow");

    })

    $("#transfer").on('click', function () {
        $("#block1").hide();
        $("#block3").hide()
        $("#block2").show("slow");
    })

    $("#convert").on('click', function () {
        $("#block1").hide();
        $("#block2").hide();
        $("#block3").show("slow");
    })

})
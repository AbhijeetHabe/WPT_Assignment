$(document).ready(function() {
    $("#button").click(function() {
        val = $("#value").val()
        $("#message").append(`<h1>${val}<h1>`)
        $("#value").val("")
    });
});
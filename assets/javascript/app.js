// JavaScript function that wraps everything
$(document).ready(function () {
    var APIKEY = "4aW0ucG0qcPg0ONPsekdiLuJCcUFRAzX"
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + APIKEY + "&limit=5"
    var buttonNumber = 0

    //function to dynamically add buttons.  Parameters 
    function dynamicButtonAdd(buttonName,divToAppendTo){
        var a = $("<button>")
        a.addClass("btn btn-primary")
        a.text(buttonName)
        buttonNumber++
        a.attr("index", buttonNumber)
        $(divToAppendTo).append(a)
    }


    $("#addTopic").on("click", function () {
        event.preventDefault()
        var topicInput = $("#addInput").val()
        dynamicButtonAdd(topicInput,"#topicButtons")
        $("#addInput").val("")


        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then(function (requestResult) {
            console.log(requestResult)
            // for (var i = 0; i < requestResult.data.length; i++) {
                $("#topicResult").html("<img src="+requestResult.data[0].url+"/><h6>Powered by Giphy</h6>") //RYAN GOSLING WHERE ARE YOU?
            // }
        })

        $("#topicResult").append(topicInput)
    })//end ajax

});  //close document.ready






















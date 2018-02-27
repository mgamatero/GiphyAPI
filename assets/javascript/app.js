// JavaScript function that wraps everything
$(document).ready(function () {

    var buttonNumber = 0

    //function to dynamically add buttons.  Parameters 
    function dynamicButtonAdd(buttonName, divToAppendTo) {
        var a = $("<button>")
        a.addClass("btn btn-primary")
        a.text(buttonName)
        buttonNumber++
        a.attr("index", buttonNumber)
        $(divToAppendTo).append(a)
    }

    //onclick event that adds dynamic buttons.  Calls function dyamicButtonAdd
    $("#addTopic").on("click", function () {
        event.preventDefault()
        var topicInput = $("#addInput").val()
        dynamicButtonAdd(topicInput, "#topicButtons")
        $("#addInput").val("")
        $("#topicResult").empty()

        $(".btn").on("click", function (document) {
            $("#topicResult").empty()
            var APIKEY = "4aW0ucG0qcPg0ONPsekdiLuJCcUFRAzX"
            var searchMe = $(this).text()
            var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchMe + "&api_key=" + APIKEY + "&limit=10"
            
            $.ajax({
                url: queryUrl,
                method: 'GET'
            }).then(function (requestResult) {
                console.log(requestResult)
                for (var i = 0; i < 10; i++) {
                    $("#topicResult").append("<img src='" + requestResult.data[i].images.fixed_height.url + "'><br>")
                    $("#topicResult").append("<p>Rating: " + requestResult.data[i].rating + "</p>")
                }
            })//end ajax
        })//end .btn click event
    })//end #addTopic onclick

    //onclick event that searches giphy api when buttons clicked.  Buttons text are used to search
});  //close document.ready






















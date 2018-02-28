// JavaScript function that wraps everything
$(document).ready(function () {

    var buttonNumber = 0
    var topicInput

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
        topicInput = $("#addInput").val()
        dynamicButtonAdd(topicInput, "#topicButtons")
        $("#addInput").val("")
        $("#topicResult").empty()

        //onclick event that searches giphy api when buttons clicked.  Buttons text are used to search
        $(".btn-primary").on("click", function (document) {
            $("#topicResult").empty()
            var APIKEY = "4aW0ucG0qcPg0ONPsekdiLuJCcUFRAzX"
            var searchMe = $(this).text()
            var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchMe + "&api_key=" + APIKEY + "&limit=10"

            $.ajax({
                url: queryUrl,
                method: 'GET'
            }).then(function (requestResult) {
                console.log('getResponse', requestResult.data)
                for (var i = 0; i < requestResult.data.length; i++) {
                    $("#topicResult").append(i + " " + "<img src='" + requestResult.data[i].images.fixed_height.url + " 'index="+i+"><br>")
                    $("img").attr("state", "active")
                    $("#topicResult").append("<p>Rating: " + requestResult.data[i].rating + "</p>")
                }
                //onclick event that pauses and restarts gifs
                $("img").on("click", function () {
                    var state = $(this).attr("state")
                    if (state === "active") {
                        //debug - alert("current state is" + $(this).attr("state"))
                        $(this).attr("src", requestResult.data[$(this).attr("index")].images.fixed_height_still.url)
                        $(this).attr("state", "still")
                       //debug - alert("state is now" + $(this).attr("state"))
                    }
                    else {
                        //debug - alert("current state is" + $(this).attr("state"))
                        $(this).attr("src", requestResult.data[$(this).attr("index")].images.fixed_height.url)
                        $(this).attr("state", "active")
                       //debug - alert("state is now" + $(this).attr("state"))
                    }
                })
            })//end ajax


        })//end #addTopic onclick






    })//end .btn click event



});  //close document.ready






















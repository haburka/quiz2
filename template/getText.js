/**
 * Created by Robb on 3/28/2016.
 */

/*
 For this section, only the button should display on page load
 When the button is clicked, a random string from the return data from the request should display prominently
 on the page and the text of the button should say "Change It". Only one string at a time should display on the page
 You will then need to add a new button that says "Keep It" (this button should not be in the dom when the page loads)
 If I click on the "Keep It" button, you should set a cookie using js, so that when I refresh the page I can see what
 the last value was, and the original button should display, allowing me to complete the operation again, and set a
 new cookie if I want to keep the new value and so on
 Note: setting cookies with regular js is pretty easy, but cannot be done easily with jQuery on it's own
 */
$(function () {
    var text;
    if(document.cookie.indexOf('text') != -1){
        var index = document.cookie.indexOf('text');
        var semi = document.cookie.indexOf(';');
        $('#data').text(document.cookie.substring(index + 5,semi));
    }

    $('#getText').click(function () {
        $.ajax({
            method: "GET",
            url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
            data: {},
            success: function (data) {
                data = data.data;
                text = data[Math.floor(Math.random() * data.length)];
                $('#data').text(text);
                var changeItBtn = $('#main').append('<button type="button" class="btn" id="changeIt" >Change It</button>');
                $('#main').append('<p></p>');
                var keepItBtn = $('#main').append('<button type="button" class="btn" id="keepIt" >Keep It</button>');

                $('#getText').remove();
                setListeners(data, changeItBtn, keepItBtn);
            }
        });
    });
    return false;
});
function setListeners(data, changeItBtn, keepItBtn) {
    var text;
    $('#changeIt').click(function () {
        text = data[Math.floor(Math.random() * data.length)];
        $('#data').text(text);
        return false;
    });
    $('#keepIt').click(function () {
        document.cookie = "text=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        document.cookie = "text=" + $('#data').text();
        return false;
    });

}

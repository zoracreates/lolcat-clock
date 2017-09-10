var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var time = new Date().getHours();

var oneSecond = 1000;

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpNapTimeSelector = document.getElementById("wakeUpNapTimeSelector");





var updateClock =  function () {
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    var timeMessage = document.getElementById("timeEvent");
    var catImage = document.getElementById("lolcat");
    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    } else if (time == napTime) {
        messageText = "IZ NAP TIME...";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    } else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    } else if (time < noon) {
        messageText = "Good morning!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    } else if (time > evening) {
        messageText = "Good Evening!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    } else {
        messageText = "Good afternoon!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    }
    timeMessage.innerText = messageText;
    catImage.src = image;
var showCurrentTime = function () {
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    var merindian = " AM";

    if (hours >= 12) {

        merindian = " PM"
    }

    if (hours >12) {
    hours = hours -12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + minutes;
    }
var clockTime = hours + ":" + minutes + ":" + seconds + merindian + "!";
clock.innerText = clockTime;
};
 showCurrentTime();
};
updateClock();
setInterval(updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime == false) {

      isPartyTime = true;

      time = partyTime;

      partyTimeButton.innerText = "PARTY OVER";

      partyTimeButton.style.backgroundColor = "#0A8DAB";

   } else {

      isPartyTime = false;

      time = new Date().getHours();

      partyTimeButton.innerText = "PARTY TIME!";

      partyTimeButton.style.backgroundColor = "#222" ;

   }

};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function () {
  wakeUpTime = wakeUpTimeSelector.value;
}
var lunchEvent = function () {
 lunchTime = lunchTimeSelector.value;
}
var napEvent = function () {
 napTime = napTimeSelector.value;
}
wakeUpTimeSelector.addEventListener("change",wakeUpEvent);
lunchTimeSelector.addEventListener("change",lunchEvent);
napTimeSelector.addEventListener("change",napEvent);
    // Set the date we're counting down to
   var countDownDate = new Date("Mar 2, 2024 00:00:00").getTime();

   // Update the countdown every second
   var x = setInterval(function() {

   // Get the current date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Calculate time units
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math. floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math. floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math. floor ((distance % (1000 * 60)) / 1000);


   // Display the result in the element with id="countdown"
   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";


   // If the countdown is over, display a message
  if (distance < 0) {
   clearInterval(x);
   document.getElementById ("countdown" ).innerHTML = "EXPIRED";
  } 
}, 1000);
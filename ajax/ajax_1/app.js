// Create Event Listener

document.getElementById('button').addEventListener('click', loadText);

function loadText() {
   // Create XHR Object
   let xhr = new XMLHttpRequest();

   // OPEN - type, url/file, async
   xhr.open('GET', 'sample.txt', true);
   // console.log('Ready State: ' + xhr.readyState);

   // OPTIONAL - used for loaders

   /*
    HTTP Statues
    200 = "OK"
    403 = "Forbidden"
    404 = "Not Found"
   */

   xhr.onload = function() {
      if(this.status === 200) {
         document.getElementById("text").innerHTML = this.responseText;
      } else if (this.status === 404) {
         document.getElementById("text").innerHTML = 'Not Found';
      }
   };

   /*
    ReadyState Values
    0 : Request not initialized
    1 : Server connection established
    2 : Request reveived
    3 : Processing request
    4 : Request finished adn response is ready   
   */

   xhr.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
         console.log('New ' + this.responseText);
      }
   }

   xhr.onerror = function() {
      console.log('Request Error ...');
   }

   // Sends request
   xhr.send();
}
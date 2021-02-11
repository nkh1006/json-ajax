document.getElementById('button').addEventListener('click', getName);
document.getElementById('getForm').addEventListener('submit', getName);

function getName(e) {
   e.preventDefault();
   let name = document.getElementById("name1").value;
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'process.php?name=' + name, true);

   xhr.onload = function() {
      console.log(this.responseText);
   }

   xhr.send();
}
function convertirCelsius(){
  var faren = parseInt(document.getElementById('farenheit').value);
  var celsi = document.getElementById('celsius');
  var celsius = (faren - 32) * 5/9;
  celsi.value = celsius;
};
function convertirFarenheit(){
  var celsi = parseInt(document.getElementById('celsius').value);
  var faren = document.getElementById('farenheit');
  var farenheit = (celsi * 5/9) + 32;
  faren.value = farenheit;
};

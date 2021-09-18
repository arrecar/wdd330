const links = [
    {
      label: "Week1",
      url: "https://github.com/arrecar/wdd330/tree/main/js"
    }
  ]

  var arrayLength = links.length;
for (var i = 0; i < arrayLength; i++){
    var x = document.createElement("LI");
    var y = document.createTextNode(links[i]);
    x.appendChild(y);
    document.getElementById("list").appendChild(x);
}
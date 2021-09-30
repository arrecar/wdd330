const links = [
    {
      label: "Week1",
      url: "https://github.com/arrecar/wdd330/tree/main/js"
    },
    {
      label: "Week2",
      url: "https://arrecar.github.io/wdd330/week2/"
    },
    {
      label: "Week3",
      url: "https://arrecar.github.io/wdd330/week3/"
    }
  ]

  var arrayLength = links.length;
  //loop through array above
  for (var i = 0; i < arrayLength; i++){
        //create li element, to add an item to the list
          var x = document.createElement("LI");
          //create an a tag, to add a hyperlink
          var a = document.createElement("a");
          //grab the value of the first property of the object and add it as text
          var y = document.createTextNode(links[i].label);
          //append the text to the li
          x.appendChild(y);
          //set the link to the hyperlink
          a.setAttribute("href",links[i].url);
          //insert the item n the list with the lnk
          document.getElementById("list").appendChild(a).appendChild(x);
  }
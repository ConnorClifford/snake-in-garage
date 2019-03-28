//start function that will delete existing content and then write new content
function createContent(event) {
  event.preventDefault();
  var changingContentDiv = document.getElementById('changingContent');

//make sure that changingContentDiv is empty
  while(changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }

//create a div that will contain all of our appended content
  var newDiv1 = document.createElement('div');
  newDiv1.classList.add("box");

    var newDiv2 = document.createElement('div');
    newDiv2.classList.add("post");
    newDiv1.appendChild(newDiv2);

      var newDiv2Child = document.createElement('img');
      newDiv2Child.src = "img/marcy.png";
      newDiv2.appendChild(newDiv2Child);

      var newDiv2Child = document.createElement('textarea');
      newDiv2Child.rows = "4";
      newDiv2Child.cols = "60";
      newDiv2.appendChild(newDiv2Child);

    var newDiv3 = document.createElement('div');
    newDiv3.classList.add("info");
    newDiv1.appendChild(newDiv3);

      var newDiv3Child = document.createElement('img');
      newDiv3Child.src = "img/03-google.png";
      newDiv3.appendChild(newDiv3Child);

      var newDiv3Child = document.createElement('p');
      var newDiv3Text = document.createTextNode("google reader using MarcelineTheVampireQueen@gmail.com");
      newDiv3Child.appendChild(newDiv3Text);
      newDiv3.appendChild(newDiv3Child);

      var newDiv4 = document.createElement('div');
      newDiv4.classList.add("submit");
      newDiv3.appendChild(newDiv4);

        var newDiv5 = document.createElement('div');
        newDiv5.classList.add("button");
        newDiv4.appendChild(newDiv5);

          var newDiv5Child = document.createElement('p');
          var newDiv5Text = document.createTextNode("Post");
          newDiv5Child.appendChild(newDiv5Text);
          newDiv5.appendChild(newDiv5Child);

        var newDiv4Child = document.createElement('p');
        var newDiv4Text = document.createTextNode("or");
        newDiv4Child.appendChild(newDiv4Text);
        newDiv4.appendChild(newDiv4Child);

        var newDiv4Child = document.createElement('a');
        newDiv4Child.href = "##";
        var newDiv4Text = document.createTextNode("Cancel");
        newDiv4Child.appendChild(newDiv4Text);
        newDiv4.appendChild(newDiv4Child);


//add the container div to the document
  changingContentDiv.appendChild(newDiv1);
//end function
}

//run createContent on Page load
window.addEventListener('load',createContent);

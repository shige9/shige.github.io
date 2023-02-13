function myFunction() {
  var x = document.getElementById("myHeading");
  var y = document.getElementById("myButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "confirmation";
  } else {
    x.style.display = "none";
  }

  if (y.innerHTML === "confirmation") {
    var image1 = document.querySelector(".img-1 img");
    var image2 = document.querySelector(".img-2 img");
    var image3 = document.querySelector(".img-3 img");
    var image4 = document.querySelector(".img-4 img");
    var image5 = document.querySelector(".img-5 img");
    var image6 = document.querySelector(".img-6 img");
    var image7 = document.querySelector(".img-7 img");
    var image8 = document.querySelector(".img-8 img");
    var image9 = document.querySelector(".img-9 img");
    var image10 = document.querySelector(".img-10 img");
    var image11 = document.querySelector(".img-11 img");
    image11.style.display = "block";
    image10.style.display = "block";
    image9.style.display = "block";
    image8.style.display = "block";
    image7.style.display = "block";
    image6.style.display = "block";
    image5.style.display = "block";
    image4.style.display = "block";
    image3.style.display = "block";
    image2.style.display = "block";
    image1.style.display = "block";
    y.innerHTML = "YES?";
  } else if (y.innerHTML === "YES?") {
    var video = document.getElementById("myVideo");
    var popup = document.createElement("div");
    popup.style.width = "25rem";
    popup.style.height = "5rem";
    popup.style.backgroundColor = "#141414";
    popup.style.position = "fixed";
    popup.style.top = "56%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.textAlign = "center";
    popup.style.padding = "5rem";
    popup.style.color = "white";
    popup.style.borderRadius = "10px";
    popup.style.display = "flex";
    popup.style.boxShadow = "0px 5px 10px #141414";
    popup.style.justifyContent = "space-between";

    var image = document.createElement("img");
    image.src = "assets/peeposhy-pepeshy.gif";
    image.style.width = "100px";
    image.style.height = "100px";
    image.style.position = "relative";
    image.style.top = "-0.5rem";
    image.style.borderRadius = "50%";
    popup.appendChild(image);

    var text = document.createElement("p");
    text.innerHTML = "DM ME! :PeepoShy:";
    text.style.fontSize = "50px";
    text.style.color = "red";
    text.style.position = "relative";
    text.style.top = "-4rem";
    text.style.right = "-2rem";
    popup.appendChild(text);

    popup.style.opacity = 0;
    document.body.appendChild(popup);
    var fadeInInterval = setInterval(function() {
      popup.style.opacity = parseFloat(popup.style.opacity) + 0.05;
      if (popup.style.opacity >= 1) {
        clearInterval(fadeInInterval);
      }
    }, 20);
  }
}

document.getElementById("myButton").addEventListener("click", myFunction);

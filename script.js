var myImgs = document.querySelectorAll("img");
for (let i = 0; i < myImgs.length; i++) {
  myImgs[i].addEventListener("click", function (evt) {
    var ol = document.getElementById("overlay");
    ol.style.display = "block";
    var ol_img = document.getElementById("ol_image");
    ol_img.src = evt.target.src;
    //click overlay again to exit to none overlay
    ol.addEventListener("click", function (event) {
      if (event.target == this) {
        ol.style.display = "none";
      }
    });
  });
}

function olVideos(a) {
  //display overlay and item div onlick
  var ol = document.getElementById("overlay");
  ol.style.display = "block";
  var ol_vid = document.getElementById("ol_video");
  ol_vid.src = a.src;
  //click overlay again to exit to none overlay
  ol.addEventListener("click", function (event) {
    if (event.target == this) {
      ol.style.display = "none";
    }
  });
}

//back to top button
const bttButton = document.getElementById("btt_btn");
//window listen for scroll over quarter and display
window.addEventListener("scroll", displayButton);

function displayButton() {
  if (
    document.body.scrollTop > document.body.scrollHeight / 4 ||
    document.documentElement.scrollTop > document.body.scrollHeight / 4
  ) {
    bttButton.style.display = "block";
  } else {
    bttButton.style.display = "none";
  }
}
//click bttButton and go back to top
bttButton.addEventListener("click", backFunction);

function backFunction() {
  window.scroll(0, 0);
}

function validateEmail() {
  var email_addr = document.getElementById("email").value;
  var msg = document.getElementById("message");
  var valid_msg = "Email succesfully recorded.";
  var invalid_msg = "Invalid email address.";
  if (
    email_addr.includes("@") &&
    (email_addr.slice(-4) == ".com" || email_addr.slice(-4) == ".edu")
  ) {
    msg.innerHTML = valid_msg;
  } else {
    msg.innerHTML = invalid_msg;
  }
}

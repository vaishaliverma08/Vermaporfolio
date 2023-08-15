const dynamicContent = document.getElementById("dynamic-text");
// console.log(dynamicContent);
const phrases = ["Software Engineer...", "Fresher...", "Frontend Developer..."];
let index = 0;
let phraseIndex = 0;
let letterIndex = 0;
function printLetter(phrase) {
  if (letterIndex == phrase.length) {
    clearLetter();
  } else if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      printLetter(phrase);
    }, 150);
  }
}
function clearLetter() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    printLetter(phrases[phraseIndex]);
  } else if (letterIndex > -1) {
    let updatephrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatephrase += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatephrase;
    letterIndex -= 1;
    setTimeout(clearLetter, 75);
  }
}
printLetter(phrases[phraseIndex]);

function send() {
  console.log("function call...");
  var name = document.getElementById("name").value;
  var email = document.getElementById("Email").value;
  var contact = document.getElementById("contact").value;
  var message = document.getElementById("message").value;
  // var name = document.getElementById('name').value;
  var body =
    "Name: " +
    name +
    "<br/> Email: " +
    email +
    "<br/> Contact: " +
    contact +
    "<br/> Message: " +
    message;
  console.log(body);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "verma.vaishali0812@gmail.com",
    Password: "47558309395DFC9031A1B36449CB69D11461",
    To: "verma.vaishali0812@gmail.com",
    // From: "verma.vaishali0812@gmail.com",
    From: document.getElementById("Email").value,
    Subject: "This is the subject",
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      swal("Successfully!", "Your email has been send...", "success");
    } else {
      swal("Something is wrong!", "check the credentials", "error");
    }
  });
}

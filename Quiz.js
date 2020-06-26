//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var KotaTheFriendScore = 0;
var ZoeRexScore = 0;
var JAWNYScore = 0;
var ShakeyGravesScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", KotaTheFriend);
q1a2.addEventListener("click", ZoeRex);
q1a3.addEventListener("click", JAWNY);
q1a4.addEventListener("click", ShakeyGraves);

q2a1.addEventListener("click", KotaTheFriend);
q2a2.addEventListener("click", ZoeRex);
q2a3.addEventListener("click", JAWNY);
q2a4.addEventListener("click", ShakeyGraves);

q3a1.addEventListener("click", KotaTheFriend);
q3a2.addEventListener("click", ZoeRex);
q3a3.addEventListener("click", JAWNY);
q3a4.addEventListener("click", ShakeyGraves);

q4a1.addEventListener("click", KotaTheFriend);
q4a2.addEventListener("click", ZoeRex);
q4a3.addEventListener("click", JAWNY);
q4a4.addEventListener("click", ShakeyGraves);

q5a1.addEventListener("click", KotaTheFriend);
q5a2.addEventListener("click", ZoeRex);
q5a3.addEventListener("click", JAWNY);
q5a4.addEventListener("click", ShakeyGraves);

fullReset.addEventListener(
  "click",
  function(e) {
    location.reload();
  },
  false
);

// q4a1.addEventListener("click", KotaTheFriend);
// q4a2.addEventListener("click", ZoeRex);
// q4a3.addEventListener("click", JAWNY);
// q4a4.addEventListener("click", ShakeyGraves);

//#TODO: Define quiz functions here
function KotaTheFriend() {
  KotaTheFriendScore += 1;
  questionCount += 1;
  // alert("One Point to Gryffindor!");
  if (questionCount >= 5) {
    updateResult();
  }
}

function ZoeRex() {
  ZoeRexScore += 1;
  questionCount += 1;
  // alert("One Point to Gryffindor!");
  if (questionCount >= 5) {
    updateResult();
  }
}

function JAWNY() {
  JAWNYScore += 1;
  questionCount += 1;
  // alert("One Point to Gryffindor!");
  if (questionCount >= 5) {
    updateResult();
  }
}

function ShakeyGraves() {
  ShakeyGravesScore += 1;
  questionCount += 1;
  // alert("One Point to Gryffindor!");
  if (questionCount >= 5) {
    updateResult();
  }
}

// update the result
function updateResult() {
  if (KotaTheFriendScore > ZoeRexScore) {
    result.innerHTML = " You should shop from Catching A Fish In Norway";
    // location.replace("KotaTheFriend.html")
  } else if (KotaTheFriendScore > JAWNYScore) {
    result.innerHTML = "You should shop from Catching A Fish In Norway";
    // location.replace("KotaTheFriend.html")
  } else if (KotaTheFriendScore > ShakeyGravesScore) {
    result.innerHTML = "You should shop from Catching A Fish In Norway";
    // location.replace("KotaTheFriend.html")
  } else if (ZoeRexScore > KotaTheFriendScore) {
    result.innerHTML = "You should shop from Made Trade";
    // location.replace("KotaTheFriend.html")
  } else if (ZoeRexScore > JAWNYScore) {
    result.innerHTML = "You should shop from Made Trade";
    // location.replace("KotaTheFriend.html")
  } else if (ZoeRexScore > ShakeyGravesScore) {
    result.innerHTML = "You should shop from MAde Trade";
    // location.replace("KotaTheFriend.html")
  } else if (JAWNYScore > KotaTheFriendScore) {
    result.innerHTML = "You should shop from TOAD&CO";
    // location.replace("KotaTheFriend.html")
  } else if (JAWNY > ZoeRexScore) {
    result.innerHTML = "You should shop from TOAD&CO";
    // location.replace("KotaTheFriend.html")
  } else if (JAWNY > ShakeyGravesScore) {
    result.innerHTML = "You should shop from TOAD&CO";
    // location.replace("KotaTheFriend.html")
  } else if (ShakeyGravesScore > KotaTheFriendScore) {
    result.innerHTML = "You should shop from époque évolution ";
    // location.replace("KotaTheFriend.html")
  } else if (ShakeyGravesScore > ZoeRexScore) {
    result.innerHTML = "You should shop from époque évolution ";
    // location.replace("KotaTheFriend.html")
  } else if (ShakeyGravesScore > JAWNYScore) {
    result.innerHTML = "You should shop from époque évolution";
    // location.replace("KotaTheFriend.html")
  } else {
    result.innerHTML = "idk";
  }
}

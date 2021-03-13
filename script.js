function joinMe() {
  let name = prompt("What is you first name?");
  let cruise = prompt("Would you like to join me?");
  cruise = cruise.toLowerCase();
  cruise = cruise.trim();
  cruise = cruise.replace("yep", "yes");
  cruise = cruise.replace("yeah", "yes");
  cruise = cruise.replace("nope", "no");
  cruise = cruise.replace("nah", "no");
  let h6 = document.querySelector("h6");

  if (cruise === "yes") {
    h6.innerHTML = `Great, ${name}, see you on board! <br /> 🚤 `;
  } else if (cruise === "no") {
    h6.innerHTML = `I am sorry to hear that, ${name}, maybe we could go for a walk instead! <br /> 🥾`;
  }
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", joinMe);

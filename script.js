(function () {

  const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let name of names) {
    const firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();

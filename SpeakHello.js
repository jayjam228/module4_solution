// helloSpeaker.js
(function (window) {
  const helloSpeaker = {};
  const speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(`${speakWord} ${name}`);
  };

  // Expose 'helloSpeaker' to the global object
  window.helloSpeaker = helloSpeaker;
})(window);

// byeSpeaker.js
(function (window) {
  const byeSpeaker = {};
  const speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(`${speakWord} ${name}`);
  };

  // Expose 'byeSpeaker' to the global object
  window.byeSpeaker = byeSpeaker;
})(window);

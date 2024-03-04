(function(window){
  var speakWord = "Hello";
  helloSpeaker =new Object;
  helloSpeaker.speak=function(name) {
    console.log(speakWord + " " + name);
    window.helloSpeaker=helloSpeaker;
  }
})(window);
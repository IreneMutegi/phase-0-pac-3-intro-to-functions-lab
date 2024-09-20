function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  
  module.exports = { whisper };
  
  
  console.log(whisper("HELLO")); 
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Example usage:
  console.log(sayHiToHeadphonedRoommate("hello"));                  // "I can't hear you!"
  console.log(sayHiToHeadphonedRoommate("HELLO"));                  // "YES INDEED!"
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // "I would love to!"
  
  module.exports = { sayHiToHeadphonedRoommate };
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Example usage:
  logWhisper("HELLO"); // Logs: "hello"
  
  module.exports = { logWhisper };
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Example usage:
  logShout("hello"); // Logs: "HELLO"
  
  module.exports = { logShout };
  
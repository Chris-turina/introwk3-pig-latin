var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var consonants = []

function translator(userInput) {
    var arryInputs = userInput.split(" ");
    var output = "";
    arryInputs.forEach(function(arryInput) {
      var firstChar = arryInput[0];
      if (vowels.indexOf(firstChar) !== -1) {
        output = arryInputs + "way";

      } else {
        var arryLets = arryInput.split("");
        arryLets.forEach(function(arryLet) {
          var vowelFound = false;
          vowels.forEach(function(vowel) {
            console.log(arryLet, vowel);
            if (arryLet !== vowel) {
              vowelFound = true;
            }
          });
          if (vowelFound === true) {
            arryLets.shift();
          }
      });




        alert(arryLets);


      };
    });
    return output;
};



$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var userInput = $("input#words").val();
    $(".output").text(translator(userInput));


  });
});

// if(vowel.indexOf("q")!===-1){
//   then its a vowel











// arryInput.forEach(function(arryInput) {
//   var arryWord = arryInput.split("");
//   var letter = arryInput.charAt(0);
//   alert(letter);
//   for (i = 0; i < arryInput.length; i++) {
//
//
//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
//     alert("true");
//   } else {
//     alert("false");
//   };
//   };
// });

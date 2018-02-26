/*

  In this assignmenmt you are given a list of student names. The challenge
  is to pair students by how similar their names are in edit distance.
  The pairing algorithm  pseudocode is:

  sort the students by last name (A to Z)
  while there is > 1 unpaired student
    X = the first unpaired student
    if X's first name begins with a vowel
      compute the Hamming distance to all other unpaired students

    if X's first name begins with a consonant
      compute the Levenshtein distance to all other unpaired students

    pair X with the most similar name, Y (ie shortest edit distance). If there
    is a tie in edit distance, sort the results by last name (A...Z) and
    take the first.

    remove X and Y from the list of unpaired students.


  to help you, you are provided with the scripts:
    levenshtein.js and hamming.js

  **THERE IS CURRENTLY A NAMING CONFLICT, solve this by wrapping each
    provided distance funciton the JavaScirpt namespace-like construct of your choice.

    YOU CANNOT SIMPLY RENAME the distance functions!
    YOU CANNOT MODIFY THE distance functions IN ANY WAY other than
    to implement your namespace construct!

    I suggest putting each in it's own unique object so in your main
    code you can write:
     hamming.distance(a,b)
      or
     levenshtein.distance(a,b)
 */

var names = ["Jordan Voves", "Keller Chambers", "Stefano Cobelli",
"Jenna Slusar", "Jason Corriveau", "Cole Whitley", "Dylan Zucker",
"Danny Toback", "Eric Marshall", "Allan La", "Natalie Altman",
"Evan Harrington", "Jack Napor", "Jingya Wu", "Christian Ouellette",
"Junjie Jiang", "Morgan Muller", "Sarah Xu", "Aleksandar Antonov",
"Parker Watson", "Haipu Sun", "Ryan Pencak", "Dan Kershner",
"John Venditti", "Jacob Mendelowitz", "Dunni Adenuga", "Jeff Lee",
"Uttam Kumaran", "Jack Hall-Tipping"]

var vowels = ["A","E","I","O","U"]


/* STEP 1: SORT NAMES by LAST NAME! */

var lastNames = names.map(function(x){
  var space = x.indexOf(" ")
  return x = (x.substring(space + 1) +" "+ x.substring(0, space))
})
console.log(lastNames);

names.sort();
lastNames.sort();

/* WHILE > 1 students are UNPAIRED
      take 1st student, compute distance to all others,
      pair with lowest score.
      */
var ham = new hamming();
var lev = new levenshtein();
while (lastNames.length > 1) {

      var name = lastNames[0];
      var letterName = names[0];
      lastNames.splice(0,1);
      names.splice(0,1);
      var letter = letterName.charAt(0);
      var dist = 100;
      var pair = "";
      var index;
      /* If the first letter is a vowel */
      if (vowels.includes(letter)){
        for (var i in lastNames){

          var temp = ham.distance(name, lastNames[i]);

          if (temp<dist){

            dist = temp;
            pair = lastNames[i];
            index = i;
          }
        }
      }else{
        for (var i in lastNames){
          var temp = lev.distance(name, lastNames[i]);

          if (temp<dist){
            dist = temp;
            pair = lastNames[i];
            index = i;
        }
      }
    }

    console.log(name + " paired with " + pair + " with distance "+ dist);
    lastNames.splice(index, 1);
    names.splice(index,1);
  }

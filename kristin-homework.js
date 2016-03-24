//// #### ////  I TRIED THIS A FEW DIFFERENT WAYS - 3 CODE SETS BELOW  //// #### //// 

//// #### ////  FOR LOOP APPROACH  //// #### //// 

// Return an array with only animals that have three-letter names.
// Return an array with only animals that have two-word names.
// Return an array with only animals that don't start with the letter K.
// Using .map()

// Return an array that changes all animal names containing "bear" to "Teddy Bear".
// Write a regular expression that checks if the animal is either cat or dog. If it is cat, replace the value with "Kitty Cat" and if it is a dog replace the value with "Puppy".



// NON OBJECT ORIENTED ARRAYS USING REGEX OLD SCHOOL

console.log("########## FOR LOOP APPROACH #########");

var animalArray = ["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"];
var shortAnimalNames =[];
var twoWordAnimalNames =[];
var animalsStartingWithK =[];
var teddyArray = animalArray;
var kittyPuppyArray = animalArray;

// Return an array with only animals that have three-letter names.
for(i=0; i<animalArray.length; i++){
  if (animalArray[i].length==3){
  shortAnimalNames.push(animalArray[i]);
  }else{}
}

// Return an array with only animals that have two-word names.
for(i=0; i<animalArray.length; i++){
  if (animalArray[i].match(/[A-z]+ [A-z]+/)){
  twoWordAnimalNames.push(animalArray[i]);
  }else{}
}

// Return an array with only animals that don't start with the letter K.
for(i=0; i<animalArray.length; i++){
  if (animalArray[i].match(/^K/)){
  animalsStartingWithK.push(animalArray[i]);
  }else{}
}

// Return an array that changes all animal names containing "bear" to "Teddy Bear".
for(i=0; i<teddyArray.length; i++){
  if (teddyArray[i].match(/\bBear\b/)){
  teddyArray[i]="Teddy Bear";
  }else{}
}

//Write a regular expression that checks if the animal is either cat or dog. If it is cat, replace the value with "Kitty Cat" and if it is a dog replace the value with "Puppy".
for(i=0; i<kittyPuppyArray.length; i++){
  if (kittyPuppyArray[i].match(/\bCat\b/)){
  kittyPuppyArray[i]="Kitty Cat";
  } 
  else if (kittyPuppyArray[i].match(/\bDog\b/)){
  kittyPuppyArray[i]="Puppy";
  }else{}
}



console.log("Three Letter Animal Names: " + shortAnimalNames);
console.log("Two Word Animal Names: " + twoWordAnimalNames);
console.log("Starts with K: " + animalsStartingWithK);
console.log("Bearified Array: " + teddyArray);
console.log("It's raining: " + kittyPuppyArray);


//// #### ////  OBJECT ORIENTED APPROACH  //// #### //// 

console.log("########## OBJECT ORIENTED APPROACH #########");

var ark=["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"]; // create an array of animals

function AnimalArrayGenerator(animalarray) { // create a constructor that accepts arrays (not explicitly restricted to arrays). animalarray is a temp variable name representing what is passed into the object
    this.animal = animalarray; // the object has one property at this point
}

// Return an array with only animals that have three-letter names.
AnimalArrayGenerator.prototype.threeLetterNames = function(){  // attach a new property to the object in the form of a function
  return this.animal.filter(function(trio) { // filter the array that is passed to the object by choosing things with a length of 3 - trio is a temporary variable name represenging the item in the array being iterated on by the filter function
    return trio.length === 3;
  });
};

// Return an array with only animals that have two-word names.
AnimalArrayGenerator.prototype.twoWordNames = function(){  // attach a new property to the object in the form of a function
  return this.animal.filter(function(dos) { // filter the array that is passed to the object by choosing things with two words
    return dos.match(/[A-z]+ [A-z]+/);
  });
};

// Return an array with only animals that don't start with the letter K.
AnimalArrayGenerator.prototype.doesntStartWithK = function(){  // attach a new property to the object in the form of a function
  return this.animal.filter(function(nok) { // filter the array that is passed to the object by choosing things without an opening K
    return nok.match(/^[^k]/i);
  });
};

// Return an array that changes all animal names containing "bear" to "Teddy Bear".
AnimalArrayGenerator.prototype.bearify = function(){  // attach a new property to the object in the form of a function
  return this.animal.map(function(teddy) { // filter the array that is passed to the object by choosing things with two words
    return teddy.replace(/\bBear\b/, "Teddy Bear");
  });
};

// Write a regular expression that checks if the animal is either cat or dog. If it is cat, replace the value with "Kitty Cat" and if it is a dog replace the value with "Puppy".

AnimalArrayGenerator.prototype.kittyPuppy = function(){  // attach a new property to the object in the form of a function
  return this.animal.map(function(kitpup) { // filter the array that is passed to the object by choosing things with two words
    if(kitpup.match(/\bCat\b/)){
    	return kitpup.replace(/\bCat\b/, "Kitty Cat");
    }
    else if(kitpup.match(/\bDog\b/)){
    	return kitpup.replace(/\bDog\b/, "Puppy");
    }
    else{
    	return kitpup;
    }
    
  });
};


// set a new variable where you pass the animal array ark to the object animalarraygenerator
var myAnimalArray = new AnimalArrayGenerator(ark);


console.log(myAnimalArray.threeLetterNames()); // process the array ark through the three letter names function and return the results
console.log(myAnimalArray.twoWordNames()); 
console.log(myAnimalArray.doesntStartWithK());
console.log(myAnimalArray.bearify()); 
console.log(myAnimalArray.kittyPuppy()); 

//// #### ////  SIMPLIFIED APPROACH WITH ABSTRACTION OF REGEX PATTERNS INTO VARIABLES  //// #### //// 

console.log("########## SIMPLIFIED APPROACH #########");

var ark=["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"]; // create an array of animals

// set up the regex patterns we are testing against
pattern3Letter = /^[A-z]{3}$/;
pattern2Words = /[A-z]+ [A-z]+/;
patternNoK = /^[^k]/i;
patternBears = /bear/ig;
patternCat = /^cat$/i;
patternDog = /^dog$/i;

// Return an array with only animals that have three-letter names.
var threeLetterNames = ark.filter(function(e){
  return pattern3Letter.test(e);
});
// Return an array with only animals that have two-word names.
var twoWordNames = ark.filter(function(e){
  return pattern2Words.test(e);
});

// Return an array with only animals that don't start with the letter K.
var noKNames = ark.filter(function(e){
  return patternNoK.test(e);
});
// Return an array that changes all animal names containing "bear" to "Teddy Bear".
var allTeddyBears = ark.map(function(e){
  return e.replace(patternBears, "Teddy Bear");
});
// Write a regular expression that checks if the animal is either cat or dog. If it is cat, replace the value with "Kitty Cat" and if it is a dog replace the value with "Puppy".
var kittiesPuppies = ark.map(function(e){
  if(patternCat.test(e)){
    return e.replace(patternCat, "Kitty Cat");
  }
  else if(patternDog.test(e)){
    return e.replace(patternDog, "Puppy");
  }
  else{
    return e;
  }
})


console.log(threeLetterNames);
console.log(twoWordNames);
console.log(noKNames);
console.log(allTeddyBears);
console.log(kittiesPuppies);



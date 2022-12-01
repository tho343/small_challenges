// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//function pAequorFactory will create the new object
const pAequorFactory = (num, dnaArr) =>{
  return specie = {
    specieNum : num,
    dna: dnaArr,
    
    //mutate() function used to stimulate the mutation
    // it will randomly pick 1 base from the original bases and change
    // to the different base then return the new dna
    mutate : function() {
      
      const randomIndex = Math.floor(Math.random() *15);
      const pickedBase = this.dna[randomIndex];
      //using while loop to evaluate the new base to see if it duplicate.
      var newBase = returnRandBase();
      while(newBase === pickedBase){
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
      
    },
    //compareDNA function is used to compare the object's dna 
    //with another object's dna
    compareDNA : function (pAequor) {
      let count = 0;
      
      for(let i = 0; i < 15; i++){
        if(this.dna[i] === pAequor[i]){
          count++;
        }
      }
      const percentage = ((count / 15) * 100).toFixed();
      console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common.`)

    },
    //this willLikelySurvice function will evalute the likel survive
    //by calculating the occurrences of 'G'
    //and 'C', which should be over 60%
    willLikelySurvive: function(){
      let cCount = 0;
      let gCount = 0;
      for(let i of this.dna){
        if(i === 'C'){
          cCount++;
        }
        if(i === 'G'){
          gCount++;
        }
      }
      if((cCount/15 >= 0.6) || (gCount/15 >= 0.6)){
        return true;
      } else{
        return false;
      }
      
    }

  }
    

  
}
//create batch of 30 spicies for later experiment
const batch =[];
let assignednum =0;
while(batch.length != 30){
  //using wilLikelySurvive method to filter the specie with 60% of C or G only
  let newP = pAequorFactory(assignednum,mockUpStrand());
  if(newP.willLikelySurvive()){
    batch.push(newP);
    assignednum++;
  }

}
let newSpecie = pAequorFactory(1, mockUpStrand());
console.log(newSpecie.dna);
//console.log(newSpecie.mutate());
let anotherSpecie = pAequorFactory(2, mockUpStrand());
console.log(anotherSpecie.dna);
newSpecie.compareDNA(anotherSpecie.dna);
let aA = pAequorFactory(3,['C','G','C','G','C','G','C','G','G','C','G','G','G','C','G'])
console.log(aA.willLikelySurvive());

console.log(batch);














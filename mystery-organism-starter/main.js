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
      
    }

  }
    

  
}
let newSpecie = pAequorFactory(1, mockUpStrand());

console.log(newSpecie);

console.log(newSpecie.mutate());













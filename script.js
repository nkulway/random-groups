const list = [
    "Sara Pacocha",
    "Mrs. Eileen Schiller",
    "Amos Prohaska",
    "Saul Rohan",
    "Belinda Medhurst",
    "Herbert Koss",
    "Darla Hilll DDS",
    "Regina Murazik",
    "Camille Kshlerin",
    "Shannon Rice",
    "Howard Cole",
    "Elmer Littel",
    "Heather Brown",
    "Dr. Dominick Davis",
    "Max Bergstrom",
    "Guadalupe Cremin",
    "Ms. Darla Runte",
    "Nelson Jenkins",
    "Nancy McLaughlin",
    "Grace Blanda",
    "Cornelius Stiedemann",
    "Rhonda Kerluke",
    "Valerie D'Amore",
    "Jack Bartoletti",
    "Allison Barton",
    "Elijah Nolan",
    "Alberto Schaefer",
    "Mrs. Hazel Hickle",
    "Martin Wehner",
    "Melissa Padberg",
    "Sandy Effertz",
    "Ms. Christian Hodkiewicz",
    "Minnie Grady",
    "Natalie Wilderman",
    "Kristy Gaylord",
    "Erik Lind",
    "Dexter Wiza Sr.",
    "Joan Dach",
    "Misty Waters",
    "Joe Brown",
    "Lance West",
    "Judith Powlowski",
    "Sharon Will",
    "Jeannie Glover",
    "Sandra Brekke",
    "Gina O'Connell",
    "Derek Simonis",
    "Alicia Buckridge",
    "Ms. Rodney Dooley",
    "Olive Batz"
    ]
  
  
  
  function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle
      while (currentIndex != 0) {
    
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // Swap it with the current element
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    
    shuffle(list);
    // create the variable for the arrays in a group
    let perChunk = 2  
    
    // as per the group, assign two indexes to a single array
    let result = list.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/perChunk)
    
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }
    
      resultArray[chunkIndex].push(item)
    
      return resultArray
    }, [])
    
    console.log({
    'group 01': result[0],
    'group 02': result[1],
    'group 03': result[2],
    'group 04': result[3],
    'group 05': result[4],
    'group 06': result[5],
    'group 07': result[6],
    'group 08': result[7],
    'group 09': result[8],
    'group 10': result[9],
    'group 11': result[10],
    'group 12': result[11],
    'group 13': result[12],
    'group 14': result[13],
    'group 15': result[14],
    'group 16': result[15],
    'group 17': result[16],
    'group 18': result[17],
    'group 19': result[18],
    'group 20': result[19],
    'group 21': result[20],
    'group 22': result[21],
    'group 23': result[22],
    'group 24': result[23],
    'group 25': result[24]
    }
    );
     
  
  
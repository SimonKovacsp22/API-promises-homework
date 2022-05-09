   
    function findUnique(array) {
        let count = 0
        let uniqueness = 0
        for (let index = 0; index < array.length; index++) {
            for (let j= 0; j < array.length; index++) {
                if(array[index] === array[j])
                uniqueness++;
                
            }
            if(uniqueness < 2){
                count++
            }
            uniqueness = 0
            
        }
        console.log(count)
    }

    findUnique([1,3,5,4,1,2,5,6])
    console.log('5')
    
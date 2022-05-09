console.log('5')
    function findUnique(array) {
        let count = 0
        let uniqueness = 0
        for (let index = 0; index < array.length; index++) {
            for (let j= 0; j < array.length; j++) {
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

    findUnique([1,3,5,4,1,2,5,6,12,333,444])
    console.log('5')
    
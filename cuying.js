function sum(a){ 

    return function(b){ 

        return function(c){ 

            return function(d=0){ 
               
                /**
                 * a=> 1
                 * b=> 2
                 * c=> 3
                 * d=> 0
                 * returning the final is 6
                 */
                return a + b + c + d 
            } 
        } 
    } 
} 

console.log(sum(1)(2)(3)())// console log will display 6

// What's the output from the code above?

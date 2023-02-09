function startIndex(array, key){    
    let start = 0    
    let end = array.length - 1    
    let result        
    while (start <= end){        
        let middle = Math.floor((start + end) / 2)        
        if (array[middle] == key){ 
            result = middle           
            if (array[start] < array[middle]){
                end = middle - 1
                start++                           
            }else if(array[middle] == array[end]){
                end--
            }else if(array[start] == key){
                result = start
                return result
            }     
        } else if (array[middle] < key){            
            start = middle + 1        
        } else if (array[middle] > key){            
            end = middle - 1      
        }    
    }    
    return result
}

function endIndex(array, key){    
    let start = 0    
    let end = array.length - 1    
    let result        
    while (start <= end){        
        let middle = Math.floor((start + end) / 2)        
        if (array[middle] == key){ 
            result = middle           
            if (array[start] < array[middle]){
                start = middle + 1                           
            }else if(array[middle] == array[start]){
                start++
            }else if(array[end] == key){
                result = end
                return result
            }     
        } else if (array[middle] < key){            
            start = middle + 1        
        } else if (array[middle] > key){            
            end = middle - 1      
        }    
    }    
    return result
}

let array = [0,1,1,1,1,1,4,5,5,5,6]
let index = 1
console.log(startIndex(array, index)+ '-'+ endIndex(array,index))
function startIndex(array, key){    
    let start = 0    
    let end = array.length - 1    
    let result    
    let check    
    while (start <= end){        
        let middle = Math.floor((start + end) / 2)        
        if (array[middle] == key){            
            result = middle            
            if (check >= array[array.length-1]){                
                return result            
            }else if (array[middle] < key){                
                start = middle + 1                
                check++            
            }else{                
                end = middle - 1                
                check++            
            }        
        } else if (check >= array[array.length-1]){            
            return result        
        } else if (array[middle] < key){            
            start = middle + 1            
            check++        
        } else{            
            end = middle - 1            
            check++        
        }    
    }    
    return result
}

function endIndex(array, key){    
    let start = 0    
    let end = array.length - 1    
    let result    
    let check    
    while (start <= end){        
        let middle = Math.floor((start + end) / 2)        
        if (array[middle] == key){            
            result = middle            
            if (check >= array[array.length-1]){                
                return result            
            }else if (array[middle] < key){                
                start = middle + 1                
                check++            
            }else{                
                start = middle + 1                
                check++            
            }        
        } else if (check >= array[array.length-1]){            
            return result        
        } else if (array[middle] < key){            
            start = middle + 1            
            check++        
        } else{            
            start = middle + 1            
            check++        
        }    
    }    
    return result
}


let array = [1,1,1,1,1,4,5,5,5]
let index = 5
console.log(startIndex(array, index),'-',endIndex(array,index))
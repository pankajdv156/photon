/**
 * @author; Pankaj
 * @description: Array should be in proper manner
 * Flatten following array without using array.flat 
[1,2,[3,4], [5, [6, 7,[8,[9]]]]] into -> [1,2,3,4,5,6,7,8,9]
 */

const input =[1,2,[3,4], [5, [6, 7,[8,[9]]]]];
const arrayElent= [];
const iterationOfElement= (array)=>{

    for(let i=0 ; i< array.length; i++){
        if(!Array.isArray(array[i])){
            arrayElent.push(array[i]);
        }else{
            iterationOfElement(array[i]);
        }
    }
    return arrayElent;
}
const arrayList=  input.reduce(function(arr, curr){
   if(!Array.isArray(curr)){
    arr.push(curr);
   }else{
    const iterArray = iterationOfElement(curr);
    arr = [...arr,...iterArray ];
   }
   return arr;
},[])

 const unique= new Set([...arrayList])
console.log('======arrayList', unique);// ======arrayList Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
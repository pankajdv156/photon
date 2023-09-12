 /**
  * @author : Pankaj
  * @description: Creating an array object with unique name
  */
 const usersData= [
    {
        name:'Pankaj',
        age: 28
    },
    {
        name:'Sam',
        age: 24
    },
    {
        name:'Jhon',
        age: 20
    },
    {
        name:'Tim',
        age: 9
    }
 ]

 function main() { 

    try { 
   
      const name =  getName(); 
   
       console.log(`Hello ${name}!`); 
   
       const age =  getAge(name); 
   
       const drink = age < 10 ? "milk" : "coke"; 
   
       console.log(`Have a ${drink}.`); 
   
       const child = age < 10; 
   
       return child; 
   
     } catch (e) { 
   
       console.log('Error') 
     } 
     return null;     
   } 
   
   /**
    * Writting a new function for get name
    * @author : Pankaj
    */

   function getName(){
    try {
        const userName= usersData[0].name;
        return userName;
    } catch (error) {
        console.log('====Error', error);
        throw error;
    }
   }

   /**
    * @author : Pankaj
    *  @description: creating function definition for get age of user
    */

   function getAge(name){
try {
    const user= usersData.filter(function(res){
        return res.name==name;
    });
    const age = user[0].age;
    return age;
} catch (error) {
    console.log('======Error', error);
    throw error;
}
   }

   console.log('======Main function', main())
   //Rewrite above function without using async await!"
   
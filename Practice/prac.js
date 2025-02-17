// function vowel(fullName) {
//     let count = 0
//     for(let char of fullName){
//         if(char =="a" ||char =="e" ||char =="i" ||char =="o" ||char =="u" ){
//             count++
//         }
//     }  
//     console.log(count); 
// } 
// vowel("trushit")


// let vowel = (fullName) =>{
//     let count =0 
//     for(let i of fullName){
//         if (i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             count ++
//         }
//     }console.log(count);
// } 
// vowel("trushit")


// let city=["pune","rajkot","delhi"]


// city.forEach((val,ind,city)=>{
//     console.log(val.toUpperCase( ),ind,city)
// })


// For Each loop 
// let square=[1,2,3,4,5,6]

// square.forEach((n)=>{
//     console.log(n*n);
// })


//Map Method
// square.map((val ,ind ,square)=>{
//     console.log(val*2 , ind ,square);
// })



// FilterMethod 
// let newArr=square.filter((val) =>{
//     return val %2===0
// });
// console.log(newArr);



// reduse method 

// let output =square.reduce((prev,current)=>{
//     return prev * current
// })
// console.log(output);
 
// find the largest number from array using redusing 

// let num=[14,9,90,65,856]

// let max = num.reduce((prev,current)=>{
//     return prev > current ? prev : current
// })
// console.log(max);



// Q1  
// let marks = [90,56,86,91,99,89,67,93,50,10]
// let topper = marks.filter((val)=>{
//     return val>90
// })
// console.log(topper);

//Q2 
// let num = prompt("Enter a Number")
// let arr=[]
// for (let i=0;i<num ;i++){
//     arr[i] = i+1
// }
// console.log(arr);
 
// let sum = arr.reduce ((prev,current)=>{
//     return prev+current
// })
// console.log(sum)
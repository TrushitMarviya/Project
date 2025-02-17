// for of loop 

// let name="helloworld"
// for(let i of name){
//     console.log(i)
// }


// for in loop
// let student={
//     name : "trushit" ,
//     age : 20 ,
//     cource:"Full-Stack" , 
// }
// for (let i in student){
//     console.log(i , student[i])
// }




//  Templete Literals
// let sentence =`This is Templete Litrirals`
// console.log(typeof sentence)
// let obj={
//     item :"pen",
//     cost :10,
// };
// console.log("the cost of" ,obj.item,"is" ,obj.cost,"rupees")
// let op=`the cost of ${obj.item} is ${obj.cost} rupees`
// console.log(op)



// let str= "      trushit marviya     "
// console.log(str.toUpperCase())
// console.log(str.trim()) // use to starting or ending extra space remove 
// let str2= "TRUSHIT MARVIYA"
// console.log(str2.toLowerCase())



// let str = "01234567"
// console.log(str.slice(1,6))
// let str2 ="trushitmarviya"
// console.log(str2.slice(0,7))



// let str ="Trushit"
// let str2="Marviya"
// console.log(str.concat(str2))



// let str="hello"
// console.log(str.replace("hello","trushit"))



// let str = "Trushit"
// console.log(str.charAt(0))

// let fullName=prompt("Enter your name without space ")
// console.log("@" + fullName + fullName.length)



// let heros =["ironman","hulk","thor","thenos","gamora","natasha","vakanda"]
// console.log(heros)
// console.log(heros.length)

// for(let i=0; i<heros.length;i++){
//     console.log(heros[i])
// }


// for (let hero of heros){
//     console.log(hero)
// }

// let  mark =[10,20,30,40,50,60,70,80,90,100]
// let sum=0 
// for(let i =0 ; i<mark.length ; i++){
//     sum = sum + mark[i]
// }
// console.log(sum / mark.length)


// let marks = [ 250 , 645 , 300 , 900 , 45 ]

// for ( let i = 0 ; i < marks.length ; i++){
//     let offer = marks[i]/10
//     marks[i]-=offer 
// }
// console.log(marks)


// let foodItem = [ "potato" ,"apple" , "litchi" , "tomato" ]
// console.log(foodItem)
// foodItem.push("burger" , "paneer")
// console.log(foodItem)
// let deletedItem= foodItem.pop()
// console.log(foodItem)
// console.log(deletedItem )
// console.log(foodItem)
// console.log(foodItem.toString())

// let marvel_hero=["ironman" , "spiderman" , "thor"]
// let dc_heros = ["superman" , "batman"]

// console.log(marvel_hero .concat(dc_heros))
// marvel_hero.unshift("antman")
// console.log(marvel_hero)


//splice

// let arr =[1,2,3,4,5,6,7]
// arr.splice(3,2,101,102,103)
// console.log(arr)
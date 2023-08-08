const users = {
    Alex: {//sub obj1 لمستخدم اسمه اليكس
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    Asab: {//sub obj2 لمستخدم اخر
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    Brook: {//sub obj3 لمستخدم اخر
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    Daniel: {//sub obj لمستخدم اخر 4
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    John: {//sub obj لمستخدم اخر5
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    Thomas: {//sub obj لمستخدم اخر6
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    Paul: {//sub obj لمستخدم اخر7
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  };

  //task1:
function findmaxskills(users)
{let a=[];//array to Store the number of skills for each  person(key)
let b=[];//array to Store name of each  person(key) 
let i=0;//counter
for(const key in  users )
{  
  a[i]=users[key].skills.length    //array to Store the number of skills for each  person(key)
  b[i]=key //array to Store name of person(key) For each element added to the first array
  i=i+1//counter
 }
const max =Math.max(...a) //To find the largest number of skills 
const index=[] //array to Store the index of  largest number of skills 

for(let i=0;i<a.length;i++){//to find the indexes of largest number of skills
  if (a[i]===max){index.push(i)}
}
for(let j=0;j< index.length;j++){//to print the name of person (key) have largest number of skills from array of name
  console.log(`the name of person have largest number of skills: ${b[index[j]]}`)

}
}

//task2:
function findnum(users){
    let i=0
    let j=0
    for(const key in  users )
    {  
    if (users[key].isLoggedIn)
    {i=i+1}
    if (users[key].points >=50)
    {j=j+1}
     }
     console.log(`the number of logged-in users=${i}`)  
     console.log(`users with points greater than or equal to 50=${j}`)  
     }
     

     //task3:
 function findMERN(users){
     for(const key in  users )
     { if(users[key].skills.includes('MongoDB',"Express","React","Node"))
     {
       console.log(`${key} ,are MERN stack developers`) }
     }
    }
   

    //task4:
   function findmern(users) {
  let m=[]
  for(const dev in  users )
  {m[m.length]=dev}

let s=m.filter((user)=>{
  const al=['MongoDB',"Express","React","Node"]
  return al.every((skill)=>users[user].skills.includes(skill))
})

  console.log(s);}


      


  

    //task5:
 function addnewuser(users){
    users.yara={email:"yararab@gmail.com",skills:["html","css","js"],age:20,isLoggedIn:true,points:90}
    console.log( users)
    }
  

    //task6:
function printKeys(users)
   { for(const key in  users )
    { console.log( key)

    }
}


   //task7:
 function printValues(users)
   { for(const key in  users )
    { console.log( users[key])

    }
}


//try output :

console.log('task 1:')
console.log("-Find the person with the most skills ?")
findmaxskills(users)
console.log('.....................................................................................')
console.log('task 2:')
console.log("-Count the number of logged-in users and users with points greater than or equal to 50 ?")
findnum(users)
console.log('.....................................................................................')
console.log('task 3:')
console.log("-Find and print the names of people who are MERN stack developers from the users object ?")
findMERN(users)
console.log('.....................................................................................')
console.log('task 4:')
console.log()
findmern(users)
console.log('.....................................................................................')
console.log('task 5:')
console.log("-Print the updated users object with your name added ?")
addnewuser(users)
console.log('.....................................................................................')
console.log('task 6:')
console.log("-Get all the keys or properties of the users object and print them ?")
printKeys(users)
console.log('.....................................................................................')
console.log('task 7:')
console.log(" -Get all the values of the users object and print them ?")
printValues(users)
console.log('......................................[DONE-YARA JEHAD]...............................................')

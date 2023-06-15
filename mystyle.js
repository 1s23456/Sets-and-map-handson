

// //Q1--
var a ="abcadeecfb"
 let b = new Set(a)
 b=[...b]         
let c=b.join('')  //Array to String

 console.log(c);




 
//Q2:---
 let str="abcadeecfb"

function countAlphabet(str){
              const alphabetCount=new Map()
              for(let char of str){
                            if(alphabetCount.has(char))
                            alphabetCount.set(char,alphabetCount.get(char)+1)
              else{
                            alphabetCount.set(char,1)
              }
}
for(let [char,count]of alphabetCount){
              console.log(`${char}=${count}`);
}          
}
countAlphabet(str)
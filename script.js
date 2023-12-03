// Good Luck 💪🏾
function count(letter,word){
    let noOfletters=0
    for(let i=0; i<word.length;i++){
        
        if(letter === word[i]){

            noOfletters ++
            
        }
    }
   
    return noOfletters
}
let countResult1=count("a", "fikrcamp")
let countResult2=count("c", "bootcamp")
let countResult3=count("o", "fikrcamp coding bootcamp")
console.log(countResult1)
console.log(countResult2)
console.log(countResult3)
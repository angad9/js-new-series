const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach ((item) => {
//     console.log(item);
// })

// function ptintMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item , index, arr) =>{
    console.log(item, index, arr) ;
})

const myCoding = [
    {
        languageName: "jabascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]

myCoding.forEach((item) =>{
    
    console.log(item.languageName);
})

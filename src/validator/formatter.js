const trim = function(){
    const string1="  function Up  "
     const result= string1.trim()
     console.log(result)
}

const changetoLowerCase= function(){
    const string2="fUNcTionUP"
    const result=string2.toLowerCase();
    console.log(result)
}

const changetoUpperCase=function(){
    const string3="functionup"
    const result=string3.toUpperCase();
    console.log(result)

}

module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase
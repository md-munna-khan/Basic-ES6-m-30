//  if value is not provided , take this as a default
function add(num1 = 20,num2 = 5){
    const result = num1 + num2;
    console.log(num1,num2,result)
    return result
}
// const sum = add(3,3)
// const sum = add(5)
const sum = add()

function fullName (first,last = ''){
    const full = first + ' ' + last;
    return full
}
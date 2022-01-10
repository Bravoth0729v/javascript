// num1 = 7
// num2 = 6
// mul = num1*num2
// console.log("Multiplication is: ",mul)
// var answer = num1 > num2
// console.log(answer)

var actualprice = 799
var sellingprice = 199
console.log("actualprice is: "+ actualprice)
console.log("Sellingprice is: "+ sellingprice)
discountPercent = ((actualprice-sellingprice)/actualprice)*100
displaydiscountpersentage = Math.round(discountPercent)
console.log(displaydiscountpersentage+"% off")

var answer = actualprice > sellingprice
console.log(answer)
console.log("The Type Of answer Is: ",typeof answer)

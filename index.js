var isHotOutside = true
var isWeekday = true 
var hasMoneyInPocket = false 

var costOfMilk = 3 
var moneyInWallet =11
var thirstLevel = 4

var shouldBuyIcecream = isHotOutside && hasMoneyInPocket 
var willGoSwimming = isHotOutside && isWeekday == false
var isAGoodDay = isHotOutside && hasMoneyInPocket && isWeekday == false
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= costOfMilk * 2

if (shouldBuyIcecream == true) {
    console.log ( ' Yes, I should buy icecream.') ;
} else {
    console.log ('No, I should not buy icecream.') ;
}

if (willGoSwimming == true) {
    console.log ('Yes, I will go swimming.') ;
} else {
    console.log ('No, I will not go swimming.') ;
}

if (isAGoodDay == true) {
    console.log ('It is a good day.') ;
} else { 
    console.log ('It is not a good day.') ;
}

if (willBuyMilk == true) {
    console.log ('Yes, I will buy milk.') ;
} else { 
    console.log ('No, I will not buy milk.') ;
}
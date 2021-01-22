// https://github.com/Wild-Hound/project3

function kilometerToMeter(distance){
    meter = distance * 1000;
    return meter;
}

function budgetCalculator(watch, phone, laptop){
    watchPrice = 50;
    phonePrice = 100;
    laptopPrice = 500;

    totalCost = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    return totalCost;
}

function hotelCost(duration){
    
    bill = 0;
    bookOut = 1;
    while(bookOut != (duration + 1)){
        if(bookOut <= 10){
            bill += 100;
        }else if(bookOut >= 11 && bookOut < 21){
            bill += 80;
        }else if(bookOut >= 21){
            bill += 50;
        }
        bookOut++;
    }
    return bill;
}

function megaFriend(names){
    var largestName;
    var nameSize = 0;
    names.forEach(function(name){
        if(name.length > nameSize){
            largestName = name
        }
    })
    return largestName;
}
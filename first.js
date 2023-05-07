// let firstName='john';
// console.log(firstName);
// let lastName = 'Smith';
// console.log(lastName);
// let age = 28;
// console.log(firstName + ' ' + lastName);

// let job = 'teacher';
// console.log(job);

// let now = 2018;
// let yearJohn = 1989;
// let fullAge = 18;

// let isFullAge = (now - yearJohn) >= fullAge;
// console.log(isFullAge)

// let massMark = 78; //kg
// let massJohn = 92;
// let markHeight = 1.69; //meters
// let johnHeight = 1.95;

// let BmiMark = massMark / (markHeight*markHeight);
// console.log(BmiMark);
// let BmiJohn = massJohn / (johnHeight*johnHeight);
// console.log(BmiJohn);
// let BmiMarkHigher = BmiMark > BmiJohn;
// console.log(BmiMarkHigher);
// console.log(`The Bmi of mark is ${BmiMark} is higher than Bmi of John is ${BmiJohn}`);

// let firstName = 'john';
// let civilStatus = 'single';
// if(civilStatus == 'married'){
//     console.log('you are maried .');
// }else{
//     console.log(firstName + ' will hopefully marry soon .')
// }

// let isMarried = true;
// if(isMarried){
//     console.log(firstName + ' is married .');
// }else{
//     console.log(firstName + ' will hopefully marry soon .');
// }

//Boolean logic
// let firstname = 'john';
// let age = 26;
// if(age<13){
//     console.log(firstname + ' is a boy');
// }else if(age>=13 && age<20){
//     console.log(firstname + ' is a teenager');
// }else if(age>=20 && age<30){
//     console.log(firstname + ' is a young man');
// }
// else{
//     console.log(firstname + ' is a man')
// }
//ternary operator
// let age;
// let drink = age >=18 ? 'beer':'coka';
// console.log(drink)

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }
// let ageJohn = calculateAge(1990);
// let ageMike = calculateAge(1980);
// let ageJane = calculateAge(1970);
// console.log(ageJohn,ageMike,ageJane);

// function yearUntilRetirement(birthYear,firstName){
// let age = calculateAge(birthYear);
// let retirement = 65 - age;
// if(retirement > 0){
//     console.log(firstName + ' retires in ' + retirement + ' years');
// }else{
//     console.log(firstName + 'are already retired.');
// }
// }
// yearUntilRetirement(1990,'John');
// yearUntilRetirement(1980,'Mike');
// yearUntilRetirement(1970,'Jane');

// let names = ['John','Mark','Jane']
// let years = new Array(1990,1969,1948);
// console.log(names[2]);
// console.log(names.length);

// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// function tipCalculator(bill){
//     let percentage;
//     if(bill<50){
//         percentage=.2;
//     }else if(bill>=50 && bill <200){
//         percentage=.15;
//     }else{
//         percentage=.1;
//     }
//     return percentage*bill;
// }

// let bills = [124,48,268];
// let tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
// let finalValues = [bills[0] +tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(finalValues)
// console.log(tips)

//objects and properties

// let john = {
//     firstname :'john',
//     lastname: 'smith',
//     birthYear : 1990,
//     familly: ['jane','mark','bob','emily'],
//     job:'teacher',
//     isMaried : false,
//     calcAge:function(birthYear){
//         return 2018 - birthYear;
//     }
// }
// console.log(john.calcAge(1990))
// console.log(john.firstname);
// console.log(john.familly)

//object method
let john ={
    fulName: 'John Smith',
    mass: 90,
    height: 1.95,
    calcBmi:function(){
        this.Bmi = this.mass /(this.height*this.height);
        return this.Bmi
    }
    
}
let mark ={
    fulName: 'Mark Sagbo',
    mass: 90,
    height: 1.75,
    calcBmi:function(){
        this.Bmi = this.mass /(this.height*this.height);
        return this.Bmi
    }
    
}
console.log(john,mark);
console.log(john.calcBmi());
console.log(mark.calcBmi());
// Chap 31 to 34

// Task 1


// var date = new Date();
// document.write(date)


// Task 2

// var Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = Months[theMonth]

// document.write("Current Month: "+nameOfMonth)


// Task 3


// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var now = new Date();
// var theDay = now.getDay();
// var nameOfDay = dayNames[theDay];

// document.write(nameOfDay)


// Task 4


// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var now = new Date();
// var theDay = now.getDay();
// var nameOfDay = dayNames[theDay];


// switch (nameOfDay){
//     case "Sat":
//         alert ("It’s Fun day");
//         break;
//     case "Sun":
//         alert ("It’s Fun day");
//         break;
//     default:
//         alert ("Shoot me now!");
// }


// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var now = new Date();
// var theDay = now.getDay()
// var nameOfDay = dayNames[theDay];

// if(nameOfDay === "Sat" || nameOfDay === "Tue" ){
//     alert("It's Fun day")
// }
// else{
//     alert("it's tough")
// }


// Task 5



// var fullDate = new Date();
// var todayDate = fullDate.getDate();

// if(todayDate> "16"){
// document.write("Last fifteen days of month")
// }
// else{
//     document.write("First Fifteen days of month")
// }


// Task 6


// var currentDate = new Date();
// var time70 = currentDate.getTime ()
// var min70 = time70/(1000*60)
// var hour70 = min70/(60)
// var day70 = hour70/(24)
// var month70 = day70/(30)
// var year70 = month70/(12)


// document.write("Current Date: " +"<b>"+  currentDate +"</b>"+ "<br>")

// document.write("Elapsed milliseconds since Jan 1, 1970: " + "<b>"+ time70 + "</b>"+ "<br>")

// document.write("Elapsed Minutes since Jan 1, 1970: " + "<b>"+ min70 + "</b>"+ "<br>")

// document.write("Elapsed Hours since Jan 1, 1970: " + "<b>"+ hour70 + "</b>"+ "<br>")

// document.write("Elapsed Days since Jan 1, 1970: " + "<b>"+ day70 + "</b>"+ "<br>")

// document.write("Elapsed Months since Jan 1, 1970: " + "<b>"+ month70 + "</b>"+ "<br>")

// document.write("Elapsed Years since Jan 1, 1970: " + "<b>"+ year70 + "</b>"+ "<br>")


// Task 7


// var fullDate = new Date();
// var todayHours = fullDate.getHours();

// if(todayHours<12){
// document.write("It is Pm "  )
// }
// else{
//     document.write("It is Am :")
// }


// Task 8


// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)


// Task 9

// var StartingRamadan = new Date("June 18, 2015")
// var now = new Date();

// var diff = now - StartingRamadan
// ddiff = diff/(1000*60*60*24)
// ddiff = Math.floor(ddiff)
// document.write(ddiff + " Days have passed since 1st Ramadan 2015 'Jun 18, 2015' ")



// Task 10

// var yearStart =  new Date("Jan 1, 2020")
// var now = new Date()

// var diff = now - yearStart
// diff = diff/1000
// diff = Math.floor(diff)

// document.write("Our Refrence Date: "+ yearStart+ "<br>"+ diff + " Seconds had passed since beginning of Jan 1, 2020")



// Taskk 11


// var now = new Date()
// var d = new Date();
// d.setHours(-1);

// document.write("Current date: "+ now + "<br>"+ "1 hour ago, it was: "+ d)



// Task 12


// var now = new Date()
// var yearback = new Date();
// yearback.setFullYear(1920);

// document.write("Current date: "+ now + "<br>"+ "100 years ago, it was: "+ yearback)


// Task 13

// var userYear = prompt("Enter your Birth year ","Jan 1, 1970")
// var birthYear = new Date(userYear)

// var now = new Date()

// var msbirthyear = birthYear.getTime();
// var msnow = now.getTime();

// var msDiff = msnow-msbirthyear;
// var ydiff = msDiff/(1000*60*60*24*30*12)
// ydiff = Math.floor(ydiff)

// document.write("Your Age is: " + ydiff)


// Another Method 

// var birthYear = new Date("Apr 12, 1995")
// var now = new Date()

// var msbirthyear = birthYear.getTime();
// var msnow = now.getTime();

// var msDiff = msnow-msbirthyear;
// var ydiff = msDiff/(1000*60*60*24*30*12)
// ydiff = Math.floor(ydiff)

// document.write("Your Age is: " + ydiff)



// Another Method 

// var today = new Date();
// var doomsday = new Date("Dec 31, 2020");

// var msToday = today.getTime(); 
// var msDoomsday = doomsday.getTime();

// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);

// dDiff = Math.floor(dDiff);

// document.write(dDiff)



// Task 14



// var Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var now = new Date();
// var TheMonth = now.getMonth()
// var NameofMonth = Months[TheMonth]

// var userName = prompt("Enter your Name ")
// var CurrentMonth = NameofMonth
// var Units = prompt("Enter your Units")
// var unitCharges = 16
// var lateCharges = 350;
// var onDate = (Units*unitCharges)
// var dueDate = (Units*unitCharges)+350

// document.write("Costumer Name: " +"<b>"+ userName +"</b>"+ "<br>")
// document.write("Month: " +"<b>"+ CurrentMonth +"</b>"+ "<br>")
// document.write("Number of Units: " +"<b>"+ Units +"</b>"+ "<br>")
// document.write("Charges per unit: " +"<b>"+ unitCharges +"</b>"+ "<br>")
// document.write("<br>")
// document.write("Net Amount Payable (Within Due Date): "+"<b>"+ onDate  +"</b>"+ "<br>")
// document.write("Late Payment Surcharges: " +"<b>" + lateCharges +"</b>"+ "<br>")
// document.write("Gross Amount Payable (After Due Date): "+"<b>"+ dueDate  +"</b>"+ "<br>")


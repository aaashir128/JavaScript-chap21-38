// Task 1


// var firstName = prompt("Enter Your first name");
// var lastName = prompt("Enter Your Last name");

// var fullName = firstName +" "+ lastName ;

// alert(" Hello! " + fullName )


// Task 2


// var mobile = prompt("What is your favorite mobile ? ","Samsung , Apple , Huawei");
// var strLength = mobile.indexOf()
// alert (strLength)


// Task 3

// var favMobile = prompt("What is your Favorite mobile? ","Apple, Samsung 's6', Huawei")
// document.write ("My favorite phone is: " + favMobile + "<br>" + "Length of string is : "+ favMobile.length)


// Task 4


// var country = ("Pakistani");
// var n = country.indexOf("n")
// document.write ("String: " + country + "<br>" +"Index of 'n' is: " +n)


// Task 5


// var grt = "Hello World!"
// var lastindex = grt.lastIndexOf("l");
// document.write ("String: "+ grt + "<br>"+ "Last index of 'l' is: " + lastindex)


// Task 6


// var country = ("Pakistani");
// var n = country.charAt(3)
// document.write ("String: " + country + "<br>" +"Character at index '3rd' is: " +n)


// Task 7



// var city = "Hyderabad";
// for (var i =0; i<city.length; i++){
//     if(city.slice(i, i+5) ==="Hyder"){
//         city = city.slice(0, i ) + "Faisal" + city.slice(i + 5)
//     }
// }
// document.write(city)

        // Another Method 

// var city = "Hyderabad is a Capital of Pakistan , And Hyderabad is a greenist city of Pakistan";
// city = city.replace(/Hyder/g,"Islam");
// document.write (city)



// Task 8


// var message = "Ali and Sami are best friends. They play cricket and football together."; 

// for (var i=0; i < message.length; i++){
//     if(message.slice(i,i+3) === "and"){
//         message = message.slice(0,i)+"&"+ message.slice(i+3)
//     }
// }
// document.write(message)


// Task 9 


// var str = ("472");
// var int = parseInt(str);

// document.write ("This is String: " + str +"<br>" +"And this is Integir: "+ int + "<br>")


// Task 10


// var userInp = prompt("What do you want to Capitalize ?")
// var cap = userInp.toUpperCase()
// document.write ("You mean this ?: "+ cap)


// Task 11

// var norm = ("javascript");
// var capit = norm.slice(0,1)
// var sm = norm.slice(1)
// capit = capit.toUpperCase()
// sm = sm.toLowerCase()
// capitalize = capit + sm
// document.write (capitalize)


// Task 12


// var num = 35.36;
// var str = num.toString();
// str = str.replace(".","")
// document.write(str)


// Task 13


// Task 14

// var items = ["Cake","Apple pie","Cookies","Chips","Pastery"];
// var search = prompt("What do want to eat? ")
// firstChar = search.slice(0,1);
// otherChar = search.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// search = firstChar + otherChar ;

// for(var i =0; i<items.length; i++){
// if(items.indexOf(search) !== -1){
//     document.write(search + " is Available at Index " + items.indexOf(search))
//     break;
// }
// else{
//     document.write("we are sorry")
//     break
// }
// }






// task 16

// var university = "University of Karachi"; 
// arr = university.split("")
// for (var i =0; i<arr.length; i++)

// document.write (arr[i]+ "<br>" )


// task 17

// var userinput = prompt("enter something")
// userinput = userinput.charAt(userinput.length-1)
// document.write(userinput)






// var text = "The quick brown fox jumps over the lazy dog!"
// for (var i = 0; i < text.length; i++) { 
//  if (text.charAt(i) === "the") { 
//  alert("the found!");
//   break; }
//  }




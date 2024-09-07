// singleton 
//boject.create

// object literals 

const mySym = Symbol("Key1");

const Jsuser = {
    name: "Rajeev",
    "full name":"Rajeevkashyap",
    [mySym] : "myKey1",
    age: 25,
    location : "berielly",
    email: "raje@google,com",
    isLoggedin: false,
    lastLoggeinday: ["Monday" , "saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);


Jsuser.email = "rajwwvyuug@gsuyq.com";
// Object.freeze(Jsuser);
Jsuser.email = "hitesh@wghuywgsy";
// console.log(Jsuser.email);
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
  
}

Jsuser.greetingTow = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTow());



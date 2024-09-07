// const tinderUser = new Object(); // this is singleton object 
// const tinderUser2 = {}; // this is nonsingleton object 

const tinderUser = {};
tinderUser.id =  "1234"
tinderUser.name = "sammy"
tinderUser.isLoggeind = false;

// console.log(tinderUser);

const  regularUser = {
    name : "Mumatj",
    email: "mumtj123@gmail.com",
    fullname: {
        usersfulname: {
            firstname: "mumtaj",
            lastname: "Anasri"
        }
    }
}

// console.log(regularUser.fullname.usersfulname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}


const obj2= {
    3: "c",
    4: "d"
}


const obj4= {
    5: "c",
    6: "d"
}
// const obj3 = { obj1 , obj2};
// const obj3 = Object.assign({}, obj1 , obj2, obj4);


const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "huygu@gmail.com"
    },
     user2 = 
        {
            id: 1,
            email: "huygu@gmail.com"
        },
        user3 = 
            {
                id: 1,
                email: "huygu@gmail.com"
            }
];

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));


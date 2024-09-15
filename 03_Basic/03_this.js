const user = {
    username: "rajeev",
    price: 999,

    wellcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}


// user.wellcomeMessage()
// user.username = "sem"
// user.wellcomeMessage()
console.log(this);

// function chai(){
//     let username = "rajeev"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "rajeev";
//     console.log(this.username);
// }

// chai()

const chai =  () =>{
    let username = "rajeev";
    console.log(this);
}

// chai()








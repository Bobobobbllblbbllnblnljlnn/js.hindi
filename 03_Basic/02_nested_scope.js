
// **********NestedScope********
function one(){
    const username = "rajeev";

    function tow(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); Aree 
    tow()
}

one()

if(true){
    const username = "hetiseh";
    if(username === "hetiseh"){
        const website = " youtbue"
        console.log(username + website );
       
    }
    // console.log(website);   Arrar

    console.log(username);

}
//  console.log(username); Arrar

//  ************ interesting ****** 

 console.log(addone(5))
function addone(num){
    return num + 1;
}



const addTwo = function(num){
    return num + 2 
}
addTwo(5);


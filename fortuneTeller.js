const numberOfChildern = prompt("How many childern do want ?");
let partName ;
let geographicLocation = "Korea";
let jobTitle = "Webdeveloper";

function fortuneTeller(){
if (numberOfChildern > "0"){
    partName = prompt ("Your partner's name ...");
    console.log(`You will have ${numberOfChildern} chidren.`);
}
    else if(geographicLocation == "string")
        jobTitle = prompt("What is your dream job?")
    
    else("Your result cant excuted.")

    let output = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partName}
                    with ${numberOfChildern}.`;

     console.log(output);
};
fortuneTeller();
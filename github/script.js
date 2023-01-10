import fetch from "node-fetch";

function feedingData(data){
    data.map((data1)=>{
        console.log(`Repository Name : ${data1.name}\nRepository URL : ${data1.html_url}\nRepository Stars : ${data1.stargazers_count}\nRepository Description : ${data1.description}\nForks Count : ${data1.forks_count}\nOpen Issue : ${data1.open_issues_count}\n\n`)
    })
}
async function getResponse(feedingData){ 
    const data = await fetch("https://api.github.com/users/freeCodeCamp/repos");
    try{
    let response = await data.json();
    feedingData(response);
    }catch(err){
        console.log("Error : ",err);    
    }
}

getResponse(feedingData);

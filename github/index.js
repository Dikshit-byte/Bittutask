import fetch from "node-fetch";

function feedingData(data){
    // console.log(`Repository Name : ${data[0].name}\nRepository URL : ${data[0].html_url}\nRepository Stars : ${data[0].stargazers_count}\nRepository Description : ${data[0].description}\nForks Count : ${data[0].forks_count}\nOpen Issue : ${data[0].open_issues_count}`) 
    data.map((id,data1)=>{
        console.log(`Repository ID: ${id}\nRepository Name : ${data1.name}\nRepository URL : ${data1.html_url}\nRepository Stars : ${data1.stargazers_count}\nRepository Description : ${data1.description}\nForks Count : ${data1.forks_count}\nOpen Issue : ${data1.open_issues_count}`)
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

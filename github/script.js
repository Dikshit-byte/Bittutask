import fetch from "node-fetch";
async function getResponse(feedingData) {
    const data = await fetch("https://api.github.com/users/dikshit-byte/repos");
    try {
        let response = await data.json();
        feedingData(response);
    } catch (err) {
        console.log("Error : ", err);
    }
}
function feedingData(data) {
    data.map((data1)=>{
        console.log(`Repository Name : ${data1.name}\nRepository URL : ${data1.html_url}\nRepository Stars : ${data1.stargazers_count}\nRepository Description : ${data1.description}\nForks Count : ${data1.forks_count}\nOpen Issue : ${data1.open_issues_count}\n\n`)
        getCommit(data1.name);
    })
}

async function getCommit(repo_name) {
    const commitData = await fetch(`https://api.github.com/repos/dikshit-byte/${repo_name}/commits`);
    try {
        let response = await commitData.json();
        feedCommit(response);
    } catch (err) {
        console.log("Error : ", err);
    }
}

function feedCommit(repo_commit) {
    // console.log("Commit is : " + repo_commit[0]);
    repo_commit.map((data)=>{
        console.log(`Repository last_commit_sha : ${data.sha}\nRepository last_commit_message : ${data.message}`)
    })
}
getResponse(feedingData);

document.addEventListener("DOMContentLoaded",function(){
    const searchButtom =document.getElementById("search-btn")
    const usernameInput = document.getElementById("user-input")
    const statsContainer=document.querySelector(".stats-container")
    const easyProgressCircle=document.querySelector(".easy-progress")
    const mediumProgressCircle=document.querySelector(".medium-progress")
    const hardProgressCircle=document.querySelector(".hard-progress")
    const easylevel=document.getElementById("easy-lebel")
    const mediumlevel=document.getElementById("medium-lebel")
    const hardlevel=document.getElementById("hard-lebel")
    const cardStatsContainer=document.querySelector(".stats-cards")
    
    //return true or false based on a regex
    function validateUsername(username){
        if(username.trim()===""){
            alert("username should not be empty")
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching =regex.test(username)
        if(!isMatching){
            alert("Invalid username")
        }
        return isMatching
    }
    async function fetchusernameDetails(username){
        try{
            searchButtom.textContent ="searching...."
            searchButtom.disabled=true
            // statsContainer.style.setProperty{"display"}
            statsContainer.style.visibility="none";

            // const response=await fetch(url)
            const proxyUrl='https://cors-anywhere.herokuapp.com/'
            const targetUrl='https://leetcode.com/graphql/';
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");
            const graphql = JSON.stringify({
                query:`
                    query userSessionProgress($username: String!) {
                        allQuestionsCount {
                            difficulty
                            count
                        }
                        matchedUser(username: $username) {
                            submitStats {
                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                                totalSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                            }
                        }
                    }
                `,variables: {username: `${username}`}
            });
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };
            const response = await fetch(proxyUrl + targetUrl, requestOptions);
            if(!response.ok){
                throw new Error("Unable to fetch the user details")
            }
            const parsedata= await response.json()
            console.log("Logging data: ",parsedata)
            displayUserData(parsedata)
        }
        catch(error){
            console.error("Error caught:", error);   
            statsContainer.innerHTML='<p>no data found</p>'
        }
        finally{
            searchButtom.textContent ="search"
            searchButtom.disabled=false

        }  
    }
    function updateProgress(solved, total, label,circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`
    );

    label.textContent = `${solved}/${total}`;
}
    function displayUserData(parsedata){
        const totalques=parsedata.data.allQuestionsCount[0].count
        const totalEasyques=parsedata.data.allQuestionsCount[1].count
        const totalMediumques=parsedata.data.allQuestionsCount[2].count
        const totalHardques=parsedata.data.allQuestionsCount[3].count
        const solvedTotal=parsedata.data.matchedUser.submitStats.acSubmissionNum[0].count
        const solvedTotalEasy=parsedata.data.matchedUser.submitStats.acSubmissionNum[1].count
        const solvedTotalMedium=parsedata.data.matchedUser.submitStats.acSubmissionNum[2].count
        const solvedTotalHard=parsedata.data.matchedUser.submitStats.acSubmissionNum[3].count
        updateProgress(solvedTotalEasy,totalEasyques,easylevel,easyProgressCircle)
        updateProgress(solvedTotalMedium,totalMediumques,mediumlevel,mediumProgressCircle)
        updateProgress(solvedTotalHard,totalHardques,hardlevel,hardProgressCircle)

        const cardData = [
            {label: "Overall Submission",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
            {label: "Overall Easy Submission",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
            {label: "Overall Medium Submission",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
            {label: "Overall Hard Submission",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[3].submissions},
            {label: "Easy Submission Rate",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[1].submissions? (parsedata.data.matchedUser.submitStats.acSubmissionNum[1].submissions /parsedata.data.matchedUser.submitStats.totalSubmissionNum[1].submissions * 100).toFixed(2) + "%": "0%"},
            {label: "Medium Submission Rate",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[2].submissions? (parsedata.data.matchedUser.submitStats.acSubmissionNum[2].submissions /parsedata.data.matchedUser.submitStats.totalSubmissionNum[2].submissions * 100).toFixed(2) + "%": "0%"},
            {label: "Hard Submission Rate",value: parsedata.data.matchedUser.submitStats.totalSubmissionNum[3].submissions? (parsedata.data.matchedUser.submitStats.acSubmissionNum[3].submissions /parsedata.data.matchedUser.submitStats.totalSubmissionNum[3].submissions * 100).toFixed(2) + "%": "0%"}
        ];

        cardStatsContainer.innerHTML = cardData.map(data => {
            return `
                <div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                </div>
            `;
        }).join("");
    }
    searchButtom.addEventListener('click', function (){
        const username =usernameInput.value
        console.log("loggin username: ", username)
        if(validateUsername(username)){
            fetchusernameDetails(username)
        }

    })
})
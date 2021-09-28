fetch ("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokesData=>{
    const jokeText = jokesData.attachments[0].text;
    const jokeElemet = document.getElementById("jokeText");
    jokeElemet.innerHTML = jokeText;
})
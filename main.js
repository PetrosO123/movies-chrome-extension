// const data = {
//     setup: "Why did the chicken cross the road?", 
//     punchline: "To get to the other side"
// }

function setupDisplay(data){
    return data.body[0].setup;
}
function punchlineDisplay(data){
    return data.body[0].punchline;
}

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c16dab1b08mshff85bc972f872b5p1d9ab5jsnd6f69632bd39',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
          }
    }
    const url= 'https://dad-jokes.p.rapidapi.com/random/joke';
    fetch(url, options)
        .then(data => data.json())
        // .then(function(data){
        //     console.log(data.body[0].setup)
        // })
        .then(function(data) { 
            const jokeHeader = document.getElementById('jokes');
            let setup = document.createElement('li')
            jokeHeader.appendChild(setup);
            setup.innerText= data.body[0].setup;
            setup.style.maxWidth = "50%";
            setup.style.width = "500px";
            let punchline = document.createElement('li');
            punchline.style.margin = '10px 0px';
            punchline.style.width = '500px';
            //after setTimeout (delay for 5 seconds)
            setTimeout(function(){
                jokeHeader.appendChild(punchline);       
            }, 8000);
            punchline.innerText = data.body[0].punchline; 
            setTimeout(function(){
                const gif = document.createElement('iframe')
                gif.src = "https://giphy.com/embed/7SkaEwVd5sgW8dVf9h";
                gif.style.width = "480px";
                gif.style.height = "270px";
                gif.style.frameBorder = "0px";
                jokeHeader.appendChild(gif);
                const audio = document.createElement('audio');
                audio.controls = true;
                const source = document.createElement('source');
                audio.autoplay = true;
                source.src = "ba_dum_tss_drum.wav"
                source.type ="audio/wav"
                audio.appendChild(source);
                audio.style.margin = "10px 0px";
                jokeHeader.appendChild(audio);
                const newDiv = document.createElement('div');
                jokeHeader.appendChild(newDiv);
                const button = document.createElement('button');
                newDiv.appendChild(audio);
                newDiv.appendChild(button);
                button.type = "button";
                button.innerText = "Again"
                button.style.display = "flex";
                button.addEventListener('click', (event) =>{
                    location.reload();
                });
            }, 10500)
        })
        .catch(err => console.error(err));
    });
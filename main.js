// const data = {
//     setup: "Why did the chicken cross the road?", 
//     punchline: "To get to the other side"
// }

function setupDisplay(data){
    return data.body[0].setup;
}

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ee8d06cf8mshf1719f06203417cp1d917ejsn90d02e8323e1',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
          }
    }
    const url= 'https://dad-jokes.p.rapidapi.com/random/joke';
    fetch(url, options)
        .then(data => data.json())
        .then(function(data){
            console.log(data.body[0].setup)
            // for (let el in data.body[0]){
            //     console.log('el: ', el)
            // }
        })
        .then(function(data) { 
            const jokeHeader = document.getElementById('jokes');
            const setup = document.createElement('li')
            jokeHeader.appendChild(setup);
            setup.innerText= data.body[0].setup;
            const punchline = document.createElement('li');
            punchline.style.margin = '10px 0px';
            //after setTimeout (delay for 5 seconds)
            setTimeout(function(){
                jokeHeader.appendChild(punchline);
                punchline.innerText = data.body[0].punchline;          
            }, 5000);
            setTimeout(function(){
                const gif = document.createElement('iframe')
                gif.src = "https://giphy.com/embed/7SkaEwVd5sgW8dVf9h";
                gif.style.width = "480px";
                gif.style.height = "270px";
                gif.style.frameBorder = "0px";
                jokeHeader.appendChild(gif);
               
                // const iframe = document.createElement('iframe');
                // iframe.allow = "autoplay";
                // iframe.src = "ba_dum_tss_drum.wav"
                // gif.appendChild(iframe);
                const audio = document.createElement('audio');
                audio.controls = true;
                const source = document.createElement('source');
                audio.autoplay = true;
                source.src = "ba_dum_tss_drum.wav"
                source.type ="audio/wav"
                audio.appendChild(source);
                audio.style.margin = "10px 0px";
                jokeHeader.appendChild(audio);
                const button = document.createElement('button');
                button.type = "button";
                button.innerText = "Again"
                button.style.display = "block";
                jokeHeader.appendChild(button);
                button.addEventListener('click', (event) =>{
                    location.reload();
                });
            }, 6000)
        })
        .catch(err => console.error(err));
    });
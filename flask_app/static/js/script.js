
// ============ MAIN MENU ================
var menuTextDiv = document.querySelector('.menuText');
var narutoIcon = document.querySelector('.naruto-icon')
var chatIcon = document.querySelector('.chat-icon')
var girlIcon = document.querySelector('.girl-icon')
function showLiveStreamText(elem) {
    menuTextDiv.innerHTML += `
    <h2 class="menuSelectionText"> Watch Live Stream Anime </h2>
    <h4 class="menuSelectionTextJapanese"> ライブ ストリーム </h4>
    `
}

function showChatText(elem) {
    menuTextDiv.innerHTML += `
    <h2 class="menuSelectionText"> Chat With Friends </h2>
    <h4 class="menuSelectionTextJapanese"> チャット </h4>
    `
}

function showSearchText(elem) {
    menuTextDiv.innerHTML += `
    <h2 class="menuSelectionText"> Search Anime </h2>
    <h4 class="menuSelectionTextJapanese"> アニメを検索 </h4>
    `
}

function hideMenuText(elem) {
    menuTextDiv.innerHTML = ""
}

// When Live Stream Menu clicked functions:
var mainMenuDiv = document.querySelector('.mainMenu')
var mainMenuSelectionDiv = document.querySelector('.mainMenuSelection')
var animeChannelDiv = document.querySelector('.animeChannel')

function showLiveStreamVideo(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    menuTextDiv.innerHTML = ""
    mainMenuSelectionDiv.innerHTML += `
    <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/naruto?utm_source=plutotv&utm_medium=share&utm_campaign=1000201&utm_content=1000735&referrer=copy-link" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
    `
    animeChannelDiv.innerHTML += `
    <img class="naruto-channel" onclick="narutoChannel()" src="/static/img/Naruto-2.png">
    <img class="animeAll-channel" onclick="animeAllChannel()" src="/static/img/AnimeAll.jpeg">
    <img class="lupin-channel" onclick="lupinChannel()" src="/static/img/Lupin.png">
    <img class="toku-channel" onclick="tokuChannel()" src="/static/img/Tokushoutsu.jpeg">
    <img class="luffy-channel" onclick="luffyChannel()" src="/static/img/Luffy.png">
    <img class="yugi-channel" onclick="yugiChannel()" src="/static/img/Yugi.jpeg">
    `
}

// Live Stream Channels Button Function:

function narutoChannel(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    if (onclick = document.querySelector('.naruto-channel')) {
        mainMenuSelectionDiv.innerHTML +=
            `
    <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/naruto" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
    `
    }
}

function animeAllChannel(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    if (onclick = document.querySelector('.animeAll-channel')) {
        mainMenuSelectionDiv.innerHTML +=
            `
    <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/anime-all-day" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
    `
    }
}

function lupinChannel(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    if (onclick = document.querySelector('.lupin-channel')) {
        mainMenuSelectionDiv.innerHTML +=
            `
        <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/lupin-the-3rd" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
        `
    }
}

function tokuChannel(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    if (onclick = document.querySelector('.toku-channel')) {
        mainMenuSelectionDiv.innerHTML +=
            `
        <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/tokushoutsu" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
        `
    }
}

function luffyChannel(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    if (onclick = document.querySelector('.luffy-channel')) {
        mainMenuSelectionDiv.innerHTML +=
            `
        <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/one-piece" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
        `
    }
}

function yugiChannel(elem) {
    mainMenuSelectionDiv.innerHTML = ""
    if (onclick = document.querySelector('.yugi-channel')) {
        mainMenuSelectionDiv.innerHTML +=
            `
        <iframe width="750" height="400" src="https://pluto.tv/en/live-tv/yu-gi-oh-ptv1" title="Anime video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
        `
    }
}


// Chat Icon Menu Function 
// var mainMenuDiv = document.querySelector('.mainMenu')
// var mainMenuSelectionDiv = document.querySelector('.mainMenuSelection')
// var animeChannelDiv = document.querySelector('.animeChannel')
// var menuTextDiv = document.querySelector('.menuText');
// function showChatBox (elem) {
//     mainMenuSelectionDiv.innerHTML = ""
//     menuTextDiv.innerHTML = ""
//     mainMenuSelectionDiv.innerHTML += `
//     <div class="col-5 mx-auto">
//         <div class="card">
//             <div class="messages card-body">
    
//             </div>
        
            
//         </div>
//         <input type="text" class="form-control mt-3" placeholder="Message" id="messageInput" />
//     </div>
    
//     `
// }

// ========== Chat Box (HIDE AND SHOW) ==============

function hiddenChatBox (elem) {
    document.querySelector('.rightColumn').style.display = "none";
    document.querySelector('.animeSearchBox').style.display = "none";
}

function showTheChat (elem) {
    mainMenuSelectionDiv.innerHTML = ""
    menuTextDiv.innerHTML = ""
    document.querySelector('.rightColumn').style.display = "block";
}


// ============ SEARCH ANIME =================



function showAnimeSearch (elem) {
    mainMenuDiv.remove()
    document.querySelector('.animeSearchBox').style.display = "block";
}



// ================= ANIME API =====================

console.log("Script Linked")
var URL = "https://api.jikan.moe/v4/anime"
// https://api.jikan.moe/v4/anime?q=doraemon&sfw

// Get Anime by Name
function getAnime(event) {
    event.preventDefault()
    console.log("Submitted")
    var animeResultDiv = document.querySelector('#animeResult')
    var animeName = document.querySelector("#animeName").value
    console.log(animeName)
    // animeResultDiv.innerHTML = "Loading..."
    fetch(`${URL}?q=${animeName}&sfw`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // animeResultDiv.innerHTML = `
            // <h3>Results:</h3>
            // `
            // gets all the title within search **** ADD HTML ELEMENT AND BOOTSTRAP CLASS
            animeResultDiv.innerHTML = ""
            for (var i = 0; i < data.data.length; i++) {
                console.log(data.data[i].title)
                if (data.data[i].trailer.embed_url !== null) {
                    animeResultDiv.innerHTML += `
                    <div class="animeCard card mb-3">
                    <img src="${data.data[i].images.jpg.image_url}"><br>
                    <p>${data.data[i].title} </p>
                    <p>${data.data[i].episodes} Episode(s)</p>
                    <a href="${data.data[i].trailer.url}" target="_blank">Trailer</a>
                    </div>
                `
                }
                else if (data.data[i].trailer.embed_url === null) {
                    animeResultDiv.innerHTML += `
                    <div class="animeCard card mb-3">
                    <img src="${data.data[i].images.jpg.image_url}"><br>
                    <p> ${data.data[i].title} </p>
                    <p>${data.data[i].episodes} Episode(s)</p>
                    </div>
                `
                }
            }
        })
        .catch(err => console.log(err));
}






// Chat Functions


const socket = io();

let messageContainer = document.querySelector(".messages");

socket.on("connect", () => {
    let p = document.createElement("p")
    p.innerText = "You're connected"
    messageContainer.appendChild(p)
})

let messageInput = document.getElementById("messageInput")
messageInput.addEventListener("keypress", (e) => {
    if (e.which === 13) {
        socket.emit("message", messageInput.value)
        messageInput.value = ""
    }
})

socket.on('message', (message) => {
    let messageElement = document.createElement("p")
    messageElement.innerText = message
    messageContainer.appendChild(messageElement)
    showLastChat();
})


function showLastChat() {
    messageContainer.lastElementChild.scrollIntoView({ behavior: "smooth" });
}
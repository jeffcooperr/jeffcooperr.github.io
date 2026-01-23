function openPopup(project) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    var popupImg = document.getElementById("popup-img");
    popup.style.display = "flex";
    document.body.classList.add('popup-open');

    var content = '';
    popupImg.classList.remove('blurred')

    switch(project) {
        case 'ATO':
            content += '<h1>Sports Analytics Webapp</h1>';
            popupImg.src = 'images/analytics.png';
            popupImg.classList.add('blurred');
            content += '<p>Combining my love for sports and data analytics, I am creating a research tool for stat heads, fantasy team managers, and sports bettors who want greater insight on the players they follow.</p>'
            content += '<br>';
            content += '<p>Coming Soon</p>'
            break;
        case 'BTV':
            content += '<h1>Subletting Website</h1>';
            popupImg.src = 'images/sbltr.png';
            content += '<p>This website is designed to help students find and post sublet opportunities. As many students look for off-campus housing or need to sublet their space, this website provides students with a simple way to post and browse available sublets. Users must sign up to post a listing or view contact details, ensuring all users are verified students through their university emails.</p>'
            content += '<br>';
            content += '<a class="github-links" href="https://github.com/jeffcooperr/sbltr">Github Repository</a>'
            break;
        case 'NC':
            content += '<h1>Neural Canvas</h1>';
            popupImg.src = 'images/neuralcanvas.png';
            content += "<p>Neural Canvas is an AI-powered picture frame that generates images based on user voice prompts. Using the SpeechRecognition library, the system detects wake words to initiate prompts, which are processed through OpenAI's API to generate images with DALL-E 3. The images are then displayed on the picture frame using the Feh image viewer. The project integrates a Raspberry Pi to manage hardware components and handle voice input, image generation, and display functionality.</p>"
            content += '<br>';
            content += '<a class="github-links" href="https://github.com/jeffcooperr/neural-canvas">Github Repository</a>'
            break;
        case 'LO':
            content += '<h1>Lights Out</h1>';
            popupImg.src = 'images/lightsout.gif';
            content += '<p>This project implements a simple game called "Lights Out" using OpenGL and GLFW in C++. The objective of the game is to turn off all the lights on a grid to win. Clicking on a light toggles its state and affects the neighboring lights. The game provides three states: start, play, and game over, each with different functionalities.</p>'
            content += '<br>';
            content += '<a class="github-links" href="https://github.com/jeffcooperr/lights-out">Github Repository</a>'            
            break;
        case 'DEMO':
            content += '<h1>Fab Simulation</h1>';
            popupImg.src = 'images/demo.gif';
            content += '<p>A simple simulation of a manufacturing facility with 6 tools that cycle through different states: running, idle, error, and down. Used matplotlib for the main visual and streamlit for hosting and analytics as well as other outputs.</p>'
            content += '<br>';
            content += '<a class="github-links" href="https://fab-sim.streamlit.app">Live Site</a>'
            content += '<br>';
            content += '<a class="github-links" href="https://github.com/jeffcooperr/fab-sim">Github Repository</a>'
            break;
        default:
            popup.style.display = "none";
            return;
    }
    popupContent.innerHTML = content;
}

function closePopup(event) {
    if (event.target.id === 'popup' || event.target.classList.contains('close') || event.target.classList.contains('fa-solid')) {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
      document.body.classList.remove('popup-open');
    }
  }
function startGame() {
    const selectedModes = Array.from(document.querySelectorAll('input[name="mode"]:checked'))
      .map(checkbox => checkbox.value);
  
    if (selectedModes.length === 0) {
      alert("Please select at least one game mode.");
      return;
    }
  
    let modesToUse = selectedModes;
  
    // Jos "all" valittu, käytetään kaikkia kategorioita
    if (selectedModes.includes("all")) {
      modesToUse = [
        "workAndSchool",
        "embarrassingMoments",
        "travelAdventure",
        "relationshipDating",
        "partyFun",
        "moneyShopping",
        "girlsNight"
      ];
    }
  
    console.log("Selected game modes:", modesToUse);
  
    // Tässä voit esim. ladata kysymykset JSON-tiedostosta näiden kategorioiden mukaan
    // loadQuestions(modesToUse);
  
    // Seuraava vaihe pelissä:
    // showScreen('game-screen'); // jos teet peliruudun
  }
  let selectedModes = [];
let currentQuestions = [];
let currentQuestionIndex = 0;

function startGame() {
  // Tyhjennetään aiemmin valitut kysymykset
  currentQuestions = [];
  currentQuestionIndex = 0;

  // Haetaan valitut pelitilat
  selectedModes = Array.from(document.querySelectorAll('input[name="mode"]:checked'))
    .map(input => input.value);

  // Haetaan kysymykset JSON-tiedostosta
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Yhdistetään kysymykset valituista pelitiloista
      selectedModes.forEach(mode => {
        if (data[mode]) {
          currentQuestions = currentQuestions.concat(data[mode]);
        }
      });

      // Näytetään ensimmäinen kysymys
      showQuestion();
    });
}

function showQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    const question = currentQuestions[currentQuestionIndex];
    alert(question);  // Voit muuttaa tämän koodin osaksi pelin UI:ta
    currentQuestionIndex++;
  } else {
    alert('The game has ended!');  // Pelin loppu
  }
}

function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
  
    players.forEach((player, index) => {
      const playerBtn = document.createElement('button');
      playerBtn.className = 'player-btn';
      playerBtn.innerText = player;
  
      // Lisää poistotoiminto painikkeeseen
      playerBtn.onclick = () => {
        if (confirm(`Remove player "${player}"?`)) {
          players.splice(index, 1);
          updatePlayerList();
        }
      };
  
      playerList.appendChild(playerBtn);
    });
  }
  
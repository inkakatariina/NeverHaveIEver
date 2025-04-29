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
  
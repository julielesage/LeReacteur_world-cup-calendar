const axios = require("axios");
const topScorers = {
  // Ronald: 5,
  // Gazinsky: 1
  // ...
};
axios
  .get(
    "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
  )
  .then(response => {
    // data.rounds correspond à une liste de journées
    for (let i = 0; i < response.data.rounds.length; i++) {
      // data.rounds[].matches correspond à une liste de matchs
      for (let j = 0; j < response.data.rounds[i].matches.length; j++) {
        // response.data.rounds[i].matches[j].team1.name est le nom de la premiere equipe
        console.log(response.data.rounds[i].matches[j].date);
        console.log(
          response.data.rounds[i].matches[j].team1.name +
            " : " +
            response.data.rounds[i].matches[j].score1
        );
        // response.data.rounds[i].matches[j].team2.name est le nom de la deuxieme equipe
        console.log(
          response.data.rounds[i].matches[j].team2.name +
            " : " +
            response.data.rounds[i].matches[j].score2
        );
        console.log("----------");
        // Buts de la premiere equipe
        if (response.data.rounds[i].matches[j].goals1) {
          for (
            let k = 0;
            k < response.data.rounds[i].matches[j].goals1.length;
            k++
          ) {
            const playerName =
              response.data.rounds[i].matches[j].goals1[k].name;
            if (topScorers[playerName] === undefined) {
              topScorers[playerName] = 1;
            } else {
              topScorers[playerName] = topScorers[playerName] + 1;
            }
          }
        }
        // Buts de la deuxieme equipe
        if (response.data.rounds[i].matches[j].goals2) {
          for (
            let k = 0;
            k < response.data.rounds[i].matches[j].goals2.length;
            k++
          ) {
            const playerName =
              response.data.rounds[i].matches[j].goals2[k].name;
            if (topScorers[playerName] === undefined) {
              topScorers[playerName] = 1;
            } else {
              topScorers[playerName] = topScorers[playerName] + 1;
            }
          }
        }
      }
    }
    console.log(topScorers);
  });

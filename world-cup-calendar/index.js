/*affichez le calendrier des matchs.
Vous devrez afficher le nom des équipes, les dates et les scores.
Bonus
Afficher le classement des meilleurs buteurs*/

const axios = require("axios");

/*axios
  .get(
    "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
  )
  .then(response => {
    for (let i = 0; i < response.data.rounds.length; i++) {
      for (let j = 0; j < response.data.rounds[i].matches.length; j++) {
        const date = response.data.rounds[i].matches[j].date;

        const T1 = response.data.rounds[i].matches[j].team1.name;
        //console.log(T1);
        const T2 = response.data.rounds[i].matches[j].team2.name;
        //console.log(T2);
        const score =
          response.data.rounds[i].matches[j].score1 +
          " : " +
          response.data.rounds[i].matches[j].score2;
        console.log(`${date} : ${T1} vs ${T2} : ${score}`);
      }
    }
  });*/

// Suite classement des marqueurs , EN MIEUX !!!!!!!!!!!!!!!!!!!!!

const getChampions = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
    );
    const champions = {};

    for (let i = 0; i < response.data.rounds.length; i++) {
      for (let j = 0; j < response.data.rounds[i].matches.length; j++) {
        if (response.data.rounds[i].matches[j].goals1) {
          for (
            let k = 0;
            k < response.data.rounds[i].matches[j].goals1.length;
            k++
          ) {
            const player = response.data.rounds[i].matches[j].goals1[k].name;
            if (champions[player] === undefined) champions[player] = 1;
            else champions[player] += 1;
          }
        }
        if (response.data.rounds[i].matches[j].goals2) {
          for (
            let l = 0;
            l < response.data.rounds[i].matches[j].goals2.length;
            l++
          ) {
            const player = response.data.rounds[i].matches[j].goals2[l].name;
            if (champions[player] === undefined) champions[player] = 1;
            else champions[player] += 1;
          }
        }
        console.log(champions);
        /*for (let i = 0; i < champions.length; i++)
        {
          if (champions[i] // voir avec un sort tab)  
        }*/
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

getChampions();

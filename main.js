let gamedata = {
  firstName: "Terra",
  favoriteGame: "ResidentEvil",
  gameCost: 20.0,
};
const studentData = [
  {
    firstName: "Tyler",
    favoriteGame: "DayZ Mod",
    gameCost: 19.99,
  },
  {
    firstName: "Nathaniel",
    favoriteGame: "Legend of Zelda: Ocarina of Time",
    gameCost: 50.0,
  },
  {
    firstName: "Thori",
    favoriteGame: "Dead By Daylight",
    gameCost: 19.99,
  },

  { firstName: "Elizabeth", favoriteGame: "Super Smash", gameCost: 60.0 },

  { firstName: "Ryan", favoriteGame: "CrashBandicoot", gameCost: 5.0 },
  {
    firstName: "Austin",
    favoriteGame: "Stardew Valley",
    gameCost: 15.0,
  },
  {
    firstName: "Jose",
    favoriteGame: "Rocket League",
    gameCost: 0,
  },
  { firstName: "Bobby", favoriteGame: "Madden", gameCost: 35.0 },

  { firstname: "Dominique", favoriteGame: "Mario Tennis", gameCost: 8.99 },
  {
    firstName: "Coco",
    favoriteGame: "We're Not Really Strangers",
    gameCost: 17.99,
  },
  { firstName: "Jordan", favoriteGame: "Hearthstone", gameCost: 0 },
  {
    firstName: "Chaz",
    favoriteGame: "UFC 4",
    gameCost: 40.0,
  },
  { firstName: "Michael", favoriteGame: "battlefield", gameCost: 60.0 },
  gamedata,
];

function processData() {
  for (let data of studentData) {
    let { favoriteGame, gameCost, firstName } = data;
    if (gameCost < 10) {
      console.log(`${firstName}, your game is cost effective`);
    } else if (gameCost > 50) {
      console.log(`${firstName}, your game is expensive!`);
    } else {
      console.log(`Lets go buy ${favoriteGame}! `);
    }
  }
}

function getTotalCost(games=[]){
    let total=0;
    for(let i =0; i< games.length;i++){
        console.log(total, games[i].gameCost);
        total+= games[i].gameCost;
    }
    console.log(total.toFixed(2));
}

getTotalCost(studentData);
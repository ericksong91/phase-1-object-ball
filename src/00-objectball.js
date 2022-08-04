function gameObject () {
   return {
      home: {
          teamName: 'Brooklyn Nets',
          colors: ['Black','White'],
          players: {
              'Alan Anderson':{
                number: 0, shoe: 16, points: 22, rebounds: 12, 
                assists: 12, steals: 3, blocks: 1, slamDunks: 1 
                },
              'Reggie Evans':{
                  number: 30, shoe: 14, points: 12, rebounds: 12,
                  assists: 12, steals: 12, blocks: 12,slamDunks: 1 
                },
              'Brook Lopez':{
                  number: 11, shoe: 17, points: 17, rebounds: 19,
                  assists: 10, steals: 3, blocks: 1, slamDunks: 15
                },
              'Mason Plumlee':{
                  number: 1, shoe: 19, points: 26, rebounds: 12,
                  assists: 6, steals: 3, blocks: 8, slamDunks: 5 
                },
              'Jason Terry':{
                  number: 31, shoe: 15, points: 19, rebounds: 2,
                  assists: 2, steals: 4, blocks: 11, slamDunks: 1 
                }
            }
      },
      away: {
          teamName: 'Charlotte Hornets',
          colors: ['Turquoise', 'Purple'],
          players: {
              'Jeff Adrien':{
                  number: 4, shoe: 18, points: 10, rebounds: 1,
                  assists: 1, steals: 2, blocks: 7, slamDunks: 2 
                },
              'Bismak Biyombo':{
                  number: 0, shoe: 16, points: 12, rebounds: 4,
                  assists: 7, steals: 7, blocks: 15, slamDunks: 10 
                },
              'DeSagna Diop':{
                  number: 2, shoe: 14, points: 24, rebounds: 12,
                  assists: 12, steals: 4, blocks: 5, slamDunks: 0 
                },
              'Ben Gordon':{
                  number: 8, shoe: 15, points: 33, rebounds: 3,
                  assists: 2, steals: 1, blocks: 1, slamDunks: 0 
                },
              'Brendan Haywood':{
                  number: 33, shoe: 15, points: 6, rebounds: 12,
                  assists: 12, steals: 22, blocks: 5, slamDunks: 12 
                }
            }
       }
    }
  }


// console.log(gameObject)

//Function Tags all Players as seperate objects in home/away/combined teams

const homeTeam = () => {
    return gameObject().home.players
}

const awayTeam = () => {
    return gameObject().away.players
}

const allTeam = () => {
    return Object.assign({}, homeTeam(), awayTeam())
}

//console.log(allTeam())

//function below looks for specific players by iterating through the gameObject using For In loop

function playerFinder(playerNameFoo){
  let object = gameObject()
  for (team in object) {
    let objectTeam = object[team].players
    // debugger
    for (player in objectTeam){
        if (player === playerNameFoo){
            // debugger
            return objectTeam[player]
        }
    }
  }
}

//Function below finds the team stats

function teamFinder(teamNameFoo){
    let object = gameObject()
    debugger
    for (team in object) {
      let objectTeam = object[team]
          if (objectTeam["teamName"] === teamNameFoo){
              debugger
              return objectTeam
          }
      }
    }

//Function that helps find largest parameter and returns it as an array

    function teamFinder(parameterFoo){
        let object = gameObject()
        debugger
        for (team in object) {
          let objectTeam = object[team]
              if (objectTeam["teamName"] === parameterFoo){
                  debugger
                  return objectTeam
              }
          }
        }

//Function below uses playerFinder to find out how many points they scored

function numPointsScored(argument){
    let object = playerFinder(argument)
    return `The amount of points that ${argument} scored is ${object['points']}` 
}

//Function below finds out shoe size

function shoeSize(argument){
    let object = playerFinder(argument)
    return `${argument}'\s shoe size is ${object['shoe']}`
}

//Function below finds team colors

function teamColors(argument){
    let object = teamFinder(argument)
    debugger
    return `Team colors for the ${argument} are ${object.colors[0]} and ${object.colors[1]}`
}

//Function below finds team names

function teamNames(){
    let object = gameObject()
    let objectFoo = Object.values(gameObject()).map(teamNameFoo => teamNameFoo.teamName)
    return objectFoo
}

//Function below gives an array of team jersey numbers

function playerNumbers (argument){
    let object = teamFinder(argument)
    let objectFoo = Object.values(object.players).map(teamJersey => teamJersey.number)
    return objectFoo
}

//Function below gives player stats

function playerStats(argument){
    let object = playerFinder(argument)
    return object
}

//Function for big shoe rebounds, working on it later

function bigShoeSize(argument){
    let object = allTeam()
}

//Console log checks Below

console.log(numPointsScored('Brendan Haywood'))
console.log(shoeSize('Brendan Haywood'))
console.log(teamColors("Brooklyn Nets"))
console.log(teamColors("Charlotte Hornets"))
console.log(teamNames())
console.log(playerNumbers("Charlotte Hornets"))
console.log(playerStats("Brendan Haywood"))
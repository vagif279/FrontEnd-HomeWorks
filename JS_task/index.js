/*
Human:
    #name: string
    #age: number

Player -> Human:
    #sportName: string
    #inMainTeam: boolean

FootbalPlayer -> Player

Team
    #players: FootbalPlayer[]

    addPlayers(...FootbalPlayer[]) => undefined
    deletePlayer(FootbalPlayer) => undefined
    getPlayerSortedByName() => FootbalPLayer[]
    getFilteredPlayers(inMainTeam: boolean) => FootbalPLayer[]
*/

function Human(name, age) {
    const _name = name;
    const _age = age;
}
function Player(name, age, sportName, inMainTeam) {
    const _name = name;
    const _age = age;
    const _sportName = sportName;
    const _inMainTeam = inMainTeam;
}
function FootbalPlayer(name, age, inMainTeam) {
    const _player = new Player(name, age, 'Football', inMainTeam);
}
function Team() {
    const _footballPlayers = [];

    Object.defineProperty(this, 'footballPlayers', {
        get() {
            return _footballPlayers;
        }
    })

    this.addPlayers = function(...footballPlayers){ //rest
        _footballPlayers.push(...footballPlayers); //spread
    }

    this.deletePlayer = function(footballPLayers) {
        const indexOfFootballPlayer = _footballPlayers.indexOf(footballPlayers);

        if (indexOfFootballPlayer !== -1) { //check if player exists
            _footballPlayers.splice(indexOfFooballPlayer, 1);
        }
    }

    this.getPlayerSortedByName  = function() {

    }
}

const team = new Team();

team.addPlayers(1, 2, 3, 4, 5);

console.log(team.footballPlayers);

team.deletePlayer(1);

console.log(team.footballPlayers);
class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(players) {
        players.forEach((player, i) => {
            const [name, age, playerValue] = player.split('/');
            const isExisting = this.invitedPlayers.find(el => el.name === name);

            if (isExisting) {
                if (playerValue > isExisting.playerValue) {
                    isExisting.playerValue = Number(playerValue);
                }
            } else {
                const newPlayer = {
                    name,
                    age: Number(age),
                    playerValue: Number(playerValue),
                }
                this.invitedPlayers.push(newPlayer);
            }
        });
        return `You successfully invite ${this.invitedPlayers.map(player => player.name).join(', ')}.`
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const isExisting = this.invitedPlayers.find(el => el.name === name);

        if (!isExisting) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (playerOffer < isExisting.playerValue) {
            const priceDifference = isExisting.playerValue - playerOffer
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }

        isExisting.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        const isExisting = this.invitedPlayers.find(el => el.name === name);

        if (!isExisting) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (isExisting.age >= age) {
            return `${name} is above age limit!`
        }

        if (isExisting.age < age) {
            const ageDifference = age - isExisting.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else if (ageDifference >= 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
    }

    transferWindowResult() {
        const result = ['Players list:'];
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name)).forEach(player => {
            result.push(`Player ${player.name}-${player.playerValue}`)
        })
        return result.join('\n');
    }

}



let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));



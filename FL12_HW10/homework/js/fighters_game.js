function Fighter(fighterParams) {
  let params = fighterParams;
  params.maxHP = params.hp;
  params.win = 0;
  params.loss = 0;
  return {
    getName: () => params.name,
    getDamage: () => params.damage,
    getStrength: () => params.strength,
    getAgility: () => params.agility,
    getHealth: () => params.hp,
    heal: function(healHP) {
      params.hp = Math.min(params.maxHP, params.hp + healHP);
    },
    dealDamage: function(damaga) {
      params.hp = Math.max(0, params.hp - damaga);
    },
    attack: function(defender) {
      const chance = 100;
      if (
        Math.random() * chance >
        defender.getStrength() + defender.getAgility()
      ) {
        defender.dealDamage(this.getDamage());
        console.log(
          `${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`
        );
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    },
    logCombatHistory: () =>
      console.log(
        `Name: ${params.name}, ` +
          `Wins: ${params.win}, ` +
          `Losses: ${params.loss}`
      ),
    addWin: () => params.win++,
    addLoss: () => params.loss++
  };
}
function battle(fighterone, fightertwo) {
  if (fighterone.getHealth() === 0 || fightertwo.getHealth() === 0) {
    fighterone.getHealth() === 0
      ? console.log(`${fighterone.getName()} is dead and can't fight.`)
      : console.log(`${fightertwo.getName()} is dead and can't fight.`);
    return;
  }
  while (fighterone.getHealth() > 0 && fightertwo.getHealth() > 0) {
    fighterone.attack(fightertwo);
    if (fightertwo.getHealth() > 0) {
      fightertwo.attack(fighterone);
      if (fighterone.getHealth() === 0) {
        fightertwo.addWin();
        fighterone.addLoss();
        console.log(`${fightertwo.getName()} has won!`);
      }
    } else {
      fighterone.addWin();
      fightertwo.addLoss();
      console.log(`${fighterone.getName()} has won!`);
    }
  }
}

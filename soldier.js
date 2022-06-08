const soldier = {
  name: 'Ryan',
  health: 10,
  weapon: {
    name: 'M-16',
    cartridges: 0,
  },
  supplies: 3,
  fire: function(){
  if(this.weapon.cartridges === 0){
    return console.log('обойма пуста. Перезаредитесь')
  } 
  this.weapon.cartridges--
  console.log('бах-бах')
  },
  recharge: function(){
  if(this.supplies === 0){
    return console.log('не осталось припасов')
  }
  this.supplies--
  console.log('перезаредить')
  },
  hurt: function(){
    if(this.health === 0){
      return console.log('ты проиграл')
    }
    this.supplies--
  },
  //health-здоровье weapon-оружие cartridges-патроны supplies-припасы  fire-стрелять  recharge-перезаредить hurt-ранить
}

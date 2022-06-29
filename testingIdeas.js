console.log()

let myCharacter = {
    name: `Vaal'Vaan`,
    race: `Elf`,
    level: 5,
    myClass: `Rogue`,
    subClass: `Thief`
}
console.log(`Character: ${myCharacter.name} 
Level: ${myCharacter.level} ${myCharacter.race} ${myCharacter.myClass} - ${myCharacter.subClass}
    `)



let armor = 3
let shield = 2
let daggerDamage = (Math.floor(Math.random()* 4)+ 6 ) //damage
let daggerToHit = (Math.floor(Math.random()* 20)+ 9 )

let defense = (10 + 5) + armor

console.log(`AC: ${defense}`)

console.log()

console.log(`Vaal'Vaan stabs with his dagger for a ${daggerToHit} to hit!`)
console.log(`Dagger Damage: ${daggerDamage}`)



let equip = [armor,shield,daggerDamage]
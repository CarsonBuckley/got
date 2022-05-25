
// Jons stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jamies stats
let jamieLannisterAttack = 35;


if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");

} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow");
} else {
    console.log("Jon Snow and Jamie Lannister have the same attack")
}

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain.");
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

// Jon picks up a shield
jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain")
} else {
    (jonSnowHealth -= jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}
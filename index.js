let nomeDoHero = "Nandinho do Skate 3"
let xpHero = 7000
let i 

for(i = 1; i <= 8; i++){
    switch (i) {
        case 1:
            if (xpHero <= 1000) {
                console.log(`${nomeDoHero} é classificado com o nível Bronze`)
            }
            break;
    
        case 2:
            if (xpHero >= 1001 && xpHero <= 2000) {
                console.log(`${nomeDoHero} é classificado com o nível Prata`)
            }
            break;
    
        case 3:
            if (xpHero >= 2001 && xpHero <= 3000) {
                console.log(`${nomeDoHero} é classificado com o nível Ouro`)
            }
            break;
    
        case 4:
            if (xpHero >= 3001 && xpHero <= 4000) {
                console.log(`${nomeDoHero} é classificado com o nível Platina`)
            }
            break;
    
        case 5:
            if (xpHero >= 4001 && xpHero <= 5000) {
                console.log(`${nomeDoHero} é classificado com o nível Diamante`)
            }
            break;
    
        case 6:
            if (xpHero >= 5001 && xpHero <= 6000) {
                console.log(`${nomeDoHero} é classificado com o nível Ascendente`)
            }
            break;
    
        case 7:
            if (xpHero >= 6001 && xpHero <= 7000) {
                console.log(`${nomeDoHero} é classificado com o nível Imortal`)
            }
            break;
    
        case 8:
            if (xpHero >= 7001) {
                console.log(`${nomeDoHero} é classificado com o nível Radiante`)
            }
    }
}
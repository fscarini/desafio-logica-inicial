let nomeDoHero = "Nandinho do Skate 3"
let xpHero = 9000
let i 

for(i = 1; i <= 9; i++){
    switch (i) {
        case 1:
            if (xpHero <= 1000) {
                console.log(`${nomeDoHero} é classificado com o nível Ferro`)
            }
            break;

        case 2:
            if (xpHero >= 1001 && xpHero <= 2000) {
                console.log(`${nomeDoHero} é classificado com o nível Bronze`)
            }
            break;
    
        case 3:
            if (xpHero >= 2001 && xpHero <= 5000) {
                console.log(`${nomeDoHero} é classificado com o nível Prata`)
            }
            break;
    
        case 4:
            if (xpHero >= 5001 && xpHero <= 7000) {
                console.log(`${nomeDoHero} é classificado com o nível Ouro`)
            }
            break;
    
        case 5:
            if (xpHero >= 7001 && xpHero <= 8000) {
                console.log(`${nomeDoHero} é classificado com o nível Platina`)
            }
            break;
    
        case 6:
            if (xpHero >= 8001 && xpHero <= 9000) {
                console.log(`${nomeDoHero} é classificado com o nível Diamante`)
            }
            break;
    
        case 7:
            if (xpHero >= 9001 && xpHero <= 10000) {
                console.log(`${nomeDoHero} é classificado com o nível Ascendente`)
            }
            break;
    
        case 8:
            if (xpHero >= 10001 && xpHero <= 12000) {
                console.log(`${nomeDoHero} é classificado com o nível Imortal`)
            }
            break;
    
        case 9:
            if (xpHero >= 12001) {
                console.log(`${nomeDoHero} é classificado com o nível Radiante`)
            }
    }
}
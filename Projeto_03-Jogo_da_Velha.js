var prompt = require('prompt-sync')();
const player1 = 'O';
const player2 = 'X';
let pontosPLAYER1 = 0;
let pontosPLAYER2 = 0;
let lin = 0;
let col = 0;
let play = true;
let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

while (play === true) {
    console.log('---------------------------------------------');
    let rodadas = parseInt(prompt('Rodadas: '));
    for (let i = 0; i < rodadas; i++) {
        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        for (let n = 0; n < 9; n++) {
            console.table(matriz);
            console.log();
            if (n % 2 == 0) {
                console.log('Player 1:');
                lin = +prompt('Linha: ');
                col = +prompt('Coluna: ');
                //-------------------------------------------------------------------------------------------------

                while (
                    lin < 0 ||
                    lin > 2 ||
                    col < 0 ||
                    col > 2 ||
                    matriz[lin][col] == player1 ||
                    matriz[lin][col] == player2
                ) {
                    console.log('\nValor não pode ser usado. Por favor tente outro.');
                    console.table(matriz);
                    console.log();
                    console.log('Player 1:');
                    lin = +prompt('Linha: ');
                    col = +prompt('Coluna: ');
                }
                //-------------------------------------------------------------------------------------------------
                matriz[lin][col] = player1;
            } else {
                console.log('Player 2:');
                lin = +prompt('Linha: ');
                col = +prompt('Coluna: ');
                //-------------------------------------------------------------------------------------------------
                while (
                    lin < 0 ||
                    lin > 2 ||
                    col < 0 ||
                    col > 2 ||
                    matriz[lin][col] == player1 ||
                    matriz[lin][col] == player2
                ) {
                    console.log('\nValor não pode ser usado. Por favor tente outro.');
                    console.table(matriz);
                    console.log();
                    console.log('Player 2:');
                    lin = +prompt('Linha: ');
                    col = +prompt('Coluna: ');
                }
                //-------------------------------------------------------------------------------------------------
                matriz[lin][col] = player2;
            }
            console.log();

            // PLAYER 1
            if (
                matriz[0][0] == player1 &&
                matriz[1][0] == player1 &&
                matriz[2][0] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][1] == player1 &&
                matriz[1][1] == player1 &&
                matriz[2][1] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][2] == player1 &&
                matriz[1][2] == player1 &&
                matriz[2][2] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][0] == player1 &&
                matriz[1][1] == player1 &&
                matriz[2][2] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][2] == player1 &&
                matriz[1][1] == player1 &&
                matriz[2][0] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
                // PLAYER 2
            } else if (
                matriz[0][0] == player2 &&
                matriz[1][0] == player2 &&
                matriz[2][0] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][1] == player2 &&
                matriz[1][1] == player2 &&
                matriz[2][1] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][2] == player2 &&
                matriz[1][2] == player2 &&
                matriz[2][2] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][0] == player2 &&
                matriz[1][1] == player2 &&
                matriz[2][2] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][2] == player2 &&
                matriz[1][1] == player2 &&
                matriz[2][0] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
                // NOVO PLAYER 1
            } else if (
                matriz[0][2] == player1 &&
                matriz[0][1] == player1 &&
                matriz[0][0] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
            } else if (
                matriz[1][2] == player1 &&
                matriz[1][1] == player1 &&
                matriz[1][0] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
            } else if (
                matriz[2][2] == player1 &&
                matriz[2][1] == player1 &&
                matriz[2][0] == player1
            ) {
                pontosPLAYER1++;
                console.log('PLAYER 1 GANHOU a RODADA');
                break;
                // NOVO PLAYER 2
            } else if (
                matriz[0][2] == player2 &&
                matriz[0][1] == player2 &&
                matriz[0][0] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[1][2] == player2 &&
                matriz[1][1] == player2 &&
                matriz[1][0] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[2][2] == player2 &&
                matriz[2][1] == player2 &&
                matriz[2][0] == player2
            ) {
                pontosPLAYER2++;
                console.log('PLAYER 2 GANHOU a RODADA');
                break;
            } else if (
                matriz[0][0] !== '' &&
                matriz[1][0] !== '' &&
                matriz[2][0] !== '' &&
                matriz[0][1] !== '' &&
                matriz[1][1] !== '' &&
                matriz[2][1] !== '' &&
                matriz[0][2] !== '' &&
                matriz[1][2] !== '' &&
                matriz[2][2] !== ''
            ) {
                console.log('Esta RODADA deu EMPATE');
                break;
            }
        }
        // console.table(matriz);
    }
    console.log();
    console.table(matriz);
    console.log();
    if (pontosPLAYER1 > pontosPLAYER2) {
        console.log(`Parabens PLAYER 1 você VENCEU!!!`);
    } else if (pontosPLAYER2 > pontosPLAYER1) {
        console.log(`Parabens PLAYER 2 você VENCEU!!!`);
    } else {
        console.log('EMPATE');
    }
    console.log(`Player 1: ${pontosPLAYER1}`);
    console.log(`Player 2: ${pontosPLAYER2}`);
    console.log('\nDeseja jogar novamente?');
    console.log('"s" para SIM e "n" para NÃO');
    const resp = prompt();
    if (resp == 'n') {
        play = false;
    }
    console.log('---------------------------------------------');
    console.clear();
}

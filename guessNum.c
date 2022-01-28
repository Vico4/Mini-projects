#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    const int MAX = 100, MIN = 1;
    int gameover = 0;
    int guess;

    srand(time(NULL));
    int nombreMystere = (rand() % (MAX - MIN + 1)) + MIN;

    while(gameover == 0){
        printf("Quel est le nombre ?\n");
        scanf("%d", &guess);
        if (guess == nombreMystere) {
            printf("Gagné !\n");
            gameover = 1;
        }
        else if (guess > nombreMystere) {
            printf("C'est moins !\n");
        }
        else {
            printf("C'est plus !\n");
        }
    }
    return 0;
}
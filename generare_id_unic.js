function genId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2); 
}


// functia genereaza un ID unic pentru fiecare task, este utila pentru TASK uri, Identificatori unici in aplicatie
// Date.now() este numarul de milisecunde de la 1 ianuarie 1970, difera mereu
// .toString(36) converteste numarul in baza 36 atat cifre cat si litere, este mai scurt decat in baza 10 
// Math.random().toString(36).slice(2) este un numar aleatorui convertit in baza 36 care are taiate primele 2 caractere (0.)
// combinate rezulta un string unic de genul lc8x2kz4a7b care este imposibil de duplicat

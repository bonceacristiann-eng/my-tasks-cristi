function toggleDone(id) {
  const t = tasks.find(t => t.id === id);
  if (t) {
    t.done = !t.done;
   if (t.done) {
  confetti({
    particleCount: 150,
    angle: 60,
    spread: 80,
    origin: { x: 0, y: 0.5 }
  });
  confetti({
    particleCount: 150,
    angle: 120,
    spread: 80,
    origin: { x: 1, y: 0.5 }
  });
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 0.5, y: 0.5 }
  });
}
    save();
    render();
  }
}

// linia 1 aceasta functie bifeaza sau debifeaza un task ca finalizat, iar daca il bifez ca finalizat declanseaza animatia de confetti

// linia 2 task ul primeste un id si cauta in array ul de tasks exact task ul cu acel id, find() scaneaza array ul si returneaza primul element
// care corespunde conditiei
// linia  3 si 4 (if (t) ) verifica daca task ul a fost gasit, (t.done = !t.done) aceasta linie inseamna inversul adica 
// daca done era falase devine true, iar daca done era true deviene false, adica acelasi click BIFEAZA si DEBIFEAZA
// liniile de la 5 pana la 23 declanseaza conffeti atunci cand task ul devine finalizat, nu si cand il debifez. 
// sunt 3 confettti simultan care lanseara confeti din 3 directii : origin unde x: 0  - din stanga ; x: 1 din dreapta si x: 0.5 din centru
// libraria confetti vine din fisierul  "confetti.browser.min.js"
// linia 24 si 25 save si render adica salveaza in localStorage si redeseneaza lista ca sa arate noua stare de vizual, de exemplu task-ul apare taiat
// particleCount sunt numarul de bucatele de confetti lansate cu cat mai mare cu atat e mai dens
// angle: este directia in care sunt lansate bucatelele, in grade ca un cerc (0 grade spre dreapta) (90 grade in sus) (60 grade diagonala stanga sus  din coltul stang)
// (120 de grade diagonala dreapta sus din coltul dreapta)
// spread cat de imprastiate sunt bucatelele fata de directia principala, un spread mic inseamna un jet ingust, iar un spread mare
// face ca bucatelele sa zboare in toata directiile
// la origin punctul de unde pornesc confetti iar valorile sunt intre 0 si 1(x: 0  marginea din stanga ecranului) (x: 1 marginea din dreapta)
// (x: 0.5 centrul ecranului) si (y:05 mijlocul pe verticala)
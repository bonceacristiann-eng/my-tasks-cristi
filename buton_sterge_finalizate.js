
document.getElementById('clearDone').addEventListener('click', clearDone);
document.getElementById('exportBtn').addEventListener('click', exportCSV);
document.getElementById('bgApply').addEventListener('click', setBackground);
document.getElementById('bgClear').addEventListener('click', clearBackground);
document.getElementById('bgInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') setBackground();
});


// !!!!!!! BUTOANE!!!!!!!!!!!

// linia 2 este  cand dau click  pe butonul "sterge finalizate" sterge toate task-urile finalizate
// linia 3 este cand dau click pe butonu "Export csv" executa functia exportCSV() din fisierul export_csv.js
// linia 4 cand dau click pe butonul "Aplica" din "Fundal personalizat" executa functia setBackground() din background_personalizat.js si seteaza fundalul
// linia 5  cand dau click pe "Reseteaza din "Fundal personalizat" executa functia clearBackground () din background_personalizat
// si sterge imaginea de fundal

// liniile 6 si 7  este campul URL ului pentru Fundal personalizat si verifica daca dau ENTER, daca da, executa setarea fundalului pe ecran
// deci pot sa nu mai dau click pe "Aplica" pot sa dau doar enter
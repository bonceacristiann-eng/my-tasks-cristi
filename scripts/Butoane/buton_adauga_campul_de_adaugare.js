// Buton adaugare
document.getElementById('addBtn').addEventListener('click', addTask);

// Enter in campul de adaugare
document.getElementById('taskInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

// linia 2 executa functia addTask() din fisierul adaugare_task.js cand dau click pe butonu "+ Adauga"
// liniile 5, 6 si 7 verifica campul da adugare task unde este placeholder-ul "Adauga un task nou.." cand tastezi orice in acel camp
// verifica daca este "ENTER", iar daca da executa addTask()
// deci sunt doua moduri de a adauga un task, click pe butonul "+adauga" sau apas Enter dupa ce am tastat in campul de adaugare task
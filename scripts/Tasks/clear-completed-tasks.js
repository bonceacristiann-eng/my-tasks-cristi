function clearDone() {
  tasks = tasks.filter(t => !t.done);
  save();
  render();
}

// aceasta sterge toate task-urile finalizate dintr-o data
// creaza un array nou pastrand doar task-urile unde done este false, adica cele nebifate, toate taskuri;le bifate dispar
// save si rander acelasi lucru ca intotdeauna salveaza si afiseaza lista 

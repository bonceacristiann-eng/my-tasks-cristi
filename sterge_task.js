function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
  render();
}

// aceasta functie sterge task-ul din lista
// creeaza un aray nou cu toate taskurile mai putin cel cu id-ul primit
// save salveaza nol array in localStorage
// render() afiseaza lista pe ecran actualizata
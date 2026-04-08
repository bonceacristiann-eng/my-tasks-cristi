// Buton Salveaza modal
document.getElementById('modalSave').addEventListener('click', saveEdit);

// Buton Anuleaza modal
document.getElementById('modalCancel').addEventListener('click', closeModal);

// Click pe fundalul modalului,  cand dau click inafara ferestrei de editeaza task se inchide automat
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// Enter in campul de editare adica executa nu este necesar sa dau click pe butonul Salveaza
document.getElementById('editInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') saveEdit();
});

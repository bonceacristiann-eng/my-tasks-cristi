function applyBackground(url) {
  document.body.style.backgroundImage = `url('${url}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundRepeat = 'no-repeat';
}

function setBackground() {
  const url = document.getElementById('bgInput').value.trim();
  if (!url) return;
  applyBackground(url);
  localStorage.setItem('bgImage', url);
}

function clearBackground() {
  document.body.style.backgroundImage = 'none';
  localStorage.removeItem('bgImage');
  document.getElementById('bgInput').value = '';
}


// !!!!! Aici sunt definite doar cele 3 functii care stiu ce sa faca dar nu si cand sa o faca !!!!!!!


// linia 1 (functia apply backgorund url) primeste un url adica link ul unei imaginii si o aplica ca fundal pe intreaga pagina
// linia 2 (background image) seteaza imaginea de fundal, adica introduc url-ul in camp ul pentru fundal personalizat si seteaza imaginea
// linia 3 ( ...'cover' ) spune ca imaginea se intinde sa acopere toata pagina fara spartii goale, chiar daca se taie putin pe margini
// linia 4 ( ' center ' ) centreaza imaginea si daca se taie , se taie egal pe toate partile
// linia 5 ( ' fixed ' ) face ca imaginea sa ramana fixa pe loc cand scrollez, adica continutul se misca dar fundalul nu
// linia 6 ( 'no-repeat') spune ca imaginea nu se repeta in mozaic daca e mai mica decat ecranul

// linia 9  (setBackground) aceasta este functia care in momentul in care bagi URL ul in campul de fundal personalizat si apoi apas pe
// butonul "Aplica" seteaza fundalul cu imaginea din link
// linia 10 si 11 citeste  url ul din campul de input, iar daca este gol opreste functia
// linia 12 apeleaza functia de mai sus de la linia 1 ca sa aplice vizual fundalul
// linia 13 salveaza URL ul in localStorage, astfel incat la urmatoarea deschidere a aplicatie, fundalul sa se restaureze automat

// linia 16 functia clearbackground reseteaza totul, adica sterge fundalul
// linia 17 elimina imaginea de fundal, adica pagina revine la fundalul implicit
// linia 18 sterge URL-ul salvat din localStorage, spre deosebire de linia 13 setItem care adauga sau suprascire, removeItem sterge complet
// linia 19 goleste campul de input

// deci pe scurt introduc url ul in camp apas pe butonu "Aplica", setBackground () citeste URL-ul, applyBackground face ca imaginea sa
// sa apara pe ecran, localStorage salveaza URL ul adica sa ramana acolo si dupa refresh sau dupa ce inchid pagina
// iar daca apas pe butonul "reseteaza"  fundalul este eliminat si sters din local storage


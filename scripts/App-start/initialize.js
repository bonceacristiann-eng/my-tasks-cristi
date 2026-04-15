render();
const savedBg = localStorage.getItem('bgImage');
if (savedBg) {
  applyBackground(savedBg);
  document.getElementById('bgInput').value = savedBg;
}


// linia 1 cand pagina se incarca apeleaza render() care construieste si afiseaza toate cardurile pe ecran salvate in localStorage, 
// fara aceasta linie pagina s-ar deschide goala chiar daca am task-uri salvate
// cauta in localStorage daca exista bgImage si daca este salvat un URL de funda, daca e salvat savedBg contine URL, daca nu e salvat
//savedBg este null
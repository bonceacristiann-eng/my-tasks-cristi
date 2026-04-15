function escHtml(str) { 
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// fara aceasta functie textul poate deveni cod, adica fara protectia aceasta browserul executa scriptul si 
// previne  XSS (Cross-Site Scripting), adica nu poate introduce cod in campurile text
// Caracterele speciale HTML sunt inlocuite cu entitatile lor sigure
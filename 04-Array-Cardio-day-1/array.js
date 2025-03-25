const inventores = [
    { nombre: 'Albert', apellido: 'Einstein', año: 1879, pasado: 1955 },
      { nombre: 'Isaac', apellido: 'Newton', año: 1643, pasado: 1727 },
      {nombre: 'Galileo', apellido: 'Galilei', año: 1564, pasado: 1642 },
      {nombre: 'Marie', apellido: 'Curie', año: 1867, pasado: 1934 },
      {nombre: 'Johannes', apellido: 'Kepler', año: 1571, pasado: 1630 },
      {nombre: 'Nicolaus', apellido: 'Copernicus', año: 1473, pasado: 1543 },
      {nombre: 'Max', apellido: 'Planck', año: 1858, pasado: 1947 },
      {nombre: 'Katherine', apellido: 'Blodgett', año: 1898, pasado: 1979 },
      {nombre: 'Ada', apellido: 'Lovelace', año: 1815, pasado: 1852 },
      {nombre: 'Sarah E.', apellido: 'Goode', año: 1855, pasado: 1905 },
      {nombre: 'Lise', apellido: 'Meitner', año: 1878, pasado: 1968 },
      {nombre: 'Hanna', apellido: 'Hammarström', año: 1829, pasado: 1909 }
    ];


    const personas = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ]; 


// Array.filter()    
// 1. Filtrar la lista de inventores para aquellos que nacieron en el siglo XVI.
 
const lista = inventores.filter(inventor => (inventor.año >= 1500 && inventor.año < 1600));

console.table(lista);

//Array.map()
 // 2. Danos una serie de nombres y apellidos de los inventores.
const nombreCompleto = inventores.map(inventor => `${inventor.nombre}${inventor.apellido}`);
console.log(nombreCompleto);

//array.sort()
// 3. Ordena a los inventores por fecha de nacimiento, de mayor a menor
// expecion ...   // const ordered = inventors.sort(function(a, b) {
    //   if(a.year > b.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });

const ordenar =inventores.sort((a, b) => a.año > b.año ? 1 : -1);
console.table(ordenar);

//array.reduce()
 // 4. ¿Cuántos años vivieron todos los inventores en total?
 const totalAños = inventores.reduce((total, inventor) => {
    return total + (inventor.pasado - inventor.año);
 }, 0);
 console.log(totalAños)

  // 5. Ordenar a los inventores por años de vida
 const oldest = inventores.sort(function(a, b){
    const lastInventor = a.pasado - a.año;
    const nextInventor = b.pasado - b.pasado;
    return lastInventor > nextInventor ? -1 : 1;
 });
 console.table(oldest)

  // 6. crea una lista de bulevares en París que contienen 'de' en cualquier parte del nombre
 // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

     // 7. ordenar ejercicio
     // Ordenar las personas alfabéticamente por apellido
     const alpha = personas.sort((lastOne, nextOne) => {
        const [aNombre, aApellido] = lastOne.split(', ');
        const [bNombre, bApellido] = nextOne.split(', ');
      return aNombre > bNombre ? 1 : -1;
     });
     console.log(alpha)

      // 8. Reducir el ejercicio
 //Resumir las instancias de cada uno de estos

 const datos = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

 const transportation = datos.reduce(function(obj, item) {
   if (!obj[item]) {
     obj[item] = 0;
   }
   obj[item]++;
   return obj;
 }, {});

 console.log(transportation);
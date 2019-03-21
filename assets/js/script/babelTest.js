function printSomeStuff() {
  const elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];


//change stuff
  const map = elements.map((element) => {
    return '<hr>' + element + ' <br><hr>';
  });

  const testDiv = document.getElementById('theTest');
  testDiv.innerHTML = map;
}

document.addEventListener('DOMContentLoaded', function() {
  printSomeStuff();
});

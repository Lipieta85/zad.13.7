var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, files) {
  if (err) throw err;
  console.log('Zawartość katalogu zapisana w pliku tekst2.txt');
  fs.writeFile('./tekst2.txt', files, function(err) {
    if (err) throw err;
    console.log('Dane po zapisie: '+ files);
  });
});
const fs = require('fs');

// Read Files
/*fs.readFile('./blog1.txt', (err, data) => {
           if (err) {
            console.log(err);
            return;
           }
           console.log(data.toString());
});
console.log("Last Line");*/


// Write file
/*fs.writeFile('./blog1.txt', 'What a wonderful day to praise God for showing us HIS Grace and MERCY all the days of our life.', () => {
    console.log("File was written");
});

fs.writeFile('./blog2.txt', 'What a wonderful day to praise God for showing us HIS GRACE and MERCY all the days of our life.', () => {
    console.log("File was written");
});*/


// Directories
/*if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder created");
    });
} else {
    fs.rmdir('./assets', (err)  => {
        if (err) {
            console.log(err);
        }
        console.log("Folder Deleted!")
    });
}*/


// Delete Files
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
      if (err) {
        console.log(err);
      }
      console.log("File Deleted!!");
    });
}

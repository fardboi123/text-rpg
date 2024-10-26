fetch("src/tests/txt-fetch-test/read-txt.txt")
.then(response => response.text())
.then(newText => console.log(newText))
const axios = require('axios');
const fs = require('fs');

axios.get('https://api.github.com/users/<USERNAME>')
  .then(response => {
    const file_text = response.data.login + " " + response.data.name
    const nome = Date.now()
    console.log(response.data.login);
    console.log(response.data.name);
    fs.writeFile('./fileCreated/' + nome + '.txt', file_text, err => {
      if (err) {
        console.error(err)
        return
      }
    })
    
  })
  .catch(error => {
    console.log(error);
  });
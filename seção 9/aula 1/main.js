class Pessoa{
    constructor(nome,sobrenome){
        this.nome=nome
        this.sobrenome=sobrenome
    }
}

//npm init -y
//npm install --save-dev @babel/cli @babel/present-env @babel/core
//npx babel main.js -o bundle --presets=@babel/env
//npx babel main.js -o bundle --presets=@babel/env

// packag.json "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"

// npm rum babel
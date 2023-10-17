# Fit Bem
* É um projeto desenvolvido em conjunto com o SENAC.
* Sua principal finalidade é atender a demanda em desenvolver um projeto funcional para a disciplina PI.

## Algumas das tecnologias utilizadas pelos desenvolvedores deste projeto:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JSON](https://img.shields.io/badge/json-purple.svg?style=for-the-badge&logo=json&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-392e69.svg?style=for-the-badge&logo=yarn&logoColor=white)


## Instalação e configuração do aplicativo
### Requisitos necessários e previamente instalados
* ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) - **versão mais atual**;
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) - **versão LTS mais atual (recomendamos a versão 18.18.0)**;
* ![Yarn](https://img.shields.io/badge/yarn-392e69.svg?style=for-the-badge&logo=yarn&logoColor=white) - **versão mais atual**;

### Clonando o projeto
* Usando o git, faça um clone do projeto: https://github.com/rodrigo-ag-dev/fitbem

### Preparando o backend - API
* Pelo console (Windows use o PowerShell ou CMD; Linux ou MacOS use o Terminal.) Acesse a pasta onde você fez o clone do git e em seguida acesse a subpasta **back**.

* Instale as dependências **yarn install**;

* Crie o arquivo **.env** na pasta **back**, e inclua o conteúdo abaixo
  - NODE_DB_CLIENT='sqlite3'
  - NODE_DB_FILENAME='./src/database/sqlite.db'

* Para instanciar o serviço em máquina local, use o comando **yarn dev**

### Visualizando o portal
* Basta abrir, em seu navegador preferido, o arquivo **index.html** contido dentro da subpasta **front** da pasta você fez o clone

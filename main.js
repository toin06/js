console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toninho DIVO</title>
    <style>
        body {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .name {
            margin: 20px;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .date {
            margin-top: 10px;
            font-size: 20px;
            color: #555;
        }
    </style>
</head>
<body>
    <script>
        const names = [
            { size: '30px', color: '#FF5733' },
            { size: '40px', color: '#33FF57' },
            { size: '50px', color: '#3357FF' },
            { size: '25px', color: '#FF33A1' },
            { size: '35px', color: '#FFDA33' },
            { size: '45px', color: '#A133FF' },
        ];

        const date = '20/09/2024';

        names.forEach(({ size, color }) => {
            const nameDiv = document.createElement('div');
            nameDiv.className = 'name';
            nameDiv.style.fontSize = size;
            nameDiv.style.color = color;
            nameDiv.innerHTML = `Toninho DIVO<br><div class="date">${date}</div>`;
            document.body.appendChild(nameDiv);
        });
    </script>
</body>
</html>

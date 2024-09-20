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
    <title>Imagens Aleatórias - BLACKPINK</title>
    <style>
        body {
            position: relative;
            overflow: hidden;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .image {
            position: absolute;
            max-width: 150px; /* Tamanho máximo da imagem */
            max-height: 150px; /* Tamanho máximo da imagem */
        }
    </style>
</head>
<body>
    <script>
        const images = [
            'https://link-da-imagem-1.jpg', // Substitua com URLs das imagens da Lalisa
            'https://link-da-imagem-2.jpg', // Substitua com URLs das imagens da Lalisa
            'https://link-da-imagem-3.jpg', // Substitua com URLs das imagens da BLACKPINK
            'https://link-da-imagem-4.jpg', // Substitua com URLs das imagens da BLACKPINK
            // Adicione mais URLs conforme necessário
        ];

        function getRandomPosition() {
            const x = Math.random() * (window.innerWidth - 150); // Ajuste conforme o tamanho máximo
            const y = Math.random() * (window.innerHeight - 150); // Ajuste conforme o tamanho máximo
            return { x, y };
        }

        function createImage() {
            const img = document.createElement('img');
            const position = getRandomPosition();
            const randomIndex = Math.floor(Math.random() * images.length);
            
            img.src = images[randomIndex];
            img.classList.add('image');
            img.style.left = `${position.x}px`;
            img.style.top = `${position.y}px`;
            img.style.transform = 'translate(-50%, -50%)'; // Centraliza a imagem na posição
            
            document.body.appendChild(img);

            // Remover a imagem após 5 segundos
            setTimeout(() => {
                img.remove();
            }, 5000);
        }

        setInterval(createImage, 2000);
    </script>
</body>
</html>

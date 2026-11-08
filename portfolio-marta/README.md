# Portfólio pessoal — Marta

**Aluna:** Marta

## Descrição do projeto
Este projeto é um portfólio pessoal desenvolvido para apresentar Marta, sua área de interesse em Direito da Família, projetos, habilidades e formas de contato. O visual utiliza tons de azul, tipografia de destaque e organização responsiva.

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3
- Google Fonts

## Estrutura dos arquivos
- `index.html`: estrutura e conteúdo das seções.
- `style.css`: cores, tipografia, layout responsivo e efeitos visuais.
- `script.js`: animações de entrada, ano automático no rodapé e comportamento do menu mobile.
- `assets/marta.png`: imagem de perfil (quando incluída).

## Como o projeto funciona
O menu superior utiliza links âncora para navegar pelas seções Perfil, Projetos, Habilidades e Contato. O Bootstrap fornece o sistema de grid responsivo, os estilos de navegação e o menu recolhível em telas menores. O CSS personaliza a identidade visual e os cartões. O JavaScript ativa os efeitos de entrada e atualiza automaticamente o ano do rodapé.

## Recurso novo adicionado
Foi adicionada uma animação de entrada suave para os elementos das seções, além do efeito de elevação dos cartões de projetos ao passar o mouse.

### Como o recurso foi implementado
No HTML, os elementos que devem aparecer com animação recebem a classe `reveal`. No CSS, essa classe começa com opacidade zero e deslocamento vertical. Quando o elemento entra na área visível da tela, o JavaScript utiliza a API `IntersectionObserver` para adicionar a classe `visible`. Essa classe aplica a transição e revela o conteúdo. Nos cartões, a pseudoclasse `:hover` aplica elevação e sombra. O efeito respeita a preferência do sistema por movimento reduzido.

## Antes de publicar
1. Complete a apresentação com sua formação e objetivos profissionais.
2. Substitua os textos-modelo dos projetos por trabalhos que você realmente realizou.
3. Confira se o telefone exibido está correto e atualize-o, se necessário.
4. Se desejar, substitua `assets/marta.png` pela sua foto.
5. Confira o site em computador e celular.

## Publicação no GitHub Pages
1. Crie um repositório público no GitHub, por exemplo `portfolio-marta`.
2. Envie todos os arquivos e a pasta `assets` para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)` e clique em **Save**.
6. Aguarde a publicação. O endereço costuma seguir o formato `https://SEU-USUARIO.github.io/portfolio-marta/`.
7. Atualize este README com o link real do site publicado.

## Links da entrega
- **Repositório GitHub:** (cole aqui o link do repositório)
- **Site publicado:** (cole aqui o link do GitHub Pages)


<img src="https://github.com/pedropaulodf/nlw5-gameplay/blob/master/readme/app-completo.gif" alt="App finalizado" width="200"/>


![cover](readme/app-completo.gif)

# NLW5 • React Native • App: GamePlay

Projeto em desenvolvimento na NLW5#Together.

## Dia 1:
Explicação de conceitos e funcionalidades do React e React Native e a construção da SplashScreen e tela de SignIn. 

### Obs. pessoal:
Essa é minha terceira NLW e no primeiro dia já aprendi uma nova forma de organizar meus projetos, atalhos de funções na props e novos conceitos em Typescript (que está ficando cada vez mais simples de entender).

### Preview
<img src="https://github.com/pedropaulodf/nlw5-gameplay/blob/master/readme/app-day1.png" alt="App Preview - Day 1" width="200"/>

## Dia 2:
Esse dia foi para a criação das rotas e tela de Home do app, criação de muitos components para facilitar a criação das outras telas. Além de ensinar a usar o SVG no React Native.

### Obs. pessoal:
Em 2:40 de aula, realmente um aulão, muuita coisa aprendida: aprendi gradiente, algo que estava bastante curioso para ver como funcionava, descobri uma lib nova que ajuda no ajuste do notch dos telefones, principalmente iPhone, como o Rodrigo criou bastante components, deu pra ver onde preciso melhorar em organização e criação de components. Também continuei aprendendo sobre Typescript, que é uma mão na roda. Ah, sem esquecer de uma nova forma aprendida de usar o SVG.

### Preview
<img src="https://github.com/pedropaulodf/nlw5-gameplay/blob/master/readme/app-day2.png" alt="App Day 2" width="200"/>

## Dia 3:
Criação de mais duas páginas, a de criação do agendamento de partidas e do Modal. Também fizemos vários ajustes no código e layout das telas criadas.

### Obs. pessoal:
Aula sólida, o Rodrigo ensina muito bem. Aprendi como usar o Modal do Expo, muito bom. Continuo abrindo a minha mente em como usar melhor os recursos do React Native e como manter o projeto conciso, padronizado e bem organizado. Ansioso para as próximas aulas, para preencher todos os dados de maneira dinâmica.

### Preview
<img src="https://github.com/pedropaulodf/nlw5-gameplay/blob/master/readme/app-day3-1.png" alt="App Day 3-1" width="200"/>
<img src="https://github.com/pedropaulodf/nlw5-gameplay/blob/master/readme/app-day3-2.png" alt="App Day 3-2" width="200"/>

## Dia 4:
Login do app com o Discord. Login usando o OAuth2 junto com o Expo AuthSession de forma manual, onde podemos usar em vários tipos de implementações. Criação de React Hooks.

### Obs. pessoal:
Aula sensacional, entendi como funciona o OAuth2, como fazer autenticação, como usar rotas protegidas, mais noções de organização de pastas, como services, hooks, configs e mais. Aprendi a como criar e como funciona um Hook personalizado.

## Dia 5:
O última dia de aula o professor fez um recap de tudo que tínhamos feito até o momento, corrigiu bugs e finalizados o app com algumas dicas para a milha extra.

### Obs. pessoal:
Só tenho a agradecer a equipe da Rocketseat, em especial o Rodrigo. Essa NLW#Together me ensinou bastante, autenticação com oAuth2, como usar melhor SVG no RN, React Hooks, como organizar meu projeto melhor e como componentizar melhor meu app. Aprendi a como usar melhor o AsyncStorage (que já vou aplicar no app no pessoal que estou desenvolvendo junto com o oAuth2 também!). Ele deu dicas sobre características de situações no Android e iOS e como foi tudo em Typescript, está cada vez mais fácil de entender e mais motivado a começar a usar ele de verdade. Obrigado pessoal!

### Milhas extras:
- Deleção de um agendamento da lista.
- Validação do formulário com a desabilitação do botão de enviar.
- Uso da lib react-native-easy-toast para mostrar Toasts para o usuário na validação do form.
- Implementação do modal de Logout.
- Uso do Botão Pressable para pode usar o component Button em mais locais.
- Ajuste com 3 pontos no final dos nomes das partidas agendadas, quando o nome for grande.
- Implementação da imagem dinâmica e com sombra nos detalhes do agendamento.






## 💻 Projeto
Aplicativo para lhe ajudar a conectar-se e organiza o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.


## :hammer_and_wrench: Features 

-   [ ] Autenticação Social OAuth2 com servidor do Discord.
-   [ ] Obtém perfil do usuário cadastro no Discord (username e avatar);
-   [ ] Lista os servidores do Discord que o usuário faz parte;
-   [ ] Permite realizar o agendamento de partidas;
-   [ ] Permite filtrar as partidas por categoria;
-   [ ] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
-   [ ] Compartilha o convite para ingressar no servidor do usuário;
-   [ ] Permite redirecionar o usuário para o seu próprio servidor;
-   [ ] Disponibiliza a função de Logout.


## ✨ Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo
-   [ ] Context API
-   [ ] Async Storage
-   [ ] Vector Icons
-   [ ] React Native Svg e Svg Transform
-   [ ] Axios
-   [ ] Gradient colors
-   [ ] OAuth2 Discord 
-   [ ] Expo Google Fonts
-   [ ] React Navigation Stack
-   [ ] React Native Gesture Handler
-   [ ] Expo Authentication
-   [ ] React Native Share
-   [ ] Deep Link


## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).
 
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```


[Github do Professor do NLW#Together Trilha React Native](https://github.com/rodrigorgtic/gameplay-nlw-together)
# Campeonato-Brasileiro

Vue.js é um framework Javascript usado para construir interfaces reativas, ou seja: são sites que reagem ao usuário de forma quase que instantânea.

Podemos construir Single Pages Applications com Vue. Também chamadas de SPAs, são sites de uma página só. Esses sites não recarregam ao trocar de tela e dão a sensação do usuário estar num aplicativo por conta disso.

Um componente é uma pequena parte de uma tela. Uma tela pode possuir vários componentes.

No Vue, um componente contém HTML, CSS e Javascript, tudo no mesmo arquivo.

## Adicionando Recursos

- Para adicionar rotas rode o comando "vue add router"
- Para adicionar o Vuetify rode o comando "vue add vuetify" e escolha as opção recomendada
- Não pode esquecer de executar o "npm install" antes de executar os projetos

Para verificar a versão do Node, abra o CMD e digite node --version.

## Inicio:

Primeiro, rode o comando para iniciar o servidor do Vue:

"npm run serve"

Dica: você pode rodar o npm run serve em um terminal separado do VS Code.

Não esqueça de rodar esse comando dentro da pasta que acabou de criar.


## Interações:

Em um site, fazemos interações na tela como cliques. Para que o Vue interaja com o usuário, usamos a diretiva v-on.

No Javascript, essas interações são chamadas de eventos. Existem muitos eventos no Javascript, mas os mais comuns são: clique, dois cliques e hover (passar o mouse por cima)


## Métodos:

Obs.: Dentro de methods estão as funções que utilizaremos no componente.

Cada nova função deve ser separada por uma vírgula.


## Create:

created() é uma função do ciclo de vida do componente.

Se queremos que algo carregue assim que o componente é criado, usamos created()


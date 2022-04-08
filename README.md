# 20221_fatec_ipi_paoo_lista_exercicios_1
Lista de exercícios para nota paoo

1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
  receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
  operação. Faça a implementação usando a palavra function para todas elas.

2. Refaça o exercício 1 usando arrow functions.

3. Crie um objeto JSON que abriga todas as operações do exercício 2.

4. Escreva um script que apresenta as seguintes operações para o usuário:
    1- Soma
    2- Subtração
    3- Multiplicação
    4- Divisão
    5- Sair
  O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
  inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
  o objeto JSON do exercício 3 para realizar as operações aritméticas.

5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
  não é o mesmo utilizado em aula.
  https://openweathermap.org/current
  Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
  atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
  opções para o usuário:
    1- Digitar latitude e longitude
    2- Sair
  O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
  informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
  temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
  de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
  Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
  e de tomar o cuidado de não armazená-lo no sistema de controle de versão.

6. Refaça o exercício 5 usando a construção async/await.

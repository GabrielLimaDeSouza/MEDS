# Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="4-Gestão-Configuração.md"> Ambiente e Ferramentas de Trabalho</a></span>

## Tecnologias Utilizadas

Para a implantação da solução foram usadas as seguintes tecnologias:

- Linguagens de marcação: </br>
HTML,CSS 
- Linguagens de programação: </br>
JavaScript
#
- API's: </br>
Full Calendar API
#
- Framework CSS: </br>
Bootstrap 
#
- Biblioteca JavaScript: </br>
jQuery




## Arquitetura da solução


A imagem a seguir ilustra o caminho do usuário em nosso sistema. Caso o osuário opte por acessar o botão "Sou Visitante" ele será direcionado para a tela de agendamento de visitas. Caso opte pelos botões "Sou Médico" ou "Sou Paciente" ele será levado a um menu de opções, onde poderá criar sua conta, acessando o cadastro de médico ou o cadastro de paciente, ou realizar o login, após o login o usuário será redirecionado a tela do médico ou a tela do paciente dependendo da sua escolha na tela inicial. 
A tela do paciente conta com três opções, agendamento de consultas, onde poderá agendar suas consultas, solicitação de laudo, onde ele poderá solicitar um laudo a qualquer um dos médicos cadastrados na plataforma e exames, onde obterá seus resultados de exames. </br>
A tela do médico conta com quatro opcões, internações, onde é possível criar,excluir ou alterar qualquer um dos internados do sistema, consultas, onde poderá ver as consultas agendadas com aquele determinado médico, acompanhamento onde poderá ver a listagem de internados com possibilidade de filtragem por tipo sanguíneo e categoria de risco, e por fim, a agenda, onde o médico poderá cadastrar e ver seus horários disponíveis. Na tela de acompanhamento, ao clicar no nome de um paciente listado, a página é redirecionada ao histórico médico daquele determinado paciente, onde é possível ver a data dos registros e adicionar arquivos de exames em PDF, observações.</br>
Em ambas as telas, paciente e médico, é disponível no cabeçalho o botão "Notificações", ao qual o usuário pode ver solicitações e atualizações feitas ao seu perfil. Na tela do médico, após um paciente solicitar um laudo para aquele determinado médico, a solicitação de laudo aparecerá em "Notificações", mostrando o nome do paciente que fez a solicitação e a mensagem deixada por ele.</br>

![Meds USer  ok](https://user-images.githubusercontent.com/90854062/146243762-85979d30-8e5d-4a11-999d-b205a1eb6aab.jpg)

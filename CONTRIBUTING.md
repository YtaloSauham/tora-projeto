# Contribuindo
<p>
  Todas as contribuições, relatórios de bugs, correções de bugs, melhorias na documentação, melhorias e ideias são bem-vindas.
</p>
  
<p>
  Se você é novo no TORA ou desenvolvimento de código aberto, recomendamos acessar a guia <i>"issues"</i> do GitHub para encontrar problemas de seu interesse. Depois de encontrar um problema interessante, você pode voltar aqui para configurar seu ambiente de desenvolvimento.
</p>
<br>

## Trabalhando com o código
<hr>
<p>
Agora que você tem um problema que deseja corrigir, aprimoramento para adicionar ou documentação para melhorar, você precisa aprender a trabalhar com o GitHub e a base de código do TORA.
</p>
<br>

## Introdução ao Git
<hr>
<p>
O GitHub tem instruções para instalar o git, configurar sua chave SSH e configurar o git. Todas essas etapas precisam ser concluídas antes que você possa trabalhar perfeitamente entre seu repositório local e o GitHub.
</p>
<br>

## Bifurcação
<hr>
<p>
Você precisará de seu próprio fork para trabalhar no código. Vá para a página do projeto TORA e aperte o botão fork. Você vai clonar seu fork para sua máquina:

~~~git
git clone https://github.com/seu-nome-de-usuario/tora-projeto.git tora-seunome
cd tora-seunome
git remote add upstream https://github.com/YtaloSauham/tora-projeto.git
git fetch upstream
~~~
</p>



<br>

## Criando uma ramificação
<hr>
<p>
Você deseja que sua ramificação principal reflita apenas o código pronto para produção, portanto, crie uma ramificação de recursos para fazer suas alterações. Por exemplo:

~~~git
git checkout -b nova-funcao
~~~
</p>



<p>
Isso altera seu diretório de trabalho para o ramo de recursos novos em folha. Mantenha todas as alterações nesta ramificação específicas para um bug ou recurso, para que fique claro o que a ramificação traz para o TORA. Você pode ter muitos novos recursos brilhantes e alternar entre eles usando o comando git checkout.
</p>
<br>
<p>
Ao criar esta ramificação, certifique-se de que sua ramificação principal esteja atualizada com a versão principal upstream mais recente. Para atualizar sua ramificação principal local, você pode fazer:

~~~git
git checkout main
git pull upstream main --ff-only
~~~
</p>



<br>

## Confirmando seu código
<hr>
<p>
Depois de fazer as alterações, você pode vê-las digitando:

~~~git
git status
~~~
</p>


<br>

<p>
Por fim, faça commit de suas alterações em seu repositório local com uma mensagem de commit explicativa:

~~~git
git commit -m "sua mensagem de commit aqui"
~~~
</p>


<br>

## Enviando suas alterações
<hr>
<p>
Quando você quiser que suas alterações apareçam publicamente em sua página do GitHub, envie os commits do branch de recursos bifurcados:

~~~git
git push origin nova-funcao
~~~
</p>
<p>
Agora seu código está no GitHub, mas ainda não faz parte do TORA. Para que isso aconteça, um pull request precisa ser enviado no GitHub.
</p>

<br>

## Faça um pull request
<hr>
<p>
Se tudo estiver correto, você está pronto para fazer uma solicitação pull. Uma solicitação pull é como o código de um repositório local fica disponível para a comunidade GitHub e pode ser visualizado e, eventualmente, mesclado na versão principal. Essa solicitação pull e suas alterações associadas serão eventualmente confirmadas na ramificação principal e disponibilizadas na próxima versão. Para enviar uma solicitação pull:



<ol>
<li>Navegue até seu repositório no GitHub
<li>Clique no botão <i>Compare & pull request</i></li> 
<li>Você pode então clicar em <i>Commits</i> e para se certificar de que tudo está bem uma última vez <i>Files Changed</i>
<li>Escreva um título descritivo 
<li>Clique em <i>Send Pull Request</i>
</ol>
Essa solicitação vai para os mantenedores do repositório e eles revisarão o código.
</p>




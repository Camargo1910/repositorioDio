## aula 2

com git status, é possivel verificar se os arquivos foram alterados

se iniciar um git indevidamente é possivel faze-lo via terminal com o comando rm -rf .git

para restaurar um arquivo o comando é git restore

para alterar o texto do ultimo commit é git commit --amend -m "novo texto"

para desfazer todo o commmit, se usa o git reset: ele tem 3 niveis

git reset --soft (id do commit - rash anterior ao que deseja excluir), exclui o comit posterior ao indicado
git reset --mixed (id do commit - rash anterior ao que deseja excluir), exclui as alteraçoes inclusive o commit indicado, mas mantem os arquivos rastreados
git reset --hard(id do commit - rash anterior ao que deseja excluir) excluir e limpa a arvore de trabalho
git pull é utilizado para baixar as atualizaçoes do  seu repositorio remoto para o local(PC)

git reflog, é possivel verificar o historico
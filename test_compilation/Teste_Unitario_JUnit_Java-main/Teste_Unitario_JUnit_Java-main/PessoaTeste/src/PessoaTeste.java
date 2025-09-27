class Pessoa {

    //construtor, atributos e outros métodos

    public boolean ehMaiorDeIdade(){
        return idade > 18;
    }
}

class PessoaTeste {

    @Teste
    void validaVerificacaoDeMaiorIdade() {
        Pessoa joaozinho = new Pessoca("João", LocalDate.of(2004, 1, 1));
        Assertions.assertTrue(joaozinho.ehMaiorDeIdade());

    }
}


    public class Main {
        public static void main(String[] args) {
            Veiculo carro = new Veiculo("ABC-1234", 2022);
            carro.exibirDados();

            Caminhao caminhao = new Caminhao("XYZ-5678", 2020, 4);
            caminhao.exibirDados();

            Onibus onibus = new Onibus("DEF-9012", 2018, 40);
            onibus.exibirDados();
        }

    }



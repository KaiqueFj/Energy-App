# Energy-App – Gestão Sustentável de Energia Residencial

## Descrição do Projeto

O **Energy-App** é um aplicativo móvel desenvolvido com o objetivo de auxiliar os usuários residenciais a monitorar, controlar e otimizar o consumo de energia elétrica de maneira eficiente e sustentável. Através da integração de dados em tempo real sobre consumo de energia, geração de energia renovável (como painéis solares) e com funcionalidades inteligentes de recomendações, o app proporciona uma experiência interativa para promover a economia de energia e a redução de custos.

O **Energy-App** visa ajudar os usuários a fazer escolhas mais informadas sobre seu consumo de energia, promovendo práticas mais ecológicas e econômicas dentro de casa.

## Funcionalidades do Aplicativo

### 1. **Monitoramento em Tempo Real**

- Exibe o **consumo de energia** atual em kWh e o **custo estimado** em tempo real.
- O usuário pode monitorar o consumo dos dispositivos conectados, com a possibilidade de entrada manual de dados.
- Integra-se com **dispositivos IoT** (se possível), para calcular automaticamente o consumo de energia de aparelhos conectados.

### 2. **Gerenciamento de Fontes Renováveis**

- Permite visualizar a **energia gerada por fontes renováveis**, como **painéis solares**.
- O aplicativo calcula a **economia obtida** com o uso da energia solar, mostrando o impacto financeiro e ambiental das escolhas energéticas do usuário.
- Mostra a **porcentagem de energia solar** utilizada em relação ao consumo total.

### 3. **Recomendações Inteligentes**

- O app oferece **dicas personalizadas** baseadas no consumo registrado, ajudando o usuário a otimizar o uso de energia.
- Notificações inteligentes alertam o usuário sobre **picos de consumo** e sugerem ajustes para melhorar a eficiência energética e reduzir custos.
- As recomendações incluem práticas simples, como **desligar dispositivos não utilizados** ou **ajustar a temperatura do ar condicionado** para um uso mais eficiente.

### 4. **Controle Remoto de Dispositivos**

- Permite que o usuário **ligue ou desligue dispositivos eletrônicos** conectados ao sistema de IoT diretamente pelo aplicativo.
- Facilita o controle e a automação dos aparelhos em casa, otimizando o consumo energético de acordo com as preferências do usuário.

## Telas

1. **Tela Inicial**

   - Apresenta um resumo **do consumo diário** de energia e da **geração de energia renovável** (se aplicável).
   - Mostra o **custo estimado** e a **economia de energia** ao longo do dia.

2. **Gráficos Interativos**

   - Gráficos detalhados que exibem o **histórico de consumo** e a **geração de energia** ao longo do tempo.
   - O usuário pode visualizar dados diários, semanais ou mensais e acompanhar seu progresso.

3. **Tela de Dicas**

   - Acesso a dicas personalizadas para **economizar energia** com base nos hábitos do usuário.
   - Notificações e alertas sobre o uso de energia e recomendações para ajustar hábitos.

4. **Controle de Dispositivos** (Opcional)
   - Acesso a dispositivos conectados via IoT para **ligar/desligar** conforme necessário.

## Tecnologias Utilizadas

- **Frontend:**

  - **React Native** para o desenvolvimento do aplicativo mobile, garantindo uma experiência fluida tanto para Android quanto para iOS.
  - **Redux** para o gerenciamento de estado global do aplicativo.
  - **Chart.js** para a visualização de gráficos interativos sobre consumo de energia e geração solar.

- **Backend:**

  - **Firebase** para autenticação de usuários, gerenciamento de dados em tempo real e notificações push.

- **Banco de Dados:**

  - **MySQL** ou **Firebase Firestore** para armazenar dados relacionados ao consumo de energia, histórico e configurações do usuário.

- **IoT (Internet of Things):**
  - Integração com dispositivos IoT para monitoramento e controle remoto de dispositivos, possibilitando o controle de aparelhos como ar condicionado, lâmpadas e outros dispositivos conectados.

## Estrutura do Projeto

```plaintext
Energy-App/
├── frontend/                         # Código do aplicativo mobile
│   ├── src/
│   │   ├── components/               # Componentes reutilizáveis
│   │   ├── screens/                  # Telas principais (inicial, gráfico, etc.)
│   │   ├── store/                    # Gerenciamento de estado (Redux)
│   │   ├── services/                 # Serviços para interagir com o backend
│   │   └── App.js                    # Arquivo principal do React Native
│   ├── assets/                       # Imagens, ícones e recursos estáticos
│   └── package.json                  # Dependências e configurações do frontend
├── .gitignore                        # Arquivo para ignorar arquivos no Git
├── README.md                         # Documentação do projeto
└── package.json                      # Dependências e scripts principais do projeto
```

### **Banco de Dados (MySQL ou Firebase Firestore)**

- **Tabelas (MySQL):**

  - **usuarios:** Informações sobre os usuários do aplicativo.
  - **energia_residencial:** Registros diários de consumo de energia.
  - **geracao_solar:** Informações sobre a geração de energia solar.
  - **historico_energia:** Histórico de consumo total, geração solar, custos e economia.
  - **dispositivos:** Informações sobre dispositivos IoT e seu status.
  - **recomendacoes:** Recomendações inteligentes e dicas para otimizar o consumo de energia.

- **Firebase Firestore:** Alternativa para um banco de dados NoSQL, com a vantagem de sincronização em tempo real.

## Como iniciar o Projeto

### **Requisitos**

- **React Native** (para o frontend)
- **MySQL** ou **Firebase Firestore** (para o banco de dados)
- **Firebase SDK** (para notificações push e autenticação)

### **Passos para Executar**

1. **Frontend:**
   - Clone o repositório do frontend.
   - Instale as dependências com:
     ```bash
     npm install
     ```
   - Execute o aplicativo:
     ```bash
     npm run start
     ```

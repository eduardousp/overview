## Getting Started

Após clonar o projeto e instalar as dependências, o único arquivo que precisa configurar para iniciar o projeto é o `.env.local`.
A base para configurar esse arquivo é o [.env.local.example](./.env.local.example)

Alguns valores já estão preenchidos nesse arquivo, isso não é um problema.

Para preencher as outras variáveis, é preciso criar uma aplicação no Firebase (para o Firestore e FireAuth) e também um projeto no GCP (Google Cloud Platform) para lidar com o Google oAuth2 (APIs & Services
).

Sobre cada variável:

- `FIREBASE_CONFIG`: Deve ser uma string no formato JSON de um objeto com as propriedades de configuração do Firebase. Esse pode ser encontrado logo após criar a aplicação no Firebase ou nas settings dele.
- `GOOGLE_APPLICATION_CREDENTIALS_JSON`: São as credenciais de acesso de Admin ao Firebase, também em string JSON, pode seguir [esta documentação](https://firebase.google.com/docs/admin/setup#initialize-sdk). Geralmente essas credencias são fornecidas em um arquivo, só copiar o conteúdo do arquivo e converter para JSON.
- `GOOGLE_ID` e `GOOGLE_SECRET`: São as chaves de acesso ao criar uma OAuth 2.0 Client ID dentro de um projeto na GCP.

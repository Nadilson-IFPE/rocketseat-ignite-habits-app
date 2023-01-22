import axios from "axios";

export const api = axios.create({
    // NOTA: localhost como IP não vai permitir 
    // que o app funcione no Android. Deve-se adicionar
    // o IP da máquina onde está rodando o server. Com
    // o EXPO em execução, é possível ver o IP no log. Outra
    // forma de descobrir o IP é através do comando ipconfig
    // no terminal. Deve-se substituir o "localhost" a seguir pelo
    // IP obtido.
  baseURL: "http://localhost:3333",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
  },
});

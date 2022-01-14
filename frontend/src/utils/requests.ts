//Variável de ambiente que vai setar no netlify
//REACT_APP é o padrão do container - se não existir, usar o valor após o ??
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";
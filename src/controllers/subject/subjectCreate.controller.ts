// Criação de um Subject

// POST - /subjects/

// Exemplo de Requisição

// POST - /subjects/

// Corpo da Requisição

// {
//     "name": "Matemática",
//     "weekly_hours": 6,
// }

// Exemplo de Resposta

// 201 - Created
// {
//     "id": "835db4ca-8a2e-4be5-887e-65345b0c73b6",
//     "name": "Matemática",
//     "weekly_hours": 6,
//     "students": []
// }

// Casos de Erro

// 409 - Conflict - "Subject already registered" 
// Ao tentar adicionar um Subject com um nome já registrado na DB


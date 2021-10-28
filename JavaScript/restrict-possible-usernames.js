let username = "JackOfAllTrades";
let userCheck =  /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

/*
Os nomes de usuário podem usar apenas caracteres alfanuméricos.

Os únicos números no nome de usuário devem estar no final. Pode haver zero ou mais deles no final. O nome de usuário não pode começar com o número.

As letras do nome de usuário podem ser minúsculas e maiúsculas.

Os nomes de usuário devem ter pelo menos dois caracteres. Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres. */
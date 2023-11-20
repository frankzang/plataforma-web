-- Crie a tabela Aluno
CREATE TABLE IF NOT EXISTS Aluno (
  id serial PRIMARY KEY,
  ra VARCHAR(255) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  turma_id INT NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  telefone VARCHAR(255) NOT NULL,
  cpf VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  id_habilitacao INT NOT NULL,
  idStatus INT NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Inserir 5 usuários de teste
INSERT INTO Aluno (ra, nome, turma_id, endereco, telefone, cpf, email, id_habilitacao, idStatus, password)
VALUES
  ('RA001', 'Usuário 1', 1, 'Endereço 1', 'Telefone 1', 'CPF 1', 'usuario1@example.com', 1, 1, 'senha1'),
  ('RA002', 'Usuário 2', 2, 'Endereço 2', 'Telefone 2', 'CPF 2', 'usuario2@example.com', 2, 2, 'senha2'),
  ('RA003', 'Usuário 3', 3, 'Endereço 3', 'Telefone 3', 'CPF 3', 'usuario3@example.com', 3, 3, 'senha3'),
  ('RA004', 'Usuário 4', 4, 'Endereço 4', 'Telefone 4', 'CPF 4', 'usuario4@example.com', 4, 4, 'senha4'),
  ('RA005', 'Usuário 5', 5, 'Endereço 5', 'Telefone 5', 'CPF 5', 'usuario5@example.com', 5, 5, 'senha5');

import './styles.css';
import useSWR from 'swr';
import { fetchApi } from '../../data/fetchApi';
import { Box, Heading } from '@chakra-ui/react';

export default function Central() {
  const { data } = useSWR('/disciplines', (url) => fetchApi(url));

  return (
    <Box padding="16px">
      <Heading as="h1" size="lg" mb="1rem">
        Disciplinas
      </Heading>
      <div id="content-disciplinas" className="content active disciplines">
        {data?.map((discipline) => (
          <div key={discipline.id} className="card-disciplina">
            <img src="assets/images/course.svg" alt="Nome da Disciplina" />
            <h4>{discipline.name}</h4>
          </div>
        ))}
      </div>
      <div id="content-notas" className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Avaliação Parcial 1</th>
              <th>Avaliação Parcial 2</th>
              <th>Trabalho 1</th>
              <th>Trabalho 2</th>
              <th>Trabalho 3</th>
              <th>Trabalho 4</th>
              <th>Avaliação Final</th>
              <th>Frequência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matemática Discreta</td>
              <td>7.5</td>
              <td>8.0</td>
              <td>9.0</td>
              <td>9.5</td>
              <td>8.5</td>
              <td>10.0</td>
              <td>9.0</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Cálculo I</td>
              <td>6.0</td>
              <td>7.0</td>
              <td>8.0</td>
              <td>7.5</td>
              <td>8.0</td>
              <td>7.0</td>
              <td>8.5</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Programação I</td>
              <td>8.0</td>
              <td>7.5</td>
              <td>9.5</td>
              <td>9.0</td>
              <td>10.0</td>
              <td>8.5</td>
              <td>8.0</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Física I</td>
              <td>5.0</td>
              <td>6.5</td>
              <td>7.0</td>
              <td>6.0</td>
              <td>6.5</td>
              <td>7.5</td>
              <td>7.0</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Estrutura de Dados</td>
              <td>9.0</td>
              <td>8.5</td>
              <td>9.0</td>
              <td>8.5</td>
              <td>9.5</td>
              <td>9.0</td>
              <td>9.5</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Banco de Dados</td>
              <td>8.5</td>
              <td>8.0</td>
              <td>9.0</td>
              <td>9.5</td>
              <td>9.5</td>
              <td>10.0</td>
              <td>9.0</td>
              <td>15%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="content-horarios" className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08:00 - 09:50</td>
              <td>Matemática Discreta</td>
              <td>Cálculo I</td>
              <td>Programação I</td>
              <td>Física I</td>
              <td>Estrutura de Dados</td>
            </tr>
            <tr>
              <td>10:00 - 11:50</td>
              <td>Cálculo I</td>
              <td>Física I</td>
              <td>Estrutura de Dados</td>
              <td>Programação I</td>
              <td>Matemática Discreta</td>
            </tr>
            <tr>
              <td>14:00 - 15:50</td>
              <td>Estrutura de Dados</td>
              <td>Programação I</td>
              <td>Matemática Discreta</td>
              <td>Cálculo I</td>
              <td>Física I</td>
            </tr>
            <tr>
              <td>16:00 - 17:50</td>
              <td>Programação I</td>
              <td>Estrutura de Dados</td>
              <td>Física I</td>
              <td>Matemática Discreta</td>
              <td>Cálculo I</td>
            </tr>
            <tr>
              <td>18:00 - 19:50</td>
              <td>Banco de Dados</td>
              <td>Banco de Dados</td>
              <td>Banco de Dados</td>
              <td>Banco de Dados</td>
              <td>Banco de Dados</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
}

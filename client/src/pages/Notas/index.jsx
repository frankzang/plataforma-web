import useSWR from 'swr';
import { fetchApi } from '../../data/fetchApi';
import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function Grades() {
  const { data } = useSWR('/grades', (url) => fetchApi(url));

  console.log({ data });

  return (
    <Box padding="16px">
      <Heading as="h1" size="lg" mb="1rem">
        Notas
      </Heading>
      <Box overflow="auto" width="100vw">
        <Table variant="striped" colorScheme="purple" size="sm" width="100%">
          <Thead>
            <Tr>
              <Th textAlign="center">Disciplina</Th>
              <Th textAlign="center">Avaliação Parcial 1</Th>
              <Th textAlign="center">Avaliação Parcial 2</Th>
              <Th textAlign="center">Trabalho 1</Th>
              <Th textAlign="center">Trabalho 2</Th>
              <Th textAlign="center">Trabalho 3</Th>
              <Th textAlign="center">Trabalho 4</Th>
              <Th textAlign="center">Avaliação Final</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Matemática Discreta</Td>
              <Td>7.5</Td>
              <Td>8.0</Td>
              <Td>9.0</Td>
              <Td>9.5</Td>
              <Td>8.5</Td>
              <Td>10.0</Td>
              <Td>9.0</Td>
            </Tr>
            <Tr>
              <Td>Cálculo I</Td>
              <Td>6.0</Td>
              <Td>7.0</Td>
              <Td>8.0</Td>
              <Td>7.5</Td>
              <Td>8.0</Td>
              <Td>7.0</Td>
              <Td>8.5</Td>
            </Tr>
            <Tr>
              <Td>Programação I</Td>
              <Td>8.0</Td>
              <Td>7.5</Td>
              <Td>9.5</Td>
              <Td>9.0</Td>
              <Td>10.0</Td>
              <Td>8.5</Td>
              <Td>8.0</Td>
            </Tr>
            <Tr>
              <Td>Física I</Td>
              <Td>5.0</Td>
              <Td>6.5</Td>
              <Td>7.0</Td>
              <Td>6.0</Td>
              <Td>6.5</Td>
              <Td>7.5</Td>
              <Td>7.0</Td>
            </Tr>
            <Tr>
              <Td>EsTrutura de Dados</Td>
              <Td>9.0</Td>
              <Td>8.5</Td>
              <Td>9.0</Td>
              <Td>8.5</Td>
              <Td>9.5</Td>
              <Td>9.0</Td>
              <Td>9.5</Td>
            </Tr>
            <Tr>
              <Td>Banco de Dados</Td>
              <Td>8.5</Td>
              <Td>8.0</Td>
              <Td>9.0</Td>
              <Td>9.5</Td>
              <Td>9.5</Td>
              <Td>10.0</Td>
              <Td>9.0</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

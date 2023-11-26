import useSWR from 'swr';
import { fetchApi } from '../../data/fetchApi';
import {
  Box,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { groupBy } from 'lodash';

const gradeOrder = [
  'PROVA1',
  'PROVA2',
  'PROVA3',
  'TRABALHO1',
  'TRABALHO2',
  'TRABALHO3',
  'TRABALHO4',
];

const buildGrades = (data) => {
  const grouped = groupBy(data, 'disciplina.name');

  return Object.entries(grouped).map(([key, value]) => {
    const res = value
      .sort((a, b) => {
        return gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade);
      })
      .concat(Array(gradeOrder.length - value.length))
      .fill(null, value.length, gradeOrder.length);

    return [key, ...res.map((item) => item?.nota ?? '-')];
  });
};

export default function Grades() {
  const { data } = useSWR('/user/grades', (url) => fetchApi(url));
  const grades = buildGrades(data);

  return (
    <Box>
      <Heading as="h1" size="lg" mb="1rem">
        Notas
      </Heading>
      <Box overflow="auto">
        <Table
          variant="striped"
          colorScheme="purple"
          size="sm"
          width="100%"
          maxW="1200px"
          marginRight="16px"
        >
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
            {grades.map((grades, index) => (
              <Tr key={index}>
                {grades.map((grade, index) => (
                  <Td key={index} textAlign="center">
                    {grade}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

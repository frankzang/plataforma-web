import useSWR from 'swr';
import { fetchApi } from '../../data/fetchApi';
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function CenTral() {
  const { data } = useSWR('/disciplines', (url) => fetchApi(url));

  return (
    <Flex direction="column" gap="16px" padding="16px">
      <Heading as="h1" size="lg" mb="1rem">
        Disciplinas
      </Heading>
      <Flex gap="16px">
        {data?.map((discipline) => (
          <Card key={discipline.id} maxW="xs">
            <CardBody>
              <Center>
                <Image src="assets/images/course.svg" alt="" widTh="200px" />
              </Center>
              <Heading as="h2" size="md" textAlign="center">
                {discipline.name}
              </Heading>
            </CardBody>
          </Card>
        ))}
      </Flex>
      <Box>
        <Heading as="h1" size="lg" mb="1rem">
          Horários
        </Heading>
        <Table
          size="sm"
          variant="striped"
          colorScheme="purple"
          className="table"
          width="100%"
        >
          <Thead>
            <Tr>
              <Th>Horário</Th>
              <Th>Segunda</Th>
              <Th>Terça</Th>
              <Th>Quarta</Th>
              <Th>Quinta</Th>
              <Th>Sexta</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>08:00 - 09:50</Td>
              <Td>Matemática Discreta</Td>
              <Td>Cálculo I</Td>
              <Td>Programação I</Td>
              <Td>Física I</Td>
              <Td>EsTrutura de Dados</Td>
            </Tr>
            <Tr>
              <Td>10:00 - 11:50</Td>
              <Td>Cálculo I</Td>
              <Td>Física I</Td>
              <Td>EsTrutura de Dados</Td>
              <Td>Programação I</Td>
              <Td>Matemática Discreta</Td>
            </Tr>
            <Tr>
              <Td>14:00 - 15:50</Td>
              <Td>EsTrutura de Dados</Td>
              <Td>Programação I</Td>
              <Td>Matemática Discreta</Td>
              <Td>Cálculo I</Td>
              <Td>Física I</Td>
            </Tr>
            <Tr>
              <Td>16:00 - 17:50</Td>
              <Td>Programação I</Td>
              <Td>EsTrutura de Dados</Td>
              <Td>Física I</Td>
              <Td>Matemática Discreta</Td>
              <Td>Cálculo I</Td>
            </Tr>
            <Tr>
              <Td>18:00 - 19:50</Td>
              <Td>Banco de Dados</Td>
              <Td>Banco de Dados</Td>
              <Td>Banco de Dados</Td>
              <Td>Banco de Dados</Td>
              <Td>Banco de Dados</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}

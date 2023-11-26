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
} from '@chakra-ui/react';

export default function Central() {
  const { data } = useSWR('/disciplines', (url) => fetchApi(url));



  return (
    <Box padding="16px">
      <Heading as="h1" size="lg" mb="1rem">
        Disciplinas
      </Heading>
      <Flex gap="16px">
        {data?.map((discipline) => (
          <Card key={discipline.id} maxW="xs">
            <CardBody>
              <Center>
                <Image src="assets/images/course.svg" alt="" width="200px" />
              </Center>
              <Heading as="h2" size="md" textAlign="center">
                {discipline.name}
              </Heading>
            </CardBody>
          </Card>
        ))}
      </Flex>
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

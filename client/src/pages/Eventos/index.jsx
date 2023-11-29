import useSWR from 'swr';
import './styles.css';
import { fetchApi } from '../../data/fetchApi';
import { Link as RRDLink } from 'react-router-dom';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import {AuthContext} from '../../context/auth'
import {useContext} from 'react'


export default function Eventos() {
  const { data } = useSWR('/events', (url) => fetchApi(url));
  const {user} = useContext(AuthContext)


  const student = useSWR('/students/events', (url) => fetchApi(url));

  return (
    <Box>
      <Heading as="h1" size="lg" mb="10">
        Seus eventos
        </Heading>

        <Flex wrap="wrap" gap="16px">
        {student.data?.map((event) => {
          return (
            <div className="event-card" key={event.id}>
              <img src={event.coverImg} alt="" />
              <h3>{event.nome}</h3>
              <Button
                as={RRDLink}
                size="sm"
                colorScheme="purple"
                to={`/eventInfor/${event.id}/${true}`}
              >
                Acessar
              </Button>
            </div>
          );
        })}
      </Flex>
  


      <Heading as="h1" size="lg" mb="10" mt="10">
        Eventos
      </Heading>
      <Flex wrap="wrap" gap="16px">
        {data?.map((event) => {
          const studentOnEvent = event.alunos.find(student => student.ra === user.ra)

          return (
            <div className="event-card" key={event.id}>
              <img src={event.coverImg} alt="" />
              <h3>{event.nome}</h3>
              <Button
                as={RRDLink}
                size="sm"
                colorScheme="purple"
                to={`/eventInfor/${event.id}/${studentOnEvent ? true : false}`}
              >
                Acessar
              </Button>
            </div>
          );
        })}
      </Flex>
    </Box>
  );
}

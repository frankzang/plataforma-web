import useSWR from 'swr';
import './styles.css';
import { fetchApi } from '../../data/fetchApi';
import { Link as RRDLink } from 'react-router-dom';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

export default function Eventos() {
  const { data } = useSWR('/events', (url) => fetchApi(url));

  console.log({ data });

  return (
    <Box>
      <Heading as="h1" size="lg" mb="10">
        Eventos
      </Heading>
      <Flex wrap="wrap" gap="16px">
        {data?.map((event) => {
          return (
            <div className="event-card" key={event.id}>
              <img src={event.coverImg} alt="" />
              <h3>{event.nome}</h3>
              <Button
                as={RRDLink}
                size="sm"
                colorScheme="purple"
                to={`/eventInfor/${event.id}`}
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

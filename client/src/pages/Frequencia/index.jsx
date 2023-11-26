import useSWR from 'swr';
import { fetchApi } from '../../data/fetchApi';
import { Box, Heading } from '@chakra-ui/react';
import { Calendar } from 'react-calendar';
import { isSaturday, isSunday, format } from 'date-fns';

export default function Frequency() {
  const { data } = useSWR('/frequency', (url) => fetchApi(url));

  data?.forEach((item) => {
    let a = format(new Date(item.data), 'dd/MM/yyyy');
    console.log(a);
  });

  return (
    <Box width="100%">
      <Heading as="h1" size="lg" mb="1rem">
        Frequencia
      </Heading>
      <Box
        width="100%"
        sx={{
          '.react-calendar__month-view': {
            width: '100%',
          },
          '.react-calendar__month-view__weekdays__weekday': {
            textTransform: 'uppercase',
            textAlign: 'center',
          },
          '.react-calendar__tile': {
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '100px',
            border: '1px solid #00000010',
          },
          '.react-calendar__navigation': {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
          },
          '.react-calendar__navigation__label': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          },
        }}
      >
        <Calendar
          className="react-calendar"
          valueType="string"
          view="month"
          prevLabel="Anterior"
          nextLabel="Próximo"
          prev2Label={null}
          next2Label={null}
          tileContent={({ date }) => {
            if (isSaturday(date) || isSunday(date)) return null;

            const day = data?.find((item) => {
              const a = format(new Date(item.data), 'dd/MM/yyyy');
              const b = format(date, 'dd/MM/yyyy');

              return a === b;
            });

            return !day ? null : (
              <Box
                bg={day?.presenca ? 'green.500' : 'red.500'}
                position="absolute"
                top="10px"
                left="10px"
                color="white"
                borderRadius="50%"
                width="1.5rem"
                height="1.5rem"
                lineHeight="1.5rem"
                textAlign="center"
                fontSize="0.75rem"
                fontWeight="bold"
              >
                {day?.presenca ? 'P' : 'F'}
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
}

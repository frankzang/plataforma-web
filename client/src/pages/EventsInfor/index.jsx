import {useParams} from "react-router-dom"
import { fetchApi } from '../../data/fetchApi';
import useSWR from 'swr';
import './style.css';
import {Heading, Button, Flex} from "@chakra-ui/react"



export default function EventosInfor() {

    const {id} = useParams()

    const {data,isLoading} = useSWR(`/events/${id}`, (url) => fetchApi(url))

    return(
        <Flex direction="column" gap="16px">
            <Heading>{data?.nome}</Heading>
            <img  className="event-img" src={data?.coverImg} />
            <p className="event-description">
                {data?.description}
            </p>

            <Button colorScheme='purple' size='lg' mt={3} marginLeft="auto">
                Se inscrever
            </Button>
        </Flex>
    )
}
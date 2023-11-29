import {useParams} from "react-router-dom"
import { fetchApi } from '../../data/fetchApi';
import useSWR from 'swr';
import './style.css';
import {Heading, Button, Flex, useToast} from "@chakra-ui/react"
import { useEffect, useState } from "react";



export default function EventosInfor() {

    const {id, hasSubscribed} = useParams()
    const toast = useToast()
    const [isLoadingEvent, setIsLoadingEvent] = useState(false)
    const [hasSubscription, setHasSubscription] = useState(false)
    const hasSubscribedConverted = hasSubscribed === "true"
    const {data,isLoading} = useSWR(`/events/${id}`, (url) => fetchApi(url))


    useEffect(() => {
        setHasSubscription(hasSubscribedConverted)
    }, [])

    async function handleSubscribeEvent(eventId){
        setIsLoadingEvent(true)
        await fetchApi(`/events/subscribe/${eventId}`, {
            method:'POST'

        })
        toast({
            status:"success", 
            description:"Inscrição realizada com sucesso!"
        })
        setIsLoadingEvent((previousState) => !previousState)
        setHasSubscription((previousState) => !previousState)
    }

    return(
        <Flex direction="column" gap="16px">
            <Heading>{data?.nome}</Heading>
            <img  className="event-img" src={data?.coverImg} />
            <p className="event-description">
                {data?.description}
            </p>

            <Button isLoading={isLoadingEvent} isDisabled={hasSubscription === true} cursor={hasSubscription ? "not-allowed": "pointer"} colorScheme='purple' size='lg' mt={3} marginLeft="auto" onClick={() => handleSubscribeEvent(data?.id)}>
                {hasSubscribed ? "Inscrito" : "Se inscrever"}
            </Button>
        </Flex>
    )
}
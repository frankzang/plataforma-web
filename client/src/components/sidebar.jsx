import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  ListItem,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { Link as RRDLink } from 'react-router-dom';
import { logoutUser } from '../loaders/user';

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button variant="link" ref={btnRef} colorScheme="purple" onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <UnorderedList spacing={3} onClick={onClose}>
              <ListItem>
                <Link as={RRDLink} to="/">
                  Início
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RRDLink} to="/grades">
                  Notas
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RRDLink} to="/eventos">
                  Eventos
                </Link>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="link"
              mr={3}
              onClick={async () => {
                try {
                  await logoutUser();
                  window.location.reload();
                } catch (error) {
                  console.log({ error });
                }
              }}
            >
              Sair
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export const Main = ({ children }) => {
  return (
    <Box>
      <Flex
        gap="16px"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid #00000010"
        padding="16px"
      >
        <Image
          src="assets/central-aluno/img/logo-unifap.png"
          alt="Logo UNIFAP"
          w="150px"
        />
        <Menu />
      </Flex>
      <Flex>{children}</Flex>
    </Box>
  );
};

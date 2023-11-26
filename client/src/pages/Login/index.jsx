import {
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Image,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { signInUser } from '../../loaders/user';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <ChakraProvider>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        bgColor="#000033"
        w="100vw"
        p="18px"
        h="100vh"
      >
        <Image src="public/assets/images/login-logo.svg" alt="Logo" mb="36px" />
        <Grid maxW="300px" w="100%">
          <Formik
            initialValues={{
              code: '9GgzbSSK',
              password: '123456',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.password) {
                errors.password = 'Campo obrigatório';
              }

              if (!values.code) {
                errors.code = 'Campo obrigatório';
              }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const user = await signInUser(values.code, values.password);

                setUser(user);
              } catch (error) {
                console.log({ error });
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Flex
                as={Form}
                onSubmit={handleSubmit}
                direction="column"
                gap="16px"
              >
                <FormControl isRequired>
                  <FormLabel htmlFor="code" color="white">
                    Matrícula
                  </FormLabel>
                  <Input
                    as={Field}
                    type="code"
                    name="code"
                    id="code"
                    color="white"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password" color="white">
                    Senha
                  </FormLabel>
                  <Input
                    as={Field}
                    type="password"
                    name="password"
                    id="password"
                    isRequired
                    color="white"
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="purple"
                  mt="18px"
                  isDisabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </Flex>
            )}
          </Formik>
        </Grid>
      </Flex>
    </ChakraProvider>
  );
};

export default Login;

import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { signInUser } from '../loaders/user';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid>
        <Formik
          initialValues={{
            code: '',
            password: '',
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
              await signInUser(values.code, values.password);

              console.log('User signed in');

              navigate('/');
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
                <FormLabel htmlFor="code">Matrícula</FormLabel>
                <Input as={Field} type="code" name="code" id="code" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input
                  as={Field}
                  type="password"
                  name="password"
                  id="password"
                  isRequired
                />
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="teal"
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Submit
              </Button>
            </Flex>
          )}
        </Formik>
      </Grid>
    </Container>
  );
};

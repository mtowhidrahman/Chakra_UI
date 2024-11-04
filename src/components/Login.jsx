import React from 'react';
import {
  Container,
  VStack,
  Input,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.sm'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '97']}
          m={'2'}
          my={'4'}
          spacing={'8'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Enter E-Mail"
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Enter Password"
            required
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            Forgot Password?
          </Button>
          <Button colorScheme={'purple'}>Login</Button>

          <Text textAlign={'right'}>
            New User?
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign-Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;

import React from 'react';
import {
  Container,
  VStack,
  Input,
  Text,
  Button,
  Heading,
  Avatar
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'container.sm'} h={'100vh'} p={'5'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '97']}
          m={'2'}
          my={'4'}
          spacing={'8'}
        >
          <Heading textAlign={'center'}>Video World</Heading>
          <Avatar alignSelf={'center'} boxSize={'20'}/>
          <Input
            placeholder="Enter Name"
            required
            focusBorderColor={'purple.500'}
          />
          
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
          
          <Text textAlign={'right'}>
            Already Have an Account? 
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
         
          <Button colorScheme={'purple'}>Signup</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp
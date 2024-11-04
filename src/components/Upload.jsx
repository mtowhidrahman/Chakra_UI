



import React from 'react';
import {
  VStack,
  HStack,
  Container,
  Text,
  Input,
  Button,
  color,
} from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'10'}>
      <VStack justifyContent={'center'} color={'purple.500'} h={'full'}>
        <AiOutlineCloudUpload size={'7vmax'} />
        <form>
          <HStack>
            <Input
              placeholder={'Select File'}
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  height: '100%',
                  width: 'calc(100%+36px)',
                  backgroundColor: 'purple',
                  color: 'white',
                  marginLeft: '-18px',
                  cursor:'pointer'
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;









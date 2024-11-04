import React from 'react';
import {
  Stack,
  VStack,
  HStack,
  Button,
  Box,
  Text,
  Heading,
  Input,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={'40'} p={'16'} bgColor={'blackAlpha.800'}>
      <Stack direction={['coloumn', 'row']}>
        <VStack w={'full'} alignItems={'stretch'} px={'4'}>
          <Heading color={"white"} size="md" textTransform="uppercase" textAlign={'center'}>
            Send us Message...
          </Heading>
          <HStack py="2">
            <Input
              placeholder="Enter Your Message"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
              style={{
                borderBottom:'0.5px solid black'
              }}
            />
            <Button
              p={'4'}
              colorScheme={'purple'}
              borderRadius={'20px'}
              outline={'none'}
              variant={'ghost'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderRight={['none', '1px solid white']}
          borderLeft={['none', '1px solid white']}
        >
          <Heading
          color={"white"}
            textAlign={'center'}
            textTransform={'uppercase'}
            borderBottom={'1px solid white'}
          >
            Video World
          </Heading>
          <Text color={'cyan.500'}>@All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading color={"white"} textTransform={'uppercase'}>Social Media</Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'_blank'} variant={'link'} href="https://youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'_blank'} variant={'link'} href="https://instagram.com">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'_blank'} variant={'link'} href="https://github.com">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

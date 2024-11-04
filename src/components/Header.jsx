import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  button,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius="full"
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Video World</DrawerHeader>

          <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
              <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
              <Link to={'/videos'}>Videos</Link>
            </Button>
            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
              <Link to={'/videos?category=free'}>Free Videos</Link>
            </Button>
            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
              <Link to={'/uploadvideos'}>Upload Videos</Link>
            </Button>
          </VStack>

          <HStack
            position={'absolute'}
            bottom={'10'}
            w={'full'}
            justifyContent={'space-evenly'}
          >
            <Button onClick={onClose} colorScheme={'purple'} variant={'solid'}>
            <Link to={"/login"}>Login</Link>
            </Button>
            <Button
              onClick={onClose}
              colorScheme={'purple'}
              variant={'outline'}
            >
              <Link to={"/signup"}>Sign-Up</Link>
            </Button>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

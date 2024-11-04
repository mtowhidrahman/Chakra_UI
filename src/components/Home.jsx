import { Box, Container, Image, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  p: '4',
  transform: 'translate(-50%,-50%)',
  textTransform: 'Uppercase',
  size: '2xl',
};

const Home = () => {
  const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box h={'100vh'} w={'full'}>
        <Image src={img1} alt={'Coding Related Pictures'} h={'full'} w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>
          Passion Makes Coding
        </Heading>
      </Box>
      <Box h={'100vh'} w={'full'} >
        <Image src={img2} alt={'Coding Related Pictures'} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Coding Future
        </Heading>
      </Box>
      <Box h={'100vh'} w={'full'}>
        <Image src={img3} alt={'Coding Related Pictures'} h={'full'} w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>
          Coding for new generations
        </Heading>
      </Box>
    </Carousel>
  );

  return (
    <Box>
      <MyCarousel />

      <Container
        // bgColor={'blackAlpha.300'}
        maxW={'container.xl'}
        minH={'100vh'}
        p={'16'}
      >
        <Heading
          // bgColor={"red.2/00"}
          maxW={'fit-content'}
          py="2"
          textTransform={'uppercase'}
          borderBottom={'2px solid black'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          alignItems={'center'}
          direction={['coloumn', 'row']}
          p={'4'}
        >
          <Image
            src={img5}
            alt={'Services'}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
          />

          <Text
            lineHeight={'150%'}
            letterSpacing={'widest'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, reiciendis error praesentium corrupti architecto consectetur sed ipsam, animi et commodi vel iusto reprehenderit numquam necessitatibus doloribus? Delectus esse ex exercitationem possimus eveniet, odio tenetur at facilis dicta neque quia similique labore optio vitae, reiciendis voluptas non? Distinctio quod accusantium ea quo consequatur saepe magni, voluptates tempora fuga repudiandae, reprehenderit rem necessitatibus, eos minus! Architecto mollitia sequi quis deleniti enim, quasi numquam dolores vel libero cumque ad dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

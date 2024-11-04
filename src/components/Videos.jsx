import React, { useState } from 'react';
import { Stack, VStack, HStack, Text, Heading, Button } from '@chakra-ui/react';

const Videos = () => {
  //   const videoArr = [
  //     'https://www.youtube.com/watch?v=4_2ZYFgpm-U&ab_channel=SOMOYTV',
  //     'https://www.youtube.com/watch?v=9_WBQISVHnw&ab_channel=Genevieve%27sPlayhouse-LearningVideosforKids',
  //     'https://www.youtube.com/watch?v=ILPjPIFNsRA&ab_channel=coilbook%E2%84%A2%7CLearningForChildren',
  //     'https://www.youtube.com/watch?v=f-eDFsnzNh8&ab_channel=AleenaRaisLive',
  //     'https://www.youtube.com/watch?v=ScsBz11iV9U&ab_channel=WebsiteLearners',
  //   ];

  const videoArr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  return (
    <Stack h={'100vh'} direction={['column', 'row']}>
      <VStack w={'full'}>
        <video
          src={videoSrc}
          controls
          controlsList="nodownload"
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'4'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            {' '}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            eius consequatur in maiores illo necessitatibus possimus itaque
            earum nulla consectetur incidunt, ex nisi harum neque iure officia!
            Mollitia consectetur officiis quos dolores dicta laboriosam aliquid
            aperiam nam quia, porro obcaecati officia reprehenderit quam rem
            soluta quasi aspernatur. Illo, facere iure atque distinctio
            inventore obcaecati suscipit cum, unde, debitis quaerat cupiditate?
            Esse unde illo accusantium deleniti rem eligendi laborum neque
            provident assumenda vitae, quisquam placeat veniam excepturi.
            Facere!
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        py={'10'}
        spacing={'4'}
        overflowY={'auto'}
      >
        {videoArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

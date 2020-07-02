import React from 'react';
import Head from 'next/head';
import { CenteringContainer } from '@styles';
import { ColorHeading } from '@components/color-heading';
import { BackLink } from '@components/backlink';

/**
 * Pre-rendered static page
 */
const StaticPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Static page</title>
      </Head>

      <CenteringContainer>
        <ColorHeading text="Static page" color={'blue'} />
        <BackLink imageSrc="/assets/image/digdug.jpg" />
      </CenteringContainer>
    </>
  );
};

export default StaticPage;

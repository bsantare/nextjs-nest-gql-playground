import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { ColorHeading } from '@components/color-heading';
import { getColorValue } from '@libs/api';
import { CenteringContainer } from '@styles';
import { BackLink } from '@components/backlink';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const color = getColorValue(params.id as string);
  return {
    props: {
      color: color ?? 'black',
      currentTime: new Date().toISOString(),
      colorFound: !!color,
    },
  };
};

/**
 * SSR page - dynamic route
 */
const SSRDynamicRoutePage: React.FC<{
  color: string;
  currentTime: string;
  colorFound: boolean;
}> = ({ color, currentTime, colorFound }) => {
  return (
    <>
      <Head>
        <title>SSR Dynamic route page</title>
      </Head>
      <CenteringContainer>
        {colorFound ? (
          <>
            <ColorHeading text={`SSR DynamicRoutePage color ${color}`} color={color} />
            <ColorHeading text={currentTime} color="black" />
          </>
        ) : (
          <>
            <ColorHeading text={`SSR DynamicRoutePage - color is unknown`} color="Black" />
            <ColorHeading text={currentTime} color="black" />
          </>
        )}
        <BackLink imageSrc="/assets/image/digdug.gif" />
      </CenteringContainer>
    </>
  );
};

export default SSRDynamicRoutePage;

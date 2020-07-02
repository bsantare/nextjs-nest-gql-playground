import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { ColorHeading } from '@components/color-heading';
import { getColorKeys, getColorValue } from '@libs/api';
import { CenteringContainer } from '@styles';
import { BackLink } from '@components/backlink';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getColorKeys().map((color) => ({
    params: {
      id: color,
    },
  }));
  return {
    paths,
    // 404 on unknown value
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const color = getColorValue(params.id as string);
  return {
    props: {
      color,
    },
  };
};

/**
 * Pre-rendered page - dynamic route
 */
const DynamicRoutePage: React.FC<{ color: string }> = ({ color }) => {
  return (
    <>
      <Head>
        <title>Pre-render dynamic route page</title>
      </Head>
      <CenteringContainer>
        <ColorHeading text={`Pre-render DynamicRoutePage color ${color}`} color={color} />
        <BackLink imageSrc="/assets/image/digdug.gif" />
      </CenteringContainer>
    </>
  );
};

export default DynamicRoutePage;

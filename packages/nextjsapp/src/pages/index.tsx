import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CenteringBorderContainer, CenteringContainer, FlowContainer } from '@styles';
import { useSaySomeHackerThingsQuery } from '../types/generated/server-gql';
import { apolloClient } from '@libs/apolloClient';

export default function Home() {
  const [isLoading, setLoading] = useState(false);

  const { data, loading, error, refetch } = useSaySomeHackerThingsQuery({
    client: apolloClient,
    fetchPolicy: 'network-only',
    variables: {
      messageCount: 3,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      refetch();
    }, 7500);
    return () => clearInterval(interval);
  }, [refetch]);

  useEffect(() => {
    if (!loading && isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isLoading, loading]);

  const list =
    data &&
    data.saySomeHackerThings.map((hackerThing) => (
      <div key={hackerThing.id}>
        <CenteringBorderContainer>
          <h3>{hackerThing.message}</h3>
        </CenteringBorderContainer>
      </div>
    ));

  if (error) {
    return <CenteringContainer>Error loading hacker stuff</CenteringContainer>;
  }

  return (
    <>
      <Head>
        <title>Test Next App</title>
      </Head>

      <main>
        <CenteringContainer>
          <h1>Some NextJS stuff</h1>
          <img src="/assets/image/danger.jpg" alt="no soup for you" />
          <FlowContainer>
            <CenteringBorderContainer>
              <Link href="/prerender/static/static-page">
                <a>Static Page</a>
              </Link>
            </CenteringBorderContainer>
            <CenteringBorderContainer>
              <Link href="/prerender/dynamicroute/1">
                <a>Pre-render dynamic route color 1</a>
              </Link>
              <Link href="/prerender/dynamicroute/2">
                <a>Pre-render dynamic route color 2</a>
              </Link>
              <Link href="/prerender/dynamicroute/3">
                <a>Pre-render dynamic route color 3</a>
              </Link>
              <Link href="/prerender/dynamicroute/4">
                <a>Pre-render dynamic route non-existent color</a>
              </Link>
            </CenteringBorderContainer>
            <CenteringBorderContainer>
              <Link href="/ssr/dynamicroute/1">
                <a>SSR Dynamic route color 1</a>
              </Link>
              <Link href="/ssr/dynamicroute/2">
                <a>SSR Dynamic route color 2</a>
              </Link>
              <Link href="/ssr/dynamicroute/3">
                <a>SSR Dynamic route color 3</a>
              </Link>
              <Link href="/ssr/dynamicroute/4">
                <a>SSR Dynamic route non-existent color</a>
              </Link>
            </CenteringBorderContainer>
            {isLoading ? (
              <CenteringContainer>
                <CenteringBorderContainer>
                  <h3>Loading...</h3>
                </CenteringBorderContainer>
              </CenteringContainer>
            ) : (
              <FlowContainer>{list}</FlowContainer>
            )}
          </FlowContainer>
        </CenteringContainer>
      </main>
    </>
  );
}

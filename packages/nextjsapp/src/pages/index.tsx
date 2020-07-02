import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CenteringBorderContainer, CenteringContainer, FlowContainer } from '@styles';

export default function Home() {
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
          </FlowContainer>
        </CenteringContainer>
      </main>
    </>
  );
}

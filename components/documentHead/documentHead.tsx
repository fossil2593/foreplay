import * as React from "react";
import Head from "next/head";

export const DocumentHead: React.FC = () => (
  <Head>
    <title>Foreplay</title>
    <meta
      name="description"
      content="Digital foreplay dice for 2+ sexy people"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

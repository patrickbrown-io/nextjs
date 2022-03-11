import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Me() {
  return (
    <Layout>
      <Head>
        <title>Me</title>
      </Head>

      <h1>Me</h1>
      <h2>
        <Link href="/">
          <a className="hover-underline-animation">Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

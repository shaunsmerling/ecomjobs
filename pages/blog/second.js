import Head from "next/head"
import Link from "next/link"


function Second() {
  return (
    <>
    <Head>
        <title>Second Post</title>
    </Head>
      <h1> Second Blog Post</h1>
      <h2> 
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default Second
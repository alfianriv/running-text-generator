import Head from "next/head";
import { useRouter } from "next/dist/client/router";

export default function Text() {
	const router = useRouter();
	const { text } = router.query;
	return (
		<div className="w-screen h-screen bg-black flex flex-col justify-center items-center gap-5">
        <Head>
          <title>Running Text Generator</title>
          <meta name="title" content="Running Text Generator" />
          <meta name="description" content="Create your own running text display" />
          <meta name="keywords" content="running, text, generator, running text, text generator, running text generator, tiktok, jedag, jedug, jedag jedug" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="alfianriv"></meta>
        </Head>
        <marquee style={{fontSize: "128px"}} className="w-screen text-white" direction="left" scrollamount="25" width="100">{text}</marquee>
		</div>
	);
}

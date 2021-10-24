import Head from 'next/head'
import {useState} from "react"
import { useRouter } from 'next/dist/client/router'

export default function Home() {
  const [text, setText] = useState("")
  const router = useRouter()
  
  const Move = () => {
    if(!text){
      return alert("Please enter a text")
    } 
    router.push(`/text/${text}`)
  }

  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center p-10 gap-5">
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
      <h1 className="text-center text-3xl text-white">Running Text Generator</h1>
      <input value={text} onChange={(el) => setText(el.target.value)} type="text" className="w-64 p-2 border-white border rounded focus:outline-none" placeholder="Write your text here"/>
      <button onClick={Move} className="bg-black border-white border rounded text-white px-5 py-2">Create</button>
    </div>
  )
}

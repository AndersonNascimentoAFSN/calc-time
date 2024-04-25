import Image from "next/image"

import { TimeConverter } from 'andersonnascimentoafsn-utils'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Hello, World!</h1>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
    </main>
  );
}

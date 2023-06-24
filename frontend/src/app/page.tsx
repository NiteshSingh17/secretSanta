import Image from 'next/image'
import { Hero } from './components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex justify-center align-middle">
          <Hero />
      </div>
    </main>
  )
}

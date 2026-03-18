import Hero from '../components/Hero'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to Lolll Landing
        </h1>
        <p className="text-center text-gray-600">
          Next.js app initialized successfully with CSS modules and React
        </p>
      </div>
    </main>
  )
}

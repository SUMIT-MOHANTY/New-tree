import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className="relative h-[50vh] bg-gradient-to-r from-blue-500 to-purple-600">
      <div className={`${styles.heroContent} text-white text-center`}>
        <h1 className={`${styles.title} text-5xl font-bold mb-4`}>
          Lolll Landing
        </h1>
        <p className="text-xl">
          Modern web development with Next.js and CSS modules
        </p>
      </div>
    </div>
  )
}

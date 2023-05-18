import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <h1 className={`mb-3 text-2xl font-semibold`}>
            Hola Mundo{' '}
          </h1>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Anochecer{' '}
          </h2>
    
          <Image
          src="/atar (2).jpg"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sol{' '}
            
          </h2>
          <Image
          src="/El_sol.jpg"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            
          </h2>
          
          <Image
          src="/moon-2762111_640.jpg"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Atardecer{' '}
          </h2>
  
        <Image
          src="/atar.jpg"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />
        
        </a>
      </div>
      
    </main>
  )
}

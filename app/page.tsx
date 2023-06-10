import Image from 'next/image'

import ProfilePicture from '../public/matthias-bayer.png'
import { GitHub } from './icons/GitHub'
import { Twitter } from './icons/Twitter'
import { LinkedIn } from './icons/LinkedIn'
import { Mail } from './icons/Mail'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 max-w-3xl mx-auto select-none">
      <section className="flex flex-col md:flex-row gap-12">
        <div className="shrink-0">
          <Image
            src={ProfilePicture}
            alt="Matthias Bayer"
            className="rounded-full pointer-events-none"
            width={120}
            height={120}
            priority
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Matthias Bayer</h1>
            <h2 className="text-base">
              Hi, I&apos;m Matthias! I&apos;m a{' '}
              <span className="font-semibold">Software Engineer</span> based in
              Germany with a passion for web technology.
            </h2>
          </div>

          <div>
            <p>
              Interested in working with me?{' '}
              <a
                href="https://cal.com/bayer"
                target="_blank"
                rel="noopener noreferer"
                className="underline decoration-neutral-500 dark:decoration-neutral-300 underline-offset-4 block md:inline"
              >
                Let&apos;s chat!
              </a>
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-4">
              <a
                href="https://github.com/matthiasbayer"
                target="_blank"
                rel="noopener noreferer"
              >
                <GitHub />
              </a>

              <a
                href="https://twitter.com/matthias_bayer"
                target="_blank"
                rel="noopener noreferer"
              >
                <Twitter />
              </a>

              <a
                href="https://linkedin.com/in/matthias-bayer/"
                target="_blank"
                rel="noopener noreferer"
              >
                <LinkedIn />
              </a>

              <a href="mailto:%68%65%6c%6c%6f%40%62%61%79%65%72%2e%64%65%76">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

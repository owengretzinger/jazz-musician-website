import Nav from '@/components/nav'
import './globals.css'
import { Changa, Dancing_Script } from 'next/font/google'
import Link from 'next/link'
import { Metadata, Viewport } from 'next'

const changa = Changa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-changa',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
})

export const metadata: Metadata = {
  title: 'Mattaus Gretzinger - Toronto based Alto Saxophonist & Composer',
  description: "I'm a jazz musician from Toronto. Visit my website to see my upcoming shows, book me for a gig, or listen to my music!",
  keywords: 'Mattaus Gretzinger, jazz, saxophone, sax, bass, Toronto, composer, teacher, The Rex, The Emmet Ray, mattgretz',
  openGraph: {
    title: 'Mattaus Gretzinger - Toronto based Alto Saxophonist & Composer',
    description: "I'm a jazz musician from Toronto. Visit my website to see my upcoming shows, book me for a gig, or listen to my music!",
    url: 'https://mattausgretzinger.com',
    images: {
      url: '/images/opengraph-image.png',
      alt: 'Mattaus Gretzinger - Toronto based Alto Saxophonist & Composer'
    },
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Owen Gretzinger',
  metadataBase: new URL('https://mattausgretzinger.com'),
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: '#292826',
  colorScheme: 'dark',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${changa.variable} ${dancing.variable} font-changa bg-bgcol text-textcol relative`}>
      <Nav />
      {children}
      <div className="absolute bottom-2 w-full text-center">
        <Link href="https://www.owengretzinger.com" target="_blank" className="text-textcol/30">
          Designed & Built by Owen Gretzinger
        </Link>
      </div>

    </main>
  )
}

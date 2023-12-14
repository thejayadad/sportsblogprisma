import CardList from '@/components/client/CardList'
import CategoryList from '@/components/client/CategoryList'
import Hero from '@/components/client/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
      <CardList />
    </main>
  )
}

import Head from 'next/head'
import Feed from '../Components/Feed'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className="h-screen scrollbar-hide bg-gray-50 overflow-y-scroll">
      <Header />
      <Feed />
    </div>
  )
} 

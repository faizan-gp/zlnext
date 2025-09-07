import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'


export default function Page() {
  return (
    <>
      <Header />
      <div className='px-5 lg:px-20 '>
        <Landing />
      </div>
      <Footer />
    </>
  )
}

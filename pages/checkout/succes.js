import { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { runFireWorks } from '@/lib/utils'

const Succes = () => {
  useEffect(() => {
    runFireWorks()
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Faleminderit për orderin tuaj</h2>
        <p className='email-msg'>Kontrolloni email-in tuaj per fauturën</p>
        <p className='description'>
          Nëse keni ndonjë pyetje, ju lutem na dergoni email
          <a className='email' href='mailto:rroshistore@gmail.com'>
            rroshistore@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Shiko Produkte të tjera
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Succes

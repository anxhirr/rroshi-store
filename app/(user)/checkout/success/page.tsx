'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { runFireWorks } from '../../../../lib/fireworks'

const Success = () => {
  useEffect(() => {
    runFireWorks()
  }, [])

  return (
    <div className='text-center'>
      <div className='p-10 bg-milk flex flex-col justify-center items-center rounded-3xl gap-4'>
        <p className='text-green-700 text-5xl'>
          <BsBagCheckFill />
        </p>
        <h2 className='text-txt text-5xl font-black'>
          Faleminderit për orderin tuaj
        </h2>
        <p className='font-semibold'>Kontrolloni email-in tuaj per faturën</p>
        <p className='font-semibold mt-4'>
          Nëse keni ndonjë pyetje, ju lutem na dergoni email{' '}
          <a className='text-red-600' href='mailto:rroshistore@gmail.com'>
            rroshistore@gmail.com
          </a>
        </p>
        <Link href='/' className='red-btn'>
          Shiko Produkte të tjera
        </Link>
      </div>
    </div>
  )
}
export default Success

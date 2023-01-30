import Link from 'next/link'

const Checkout = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-8 pt-12'>Checkout</h1>

      <div className='flex'>
        <div className='flex-1'>
          <h2 className='text-2xl font-medium mb-6'>Detajet e dërgesës</h2>
        </div>

        <div className='flex-1'>
          <h2 className='text-2xl font-medium mb-6'>Detajet e faturimit</h2>
          <form className='flex-1'>
            <div className='flex flex-col mb-16'>
              <label htmlFor='name' className='mb-1'>
                Emri
              </label>
              <input
                type='text'
                id='name'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='surname' className='mb-1'>
                Mbiemri
              </label>
              <input
                type='text'
                id='surname'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='email' className='mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='phone' className='mb-1'>
                Numri i telefonit
              </label>
              <input
                type='text'
                id='phone'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='address' className='mb-1'>
                Adresa
              </label>
              <input
                type='text'
                id='address'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='city' className='mb-1'>
                Qyteti
              </label>
              <input
                type='text'
                id='city'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='zip' className='mb-1'>
                ZIP/Kodi postar
              </label>
              <input
                required
                type='text'
                id='zip'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />
            </div>
          </form>
        </div>
      </div>

      <Link href='/checkout/succes'>
        <button type='button' className='btn'>
          Përfundova
        </button>
      </Link>
    </div>
  )
}
export default Checkout

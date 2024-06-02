import UsageContext from '@/state/usage/context'
import UsageRedux from '@/state/usage/redux'
import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen bg-white text-slate-800 py-10'>
      <div className='max-w-4xl mx-auto grid grid-cols-5 gap-4'>
        <div className='w-full p-4 border rounded-2xl'>
          <div className='text-xs text-center'>React Context</div>
          <div className='mt-4'><UsageContext /></div>
        </div>
        <div className='w-full p-4 border rounded-2xl'>
          <div className='text-xs text-center'>Redux</div>
          <div className='mt-4'><UsageRedux /></div>
        </div>
      </div>
    </div>
  )
}

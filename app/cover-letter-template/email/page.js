import Email from '@/components/email'
import React from 'react'

const page = () => {
  return (
    <Email 
      heading={"Get Your Professional Template"} 
      amount={50} 
      service_id={0} 
      callback_url={`${process.env.NEXT_PUBLIC_BASE_URL}/cover-letter-template/verify`}
    />
  )
}

export default page
import Email from '@/components/email'
import React from 'react'

const Page = () => {
  return (
    <Email 
        heading={"Book Your Interview Preparation Session"}
        amount={150}
        service_id={4}
        callback_url={"https://docs.google.com/forms/d/e/1FAIpQLSf9KOtBdluKxl_lBuIooc8NjubwdPRpdNiUQXXh4xPegSQdVw/viewform"}
    />
  )
}

export default Page
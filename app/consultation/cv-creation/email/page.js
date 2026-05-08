import Email from '@/components/email'
import React from 'react'

const Page = () => {
  return (
    <Email 
        heading={"Book Your CV Creation Consultation"}
        amount={100}
        service_id={3}
        callback_url={"https://docs.google.com/forms/d/e/1FAIpQLSc5Kq3siizIADxEGE34pOF1vWZUqNEjfjzWrZO1ESDCtW97Zg/viewform"}
    />
  )
}

export default Page
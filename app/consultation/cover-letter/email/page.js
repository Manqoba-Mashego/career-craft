import Email from '@/components/email'
import React from 'react'

const page = () => {
  return (
    <Email 
        heading={"Book Your Cover Letter Consultation"}
        amount={70}
        service_id={1}
        callback_url={"https://docs.google.com/forms/d/e/1FAIpQLScVwkrrxaRwNxSCnMmr6QnR2fOK3UFLQJcMqz4DF7pXiNU9Yg/viewform?pli=1"}
    />  
  )
}

export default page
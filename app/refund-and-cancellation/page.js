import PolicyPage from '@/components/policyPage'
import { refundAndCancellationPolicy } from '@/data/refundAndCancellationPolicy'
import React from 'react'

const page = () => {
  return (
    <PolicyPage policy={refundAndCancellationPolicy} />
  )
}

export default page
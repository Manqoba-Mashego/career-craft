import PolicyPage from '@/components/policyPage'
import { termsOfUse } from '@/data/termsOfUse'
import React from 'react'

const page = () => {
  return (
    <PolicyPage policy={termsOfUse} />
  )
}

export default page
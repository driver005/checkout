import { Invoice } from '@invoice/index'
import { useRouter } from 'next/router'
import React from 'react'



function InvoiceComponent() {
    const router = useRouter()
    const { id } = router.query

    return (
        <Invoice id={id as string} />
    )
}

export default InvoiceComponent
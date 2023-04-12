import { Center, Heading, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Methods } from '@invoice/Methods'
import { Details } from '@invoice/Details'
import { InvoiceApi, InvoiceInvoice } from '@lib/index'

interface InvoiceProps {
    id: string;
}

export const Invoice: React.FC<InvoiceProps> = ({ id }) => {
    const [data, setData] = React.useState<InvoiceInvoice>({})

    useEffect(() => {
        if (id) {
            var api = new InvoiceApi()
            api.v1InvoicesIdGet(id).then((value) => {
                if (value.status === 200) {
                    setData(value.data)
                }
                console.log(value.data)
            })
        }
    }, [id])

    return (
        <Center backgroundColor="gray.200">
            <VStack spacing="8" width="450px" mt="52px" mb="48px" alignItems="flex-start">
                <Heading fontSize="24px" fontWeight="500" color="gray.600">
                    Invoice
                </Heading>
                <Details
                    price={data.amount_remaining ? `€ ${data.amount_remaining / 100}.00` : '0'}
                    customerName={data.customer_name ? data.customer_name : ''}
                    dueDay={data.due_date ? data.due_date : ''}
                    invoiceId={data.id ? data.id : ''}
                    shopName={data.customer_name ? data.customer_name : ''}
                    memo={data.statement_descriptor ? data.statement_descriptor : ''}
                />
                <Methods />
            </VStack>
        </Center >
    )
}

import { Divider, Flex, Heading, HStack } from '@chakra-ui/react';
import { useAppSelector } from '@store/hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Code, Shipping, Tax } from './Info/index';


interface InfoProps {
    loaded: boolean;
    watch: any;
}

export const Infos: React.FC<InfoProps> = ({ loaded, watch }) => {
    const dispatch = useDispatch();
    const [l, setLoaded] = useState(loaded)
    const shipping = watch(['shipping'])

    const p = useAppSelector((state) => state.products)
    const m = useAppSelector((state) => state.shipping)
    const i = useAppSelector((state) => state.info)

    useEffect(() => {
        const price = p.reduce((a: any, b: any) => a + b.totalDue, 0)
        if (loaded && (shipping[0] !== i.method.label) || (price !== i.subTotal)) {
            const tax = price / 6.5
            dispatch({
                type: 'SET_INFO',
                payload: {
                    method: m.filter((value: any) => value.label === shipping[0])[0],
                    subTotal: price,
                    tax: tax,
                    totalDue: price + tax,
                }
            })
            setLoaded(false)
        }
    }, [shipping])

    useEffect(() => {
        if (!l) setTimeout(() => setLoaded(true), 1500)
    }, [shipping])

    if (!loaded) return <React.Fragment />

    return (
        <Flex flexDirection='column' w='full' pl='58px'>
            <HStack w='full' justifyContent='space-between' mb='16px'>
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                >
                    Subtotal
                </Heading>
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                >
                    {`${i.subTotal.toFixed(2)} €`}
                </Heading>
            </HStack>
            <Divider />
            <Code />
            <Shipping method={i.method} loaded={l} />
            <Tax procent={6.5} price={`${i.tax.toFixed(2)} €`} />
            <Divider />
            <HStack w='full' justifyContent='space-between' mt='16px'>
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                >
                    Total due
                </Heading>
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                >
                    {`${i.totalDue.toFixed(2)} €`}
                </Heading>
            </HStack>
        </Flex>
    )
}
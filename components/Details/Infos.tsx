import { Divider, Flex, Heading, HStack } from '@chakra-ui/react';
import { TextColor } from 'config';
import { useAppSelector } from '@store/hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Code, Shipping, Tax } from './Info/index';


interface InfoProps {
    loaded: boolean;
    shipping?: any;
}

export const Infos: React.FC<InfoProps> = ({ shipping }) => {
    const dispatch = useDispatch();
    const [l, setLoaded] = useState(true)

    const p = useAppSelector((state) => state.products)
    const s = useAppSelector((state) => state.shipping)
    const i = useAppSelector((state) => state.info)

    useEffect(() => {
        const price = p.reduce((a: any, b: any) => a + b.totalDue, 0)
        if (shipping != null) {
            if (!l && (shipping[0] !== i.method.label) || (price !== i.subTotal)) {
                const tax = price / 6.5
                dispatch({
                    type: 'SET_INFO',
                    payload: {
                        method: s.filter((value: any) => value.label === shipping[0])[0],
                        subTotal: price,
                        tax: tax,
                        totalDue: price + tax,
                    }
                })
                setLoaded(false)
            }
        } else {
            if (!l && (price !== i.subTotal)) {
                console.log('tesst')
                const tax = price / 6.5
                dispatch({
                    type: 'SET_INFO',
                    payload: {
                        method: null,
                        subTotal: price,
                        tax: tax,
                        totalDue: price + tax,
                    }
                })
                setLoaded(false)
            }
        }
    }, [])


    useEffect(() => {
        if (shipping != null) {
            const price = p.reduce((a: any, b: any) => a + b.totalDue, 0)
            if (!l && (shipping[0] !== i.method.label) || (price !== i.subTotal)) {
                const tax = price / 6.5
                dispatch({
                    type: 'SET_INFO',
                    payload: {
                        method: s.filter((value: any) => value.label === shipping[0])[0],
                        subTotal: price,
                        tax: tax,
                        totalDue: price + tax,
                    }
                })
                setLoaded(false)
            }
        }
    }, [shipping])

    // useEffect(() => {
    //     if (!l) setTimeout(() => setLoaded(true), 1500)
    // }, [s, p])

    console.log(l)
    console.log(i)

    if (l) return <React.Fragment />

    return (
        <Flex flexDirection='column' w='full' pl='58px'>
            <HStack w='full' justifyContent='space-between' mb='16px'>
                {shipping && (
                    <Heading
                        as='span'
                        fontWeight='500'
                        fontSize='14px'
                        color={TextColor}
                    >
                        Subtotal
                    </Heading>
                )}
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                    color={TextColor}
                >
                    {`${i.subTotal.toFixed(2)} €`}
                </Heading>
            </HStack>
            <Divider />
            <Code />
            {shipping && (
                <Shipping method={i.method} loaded={l} />
            )}
            <Tax procent={6.5} price={`${i.tax.toFixed(2)} €`} />
            <Divider />
            <HStack w='full' justifyContent='space-between' mt='16px'>
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                    color={TextColor}
                >
                    Total due
                </Heading>
                <Heading
                    as='span'
                    fontWeight='500'
                    fontSize='14px'
                    color={TextColor}
                >
                    {`${i.totalDue.toFixed(2)} €`}
                </Heading>
            </HStack>
        </Flex>
    )
}
import React, { useEffect, useState } from 'react'
import { Heading, VStack, chakra, Box, Icon, HStack, Image, Flex, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { TbChevronDown } from 'react-icons/tb';
import { Modal } from '@components/Details';
import { useAppSelector } from '@store/hooks';
import { Border, TextColor } from 'config';
import { LightenDarkenColor } from 'utils';

type ProductProps = {
    loaded?: boolean;
    fixedQuantity?: boolean
}

export const Product: React.FC<ProductProps> = ({ loaded = false, fixedQuantity = false }) => {
    const [products, setProducts] = useState([{}, {}])
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const p = useAppSelector((state: any) => state.products)

    useEffect(() => {
        setProducts(p)
    }, [p])

    return (
        <VStack
            marginY='32px'
            w='full'
            spacing='16px'
        >
            {products.map((product: any, i: number) => (
                <SimpleGrid
                    w='full'
                    spacing='0'
                    gridTemplateColumns='min-content auto'
                    key={i}
                >
                    <Flex
                        w='42px'
                        h='42px'
                        mr='16px'
                    >
                        <Skeleton
                            isLoaded={loaded}
                            borderRadius='md'
                        >
                            <Image
                                alt='Product image'
                                w='full'
                                h='full'
                                borderRadius={Border}
                                src='https://d1wqzb5bdbcre6.cloudfront.net/c25a949b6f1ffabee9af1a5696d7f152325bdce2d1b926456d42994c3d91ad78/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f666c5f746573745f67625631776635726a4c64725a635858647032346d643649'
                            />
                        </Skeleton>
                    </Flex>

                    <VStack w='full' alignItems='start'>
                        <Skeleton
                            isLoaded={loaded}
                            borderRadius='md'
                            w='full'
                        >
                            <HStack w='full' justifyContent='space-between'>
                                <Heading
                                    as='span'
                                    fontWeight='500'
                                    fontSize='14px'
                                    color={TextColor}
                                >
                                    {product.name && product.name}
                                </Heading>
                                <Heading
                                    as='span'
                                    fontWeight='500'
                                    fontSize='14px'
                                    color={TextColor}
                                >
                                    {product.totalDue && product.totalDue.toFixed(2)} €
                                </Heading>
                            </HStack>
                        </Skeleton>
                        <Skeleton
                            isLoaded={loaded}
                            borderRadius='md'
                            w='full'
                        >
                            <HStack w='full' justifyContent='space-between'>
                                <Heading
                                    as='span'
                                    display='flex'
                                    alignItems='center'
                                    color={LightenDarkenColor(TextColor, 125)}
                                    fontWeight='400'
                                    fontSize='12px'
                                >
                                    <chakra.span>
                                        Qty
                                    </chakra.span>
                                    <Box
                                        as='button'
                                        display='flex'
                                        alignItems='center'
                                        padding='1px 4px'
                                        marginX='2px'
                                        borderRadius='base'
                                        color={TextColor}
                                        fontWeight='500'
                                        fontSize='12px'
                                        _hover={{
                                            bg: 'gray.200'
                                        }}
                                        _active={{
                                            bg: 'gray.300'
                                        }}
                                        onClick={() => {
                                            setIndex(i)
                                            setOpen(true)
                                        }}
                                        disabled={fixedQuantity ? fixedQuantity : !product.quantity}
                                    >
                                        {product.quantity && product.quantity}
                                        {!fixedQuantity && (
                                            <Icon
                                                as={TbChevronDown}
                                                color='gray.500'
                                                _hover={{
                                                    color: 'black'
                                                }}
                                            />
                                        )}
                                    </Box>
                                    {products[index] && <Modal
                                        open={open}
                                        setOpen={setOpen}
                                        product={products[index]}
                                    />}
                                </Heading>
                                <Heading
                                    as='span'
                                    color={LightenDarkenColor(TextColor, 125)}
                                    fontWeight='400'
                                    fontSize='12px'
                                >
                                    {(product.quantity && product.quantity > 1) && (
                                        `je ${product.price.toFixed(2)} €`
                                    )}
                                </Heading>
                            </HStack>
                        </Skeleton>
                    </VStack>
                </SimpleGrid>
            ))}
        </VStack>



    )
}
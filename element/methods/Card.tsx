import { Flex, Label } from '@components/index'
import { Input } from '@components/Input';
import React, { useEffect } from 'react'
import {
    Flex as ChakraFlex, HStack, VStack,
} from "@chakra-ui/react"
import Image, { ImageProps } from 'next/image';
import { AnimatePresence, motion, Variants } from "framer-motion"
import AmericanExpress from "@assets/cards/AmericanExpress.svg"
import CartesBancaires from "@assets/cards/CartesBancaires.svg"
import DinersClub from "@assets/cards/DinersClub.svg"
import Discover from "@assets/cards/Discover.svg"
import Interac from "@assets/cards/Interac.svg"
import Jcb from "@assets/cards/Jcb.svg"
import Mastercard from "@assets/cards/Mastercard.svg"
import UnionPay from "@assets/cards/UnionPay.svg"
import Visa from "@assets/cards/Visa.svg"
import CvvCard from "@assets/cards/CvvCard.svg"
import { wrap } from "popmotion";
import { CurrentContext } from '@element/Context';


interface CardProps { }

const variants: Variants = {
    enter: {
        opacity: 0
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        opacity: 0,
    }
};

const MotionImage = motion<ImageProps>(Image);

export const Card: React.FC<CardProps> = () => {
    const control = React.useContext(CurrentContext);

    const [page, setPage] = React.useState(0);
    const images = [
        CartesBancaires,
        DinersClub,
        Discover,
        Interac,
        Jcb,
        UnionPay,
    ]

    const imageIndex = wrap(0, images.length, page);

    const paginate = (value: number) => {
        setPage(page + value);
    };

    useEffect(() => {
        setTimeout(() => { paginate(1) }, 2500)
    })

    return (
        <React.Fragment>
            <Label label='Card information' error={false} />
            <Flex>
                <ChakraFlex
                    borderRadius='md'
                    mt='4px'
                >
                    <VStack spacing='0'>
                        <Input
                            position='top'
                            id={"card_number"}
                            type={"text"}
                            name={'card_number'}
                            label={"1234 1234 1234 1234"}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            iconMargin="24"
                            icon={
                                <HStack spacing="2">
                                    <Image
                                        src={Visa}
                                        alt="Visa"
                                        height={25}
                                    />
                                    <Image
                                        src={Mastercard}
                                        alt="Mastercard"
                                        height={25}
                                    />
                                    <Image
                                        src={AmericanExpress}
                                        alt="AmericanExpress"
                                        height={25}
                                    />
                                    <AnimatePresence initial={false}>
                                        <MotionImage
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            src={images[imageIndex]}
                                            alt="Rest supported cards"
                                            height={25}
                                            style={{
                                                "opacity": "0"
                                            }}
                                        />
                                    </AnimatePresence>
                                </HStack>
                            }
                        />
                        <HStack marginInlineStart={"0px"} w='full' borderRadius="md">
                            <Input
                                position='bottom'
                                direction='left'
                                id={"date"}
                                type={"numbers"}
                                name={'date'}
                                label={"MM / YY"}
                                control={control}
                                rules={{
                                    required: true,
                                }}
                            />
                            <Input
                                position='bottom'
                                direction='right'
                                id={"cvc"}
                                type={"text"}
                                name={'cvc'}
                                label={"CVC"}
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                icon={
                                    <Image
                                        src={CvvCard}
                                        alt="Visa"
                                        height={25}
                                    />
                                }
                            />
                        </HStack>
                    </VStack>
                </ChakraFlex>
            </Flex>
        </React.Fragment>
    )
}

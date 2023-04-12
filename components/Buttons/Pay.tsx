import React from 'react'
import {
    chakra, Skeleton, Icon, keyframes,
} from '@chakra-ui/react';
import { BorderColor, PrimaryColor, Shadow } from '@config/index';
import { IconType } from 'react-icons';
import { CgLock } from 'react-icons/cg';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ShimmerMove = keyframes`
    0% {
		transform: translateX(-150%);
	}
    100% {
        transform: translateX(150%);
    }
`

interface PayButtonProps {
    label: React.ReactNode;
    height?: string;
    type?: "button" | "submit" | "reset" | undefined;
    loaded?: boolean;
    onClick?: any;
    status?: string;
    icon?: IconType;
}

export const PayButton: React.FC<PayButtonProps> = ({ label, height, onClick, type = 'button', status = "incomplete", loaded = true, icon = CgLock }) => (
    <Skeleton
        w='full'
        isLoaded={loaded}
        borderRadius='lg'
        mt='3'
        mb="2"
    >
        <chakra.button
            w='full'
            h={height ? height : '12'}
            type={type}
            onClick={onClick}
            _focus={{ boxShadow: 'outline' }}
            sx={{
                'display': 'inline-block',
                'position': 'relative',
                'cursor': 'pointer',
                'border': 'none',
                'fontFamily': 'inherit',
                'pointerEvents': 'auto',
                'textTransform': 'uppercase',
                'letterSpacing': '0.05rem',
                'fontWeight': '700',
                'fontSize': '0.85rem',
                'borderRadius': '0.5rem',
                'overflow': 'hidden',
                'color': '#ffffff',
                'background': PrimaryColor,
                'zIndex': 1,
                '&::focus': {
                    'boxShadow': Shadow,
                    'borderColor': BorderColor
                },
                '&::before': {
                    'content': '""',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'height': '100%',
                    'width': '150%',
                    'background': 'linear-gradient(to right, rgba(0, 116, 212, 0) 0%, rgb(58, 139, 238) 50%, rgba(0, 116, 212, 0) 100%)',
                    'transform': 'translateX(-150%)',
                    'transition': 'opacity .2s ease',
                    'animation': `${status === "complete" ? `${ShimmerMove} 3s ease infinite` : ""}}`,
                    'opacity': '1'
                },
                // '&:hover::before': {
                //     'transform': 'translate3d(100%, 0, 0)',
                // },
                // '&:active': {
                //     'transform': `${scale ? 'scale(0.98)' : 'scale(1)'}`
                // },
            }}
        >
            <chakra.span
                opacity={status === "incomplete" ? 0.6 : 1}
                lineHeight="44px"
                transition="all .2s ease"
                width="full"

            >
                {status === "prossing" ? "Prossing..." : label}
            </chakra.span>
            {(status === "complete" || status == "prossing") && (
                <chakra.div
                    position="absolute"
                    right="0"
                    top="0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w={height}
                    h={height}
                >
                    {status === "prossing" ?
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
                            style={{
                                width: 20,
                                height: 20,
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Icon w="full" h="full" as={AiOutlineLoading3Quarters} />
                        </motion.div>
                        :
                        <Icon w="5" h="5" as={icon} />
                    }
                </chakra.div>
            )}
        </chakra.button>
    </Skeleton>
)
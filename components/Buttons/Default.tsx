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

interface DefaultButtonProps {
    label: React.ReactNode;
    height?: string;
    type?: "button" | "submit" | "reset" | undefined;
    loaded?: boolean;
    onClick?: any;
    status?: string;
    icon?: IconType;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ label, height, onClick, type = 'button', status = "incomplete", loaded = true, icon = CgLock }) => (
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
        </chakra.button>
    </Skeleton>
)
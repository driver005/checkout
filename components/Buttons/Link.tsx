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

interface LinkButtonProps {
    label: React.ReactNode;
    height?: string;
    type?: "button" | "submit" | "reset" | undefined;
    loaded?: boolean;
    onClick?: any;
    status?: string;
    icon?: IconType;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ label, height, onClick, type = 'button', status = "incomplete", loaded = true, icon = CgLock }) => (
    <Skeleton
        w='full'
        isLoaded={loaded}
        borderRadius='lg'
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
                'color': '#000',
                'background': '#33ddb3',

                '&::focus': {
                    'boxShadow': Shadow,
                    'borderColor': BorderColor
                },
            }}
        >
            {label}
        </chakra.button>
    </Skeleton>
)
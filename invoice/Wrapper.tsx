import { Card } from '@chakra-ui/react';
import React from 'react'

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <Card p="8" w="full" overflow='visible' backgroundColor="gray.50">
            {children}
        </Card>
    )
}

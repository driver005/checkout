import { Flex } from '@chakra-ui/react'
import React from 'react'
import Checkmark from './Checkmark'
import Line from './Line'


interface ProgressProps {
    animate: boolean
}

export const Progress: React.FC<ProgressProps> = ({ animate }) => {
    return (
        <Flex alignItems="center">
            <Line animate={animate} />
            <Checkmark animate={animate} />
            <Line animate={animate} DelayUntilStart={1.6} />
        </Flex>
    )
}

export default Progress

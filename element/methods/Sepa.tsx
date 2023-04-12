import React from 'react'
import {
    Checkbox,
    Flex as ChakraFlex,
    VStack,
} from '@chakra-ui/react';
import { Input } from '@components/Input'
import { Flex, Label } from '@components/index';

import { CurrentContext } from '@element/Context';

interface SepaProps { }

export const Sepa: React.FC<SepaProps> = () => {
    const control = React.useContext(CurrentContext);
    return (
        <React.Fragment>
            <VStack spacing='16px'>
                <Flex>
                    <Label label='Iban' error={false} />
                    <ChakraFlex
                        borderRadius='md'
                        mt='4px'
                    >
                        <Input
                            position='alone'
                            id={"iban"}
                            type={"text"}
                            name={'iban'}
                            label="DE00 0000 0000 0000 0000 00"
                            control={control}
                            rules={{
                                required: true,
                            }}
                        />
                    </ChakraFlex>
                </Flex>
                <Flex>
                    <Label label='Name' error={false} />
                    <ChakraFlex
                        borderRadius='md'
                        mt='4px'
                    >
                        <Input
                            position='alone'
                            id={"name"}
                            type={"text"}
                            name={'name'}
                            control={control}
                            rules={{
                                required: true,
                            }}
                        />
                    </ChakraFlex>
                </Flex>
                <Flex>
                    <Checkbox spacing='1rem'>Billing address is same as shipping</Checkbox>
                </Flex>
            </VStack>
        </React.Fragment>
    )
}
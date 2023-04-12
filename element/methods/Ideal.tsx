import { Flex, Label } from '@components/index'
import { Input } from '@components/Input';
import React from 'react'

import {
    Flex as ChakraFlex, HStack, VStack,
} from "@chakra-ui/react"
import { Select } from '@components/Select';
import { idealBanks } from '@variabels/index';
import { CurrentContext } from '@element/Context';


interface IdealProps { }

export const Ideal: React.FC<IdealProps> = () => {
    const control = React.useContext(CurrentContext);

    const [bank, setBank] = React.useState('Alior Bank')

    return (
        <React.Fragment>

            <VStack spacing="4">
                <Flex>
                    <Label label='Ideal Bank' error={false} />
                    <ChakraFlex
                        borderRadius='md'
                        mt='4px'
                    >
                        <Select
                            id={"bank"}
                            label={"Select Bank"}
                            name={"bank"}
                            values={idealBanks}
                            defaultValue={"Germany"}
                            position='alone'
                            onChanges={(e: any) => setBank(e)}
                            control={control}
                            rules={{
                                required: true,
                                defaultValue: "Germany",
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
            </VStack>

        </React.Fragment>
    )
}

import { Flex, Label } from '@components/index'
import { Input } from '@components/Input';
import React, { useEffect } from 'react'

import {
    Flex as ChakraFlex, HStack, VStack,
} from "@chakra-ui/react"

import { wrap } from "popmotion";
import { Select } from '@components/Select';
import { sofortCountries } from '@variabels/index';
import { CurrentContext } from '@element/Context';


interface SofortProps { }

export const Sofort: React.FC<SofortProps> = () => {
    const control = React.useContext(CurrentContext);
    const [bank, setBank] = React.useState('Alior Bank')

    return (
        <React.Fragment>
            <VStack spacing="4">
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
                    <Label label='Country or region' error={false} />
                    <ChakraFlex
                        borderRadius='md'
                        mt='4px'
                    >
                        <Select
                            id={"bank"}
                            label={"Select Bank"}
                            name={"bank"}
                            values={sofortCountries}
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
            </VStack>

        </React.Fragment>
    )
}

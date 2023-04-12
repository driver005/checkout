import { Flex, Label } from '@components/index'
import { Input } from '@components/Input';
import React from 'react'
import {
    Flex as ChakraFlex,
} from "@chakra-ui/react"
import { CurrentContext } from '@element/Context';


interface BancontactProps { }

export const Bancontact: React.FC<BancontactProps> = () => {
    const control = React.useContext(CurrentContext);
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

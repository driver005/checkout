import {
    MenuButton,
    Menu as ChakraMenu,
    MenuList,
    MenuItem,
    Icon,
    ButtonGroup,
    useRadioGroup,
    HStack
} from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons';
import { BsThreeDots } from 'react-icons/bs';
import { SiSepa } from 'react-icons/si';
import { Tab } from './Tab'
import bancontact from "@assets/methods/bancontact.svg"
import eps from "@assets/methods/eps.svg"
import ideal from "@assets/methods/ideal.svg"
import p24 from "@assets/methods/p24.svg"
import sepa from "@assets/methods/sepa.svg"
import sofort from "@assets/methods/sofort.svg"
import giropay from "@assets/methods/giropay.svg"
import card from "@assets/methods/card.svg"
import Image from 'next/image';
import { useController } from 'react-hook-form';
import { CurrentContext } from '@element/Context';
import { useMeasure } from 'react-use';

interface MenuProps {
    handleSetGateway: ({ icon, label, value }: { icon: any; label: string, value: string }) => void;
    selectedGateway: any;
}

export const Menu: React.FC<MenuProps> = ({ handleSetGateway, selectedGateway }) => {
    const control = React.useContext(CurrentContext);
    const [ref, { width }] = useMeasure();

    const items = [
        {
            icon: <Image height={16} src={card} alt="card" />,
            label: 'Card',
            value: 'Card',
        },
        {
            icon: <Image height={16} src={giropay} alt="giropay" />,
            label: 'GiroPay',
            value: 'GiroPay',
        },
        {
            icon: <Image height={16} src={sepa} alt="sepa" />,
            label: "SEPA Direct Debit",
            value: "Sepa"
        },
        {
            icon: <Image height={16} src={sofort} alt="sofort" />,
            label: "Sofort",
            value: "Sofort"
        },
        {
            icon: <Image height={16} src={bancontact} alt="bancontact" />,
            label: "Bancontact",
            value: "Bancontact"
        },
        {
            icon: <Image height={16} src={eps} alt="eps" />,
            label: "Eps",
            value: "Eps"
        },
        {
            icon: <Image height={16} src={ideal} alt="ideal" />,
            label: "Ideal",
            value: "Ideal"
        },
        {
            icon: <Image height={16} src={p24} alt="p24" />,
            label: "Przelewy24",
            value: "Przelewy24"
        }
    ]

    const { field } = useController({
        name: 'element',
        control,
        rules: { required: "Please select a payment option" },
        defaultValue: 'Sepa'
    });

    const { getRootProps, getRadioProps } = useRadioGroup({ ...field })

    const group = getRootProps()

    return (
        <HStack
            spacing='2'
            justifyContent='space-between'
            w='full'
            maxW="full"
            ref={ref as any}
            {...group}
        >
            <Tab
                icon={items[0].icon}
                label={items[0].label}
                props={getRadioProps({ value: items[0].value })}
            />
            {width <= 300 && (
                <Tab
                    icon={items[1].icon}
                    label={items[1].label}
                    props={getRadioProps({ value: items[1].value })}
                />
            )}
            {width >= 450 && (
                <Tab
                    icon={items[2].icon}
                    label={items[2].label}
                    props={getRadioProps({ value: items[2].value })}
                />
            )}
            <Tab
                icon={selectedGateway.icon}
                label={selectedGateway.label}
                props={getRadioProps({ value: selectedGateway.value })}
            />
            <ChakraMenu>
                <MenuButton type='button'>
                    <Tab
                        icon={<Icon w="full" h={4} as={BsThreeDots} />}
                    />
                </MenuButton>
                <MenuList zIndex="3">
                    {items.map((item, index) => {
                        var start = width >= 450 ? 3 : width <= 300 ? 2 : 1;
                        if (index >= start) {
                            return (
                                <React.Fragment key={index}>
                                    {selectedGateway.value !== item.value &&
                                        <MenuItem
                                            name="Sepa"
                                            onClick={() => {
                                                handleSetGateway({
                                                    icon: item.icon,
                                                    label: item.label,
                                                    value: item.value
                                                })
                                            }}
                                            icon={item.icon}
                                            zIndex="4"
                                        >
                                            {item.label}
                                        </MenuItem>
                                    }
                                </React.Fragment>
                            )
                        }
                    })
                    }
                </MenuList>
            </ChakraMenu>
        </HStack>
    )
}

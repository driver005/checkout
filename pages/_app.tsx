import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { wrapper } from 'store/store'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { ProductApi, ApiClient } from '../test/src/index'
import { ProductApi } from '@lib/index'


function MyApp({ Component, pageProps }: AppProps) {
    const dispatch = useDispatch();

    const Test = async () => {
        var p = new ProductApi()
        // p.defaultHeaders = {
        //     "Access-Control-Allow-Origin": "http://localhost:3000",
        //     "Access-Control-Allow-Headers": "X-Requested-With"
        // }
        await p.v1ProductsGet().then((value) => {
            if (value.status === 404) {
                console.log(value.data)
            }
            console.log(value.data)
        })

        // var a = new ProductApi()
        // a.v1ProductsGet((error: any, data: any, response: any) => {
        //     if (error) {
        //         console.log(error)
        //     }
        //     console.log(response)
        // })
    }

    useEffect(() => {
        dispatch({
            type: 'FETCH_PRODUCT',
            payload: [
                {
                    id: 1,
                    name: 'Test',
                    quantity: 12,
                    price: 10,
                    totalDue: 120,
                },
                {
                    id: 2,
                    name: 'Test',
                    quantity: 10,
                    price: 10,
                    totalDue: 100,
                }
            ],
        });
        dispatch({
            type: 'FETCH_SHIPPING',
            payload: [
                {
                    label: 'Free shipping',
                    labelInfo: '3-4 business day',
                    price: 'Free',
                    position: 'top',
                },
                {
                    label: 'Next day air',
                    labelInfo: 'At most  1 business day',
                    price: '15,00 €',
                    position: 'bottom',
                }
            ],
        });
        // Test()
    }, []);


    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default wrapper.withRedux(MyApp)

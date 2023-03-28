import * as React from 'react'
import {Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from './Card'
import {useEffect, useState} from "react";
import {IProductsState, Product} from "./CardTypes";
import axios from "axios";

const initialState = {
    id: 1,
    userId: 1,
    imageUrl: "fruits.jpg",
    price: 150,
    title: "Title",
    description: "Description",
    createdAt: "",
    updatedAt: ""
}

export default function Products<IProductsState>() {
    const [products, setProducts] = useState<Product[]>([initialState]);

    useEffect(() => {
        const controller = new AbortController()
        axios.get('/users/products', {signal: controller.signal}).then(res => {
            setProducts(res.data.products)
        }).catch(err => {
            if (axios.isCancel(err)) {
                console.log('cancelled!')
            } else {
                //todo: handle error
            }
        })

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <Container>
            <Typography variant={'h1'} className={'title'}>Products</Typography>
            <Stack direction={'row'} spacing={2} flexWrap={'wrap'}>
                {
                    products.map((product: Product) => {
                        return (
                            <Card key={product.id} product={product} />
                        )
                    })
                }
            </Stack>
        </Container>
    )
}
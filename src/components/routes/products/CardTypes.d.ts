interface IProductProps {
    product: Product
}

interface IProductsState {
    products: Product[]
}

interface Product {
    id: number;
    userId: number
    imageUrl: string,
    price: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string
}

export {
    IProductProps,
    IProductsState,
    Product
}
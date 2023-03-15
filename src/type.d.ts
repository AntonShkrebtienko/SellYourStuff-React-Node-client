interface IUser {
    id: number,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
}

interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number
    imageUrl: string,
    userId: number,
    createdAt: string,
    updatedAt: string,
}
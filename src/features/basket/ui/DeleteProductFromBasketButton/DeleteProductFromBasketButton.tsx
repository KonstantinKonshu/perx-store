import React from "react"
import { Button, ButtonProps } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { removeBasketProduct } from "@entities/basket"
import { Product } from "@entities/product"
import { useAppDispatch } from "@shared/config"

interface AddProductToBasketButtonProps extends Omit<ButtonProps, "children" | "onClick"> {
    data: Product
}

const DeleteProductFromBasketButton = ({ data, ...props }: AddProductToBasketButtonProps) => {
    const dispatch = useAppDispatch()

    const handleDeleteProductFromBasket = () => dispatch(removeBasketProduct(data.id))

    return <Button {...props} type='text' icon={<DeleteOutlined />} onClick={handleDeleteProductFromBasket} danger />
}

export default DeleteProductFromBasketButton

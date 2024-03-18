import React from "react"
import { Button, ButtonProps } from "antd"
import { BasketProductItem, addProductToBasket, selectors } from "@entities/basket"
import { Product } from "@entities/product"
import { useAppDispatch, useAppSelector } from "@shared/config"

interface AddProductToBasketButtonProps extends Omit<ButtonProps, "children" | "onClick"> {
    data: Product
}

const AddProductToBasketButton = ({ data, ...props }: AddProductToBasketButtonProps) => {
    const dispatch = useAppDispatch()

    const currentBasketProduct = useAppSelector<BasketProductItem | undefined>((state) =>
        selectors.selectBasketProductById(state, data.id)
    )

    const handleAddProductToBasket = () => dispatch(addProductToBasket({ ...data, count: 1 }))

    if (currentBasketProduct) {
        return null
    }

    return (
        <Button {...props} type='primary' onClick={handleAddProductToBasket}>
            В корзину
        </Button>
    )
}

export default AddProductToBasketButton

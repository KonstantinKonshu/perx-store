import React from "react"
import { Button, ButtonProps } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { removeAllBasketProducts } from "@entities/basket"
import { useAppDispatch } from "@shared/config"

interface ClearBasketButtonProps extends Omit<ButtonProps, "onClick"> {}

const ClearBasketButton = ({ children = "Очистить корзину", ...props }: ClearBasketButtonProps) => {
    const dispatch = useAppDispatch()

    const handleDeleteProductsFromBasket = () => dispatch(removeAllBasketProducts())

    return (
        <Button {...props} type='primary' icon={<DeleteOutlined />} onClick={handleDeleteProductsFromBasket} danger>
            {children}
        </Button>
    )
}

export default ClearBasketButton

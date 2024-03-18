import React, { FocusEvent, ReactNode } from "react"
import { Button, Flex, FlexProps, InputNumber } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { BasketProductItem, selectors, updateBasketProduct } from "@entities/basket"
import { Product } from "@entities/product"
import { useAppDispatch, useAppSelector } from "@shared/config"

interface UpdateBasketProductCountProps extends Omit<FlexProps, "children"> {
    data: Product
    children?: ReactNode
}

const UpdateBasketProductCount = ({ data, children, ...props }: UpdateBasketProductCountProps) => {
    const dispatch = useAppDispatch()

    const currentBasketProduct = useAppSelector<BasketProductItem | undefined>((state) =>
        selectors.selectBasketProductById(state, data.id)
    )

    const handleUpdateBasketProductCount = (event: FocusEvent<HTMLInputElement>) => {
        const count = Number(event.target.value || 1)
        if (!currentBasketProduct) {
            return
        }
        dispatch(updateBasketProduct({ ...currentBasketProduct, count: count > 0 ? count : 1 }))
    }

    const handleDecrementBasketProductCount = () => {
        if (!currentBasketProduct) {
            return
        }
        dispatch(updateBasketProduct({ ...currentBasketProduct, count: currentBasketProduct.count - 1 }))
    }

    const handleIncrementBasketProductCount = () => {
        if (!currentBasketProduct) {
            return
        }
        dispatch(updateBasketProduct({ ...currentBasketProduct, count: currentBasketProduct.count + 1 }))
    }

    if (!currentBasketProduct) {
        return null
    }

    return (
        <Flex gap={10} {...props}>
            <InputNumber
                type='number'
                value={currentBasketProduct.count}
                min={1}
                onBlur={handleUpdateBasketProductCount}
                controls={false}
            />
            <ButtonGroup>
                <Button
                    icon={<MinusOutlined />}
                    onClick={handleDecrementBasketProductCount}
                    disabled={currentBasketProduct.count < 2}
                />
                <Button icon={<PlusOutlined />} onClick={handleIncrementBasketProductCount} />
            </ButtonGroup>
            {children}
        </Flex>
    )
}

export default UpdateBasketProductCount

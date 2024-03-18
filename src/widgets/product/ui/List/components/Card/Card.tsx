import { Card as AntdCard, CardProps as AntdCardProps, Flex } from "antd"
import React from "react"
import { Product } from "@entities/product/model"
import { getSrcImage } from "@shared/utils"
import { AddProductToBasketButton, DeleteProductFromBasketButton, UpdateBasketProductCount } from "@features/basket"
import classes from "./Card.module.scss"

interface CardProps extends Omit<AntdCardProps, "children"> {
    data: Product
}

const Card = ({ data, ...props }: CardProps) => {
    return (
        <AntdCard
            {...props}
            className={classes.root}
            cover={<img alt='example' src={getSrcImage(data.image)} />}
            hoverable>
            <Flex vertical gap={24}>
                <AntdCard.Meta title={data.name} description={`Цена: ${data.price.toLocaleString("ru")} ₽`} />
                <Flex vertical align='center'>
                    <AddProductToBasketButton data={data} />
                    <UpdateBasketProductCount data={data}>
                        <DeleteProductFromBasketButton data={data} />
                    </UpdateBasketProductCount>
                </Flex>
            </Flex>
        </AntdCard>
    )
}

export default Card

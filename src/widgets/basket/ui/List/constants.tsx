import React from "react"
import { Flex, Image } from "antd"
import { ColumnsType } from "antd/es/table"
import { BasketProductItem } from "@entities/basket"
import { getSrcImage } from "@shared/utils"
import { DeleteProductFromBasketButton, UpdateBasketProductCount } from "@features/basket"
import classes from "./List.module.scss"

export const columns: ColumnsType<BasketProductItem> = [
    {
        title: "Название",
        dataIndex: "name",
        fixed: "left",
        width: 120,
    },
    {
        dataIndex: "image",
        width: 140,
        render: (_, { name, image }) => <Image src={getSrcImage(image)} alt={name} className={classes.productCover} />,
    },
    {
        title: "Цена",
        dataIndex: "price",
        render: (_, { price }) => `${price.toLocaleString("ru")} ₽`,
        width: 120,
    },
    {
        title: "",
        dataIndex: "actions",
        render: (_, { count, ...product }) => (
            <Flex vertical align='center'>
                <UpdateBasketProductCount data={product}>
                    <DeleteProductFromBasketButton data={product} />
                </UpdateBasketProductCount>
            </Flex>
        ),
        width: 210,
    },
    {
        title: "Сумма",
        dataIndex: "sum",
        render: (_, { count, price }) => `${(count * price).toLocaleString("ru")} ₽`,
        width: 160,
    },
]

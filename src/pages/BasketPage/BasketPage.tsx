import { Typography } from "antd"
import React from "react"
import { List } from "@widgets/basket"

const BasketPage = () => {
    return (
        <>
            <Typography.Title level={2}>Корзина</Typography.Title>
            <List />
        </>
    )
}

export default BasketPage

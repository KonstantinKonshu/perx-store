import React from "react"
import { Badge, Layout, Typography } from "antd"
import { Link } from "react-router-dom"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { ROUTES } from "@shared/constants"
import { useAppSelector } from "@shared/config"
import { selectors } from "@entities/basket"
import { BAGDE_BASKET_OVERFLOW_COUNT } from "./constants"
import classes from "./HeaderMain.module.scss"

export const HeaderMain = () => {
    const totalQuantity = useAppSelector(selectors.selectBasketTotalQuantity)

    return (
        <Layout.Header className={classes.root}>
            <Link to={ROUTES.ROOT} className={classes.link}>
                <Typography.Title>PerxStore</Typography.Title>
            </Link>
            <Link to={ROUTES.BASKET} className={classes.link}>
                <Badge count={totalQuantity} overflowCount={BAGDE_BASKET_OVERFLOW_COUNT} size='small'>
                    <ShoppingCartOutlined
                        style={{
                            fontSize: 30,
                            color: "white",
                        }}
                    />
                </Badge>
            </Link>
        </Layout.Header>
    )
}

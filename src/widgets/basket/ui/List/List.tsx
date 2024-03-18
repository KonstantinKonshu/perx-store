import React from "react"
import { Flex, FlexProps, Table, Typography } from "antd"
import { useAppSelector } from "@shared/config"
import { selectors } from "@entities/basket"
import { ClearBasketButton } from "@features/basket"
import { columns } from "./constants"
import classes from "./List.module.scss"

interface ListProps extends Omit<FlexProps, "children"> {}

const List = (props: ListProps) => {
    const basketProducts = useAppSelector(selectors.selectBasketProducts)
    const totalAmount = useAppSelector(selectors.selectBasketTotalAmount)

    return (
        <Flex {...props} vertical gap={24}>
            <Flex justify='flex-end'>
                <ClearBasketButton disabled={!basketProducts.length} />
            </Flex>
            <Table
                columns={columns}
                dataSource={basketProducts}
                rowKey='id'
                pagination={false}
                scroll={{ x: "max-content" }}
            />
            <Flex justify='flex-end'>
                <Typography.Text className={classes.totalAmount}>
                    Итого: {totalAmount.toLocaleString("ru")} ₽
                </Typography.Text>
            </Flex>
        </Flex>
    )
}

export default List

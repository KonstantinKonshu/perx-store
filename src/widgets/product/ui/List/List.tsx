import React from "react"
import { Col, Row, RowProps, Spin } from "antd"
import { useAppSelector } from "@shared/config"
import { selectors } from "@entities/dealer"
import { useGetProductsQuery } from "@entities/product"
import { Card } from "./components"

interface ListProps extends Omit<RowProps, "children"> {}

const List = (props: ListProps) => {
    const dealers = useAppSelector(selectors.selectDealerIds)

    const { data, isLoading } = useGetProductsQuery({ dealers })

    return (
        <>
            <Row {...props} gutter={[16, 16]}>
                {data?.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} xl={6} xxl={6}>
                        <Card data={product} />
                    </Col>
                ))}
            </Row>
            <Spin spinning={isLoading} size='large' fullscreen />
        </>
    )
}

export default List

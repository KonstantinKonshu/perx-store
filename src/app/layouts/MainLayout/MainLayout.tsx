import React from "react"
import { FloatButton, Layout } from "antd"
import { Outlet } from "react-router-dom"
import { HeaderMain } from "@widgets/layout"
import classes from "./MainLayout.module.scss"

const MainLayout = () => {
    return (
        <Layout className={classes.root}>
            <HeaderMain />
            <Layout.Content className={classes.content}>
                <Outlet />
            </Layout.Content>
            <FloatButton.BackTop />
        </Layout>
    )
}

export default MainLayout

import { Navigate, Route, Routes } from "react-router-dom"
import React from "react"
import { MainLayout } from "@app/layouts"
import { ROUTES } from "@shared/constants"
import { ProductsPage } from "@pages/ProductsPage"
import { BasketPage } from "@pages/BasketPage"

const Routing = () => {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<MainLayout />}>
                <Route index element={<Navigate to={ROUTES.PRODUCTS} />} />
                <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
                <Route path={ROUTES.BASKET} element={<BasketPage />} />
            </Route>
        </Routes>
    )
}

export default Routing


import React from "react"
import Category from "../components/category/Category"
import FooterApp from "../components/FooterApp"
import Header from "../components/Header"
import DialogShow from "../components/dialog/DialogShow"
import CartDetails from "../components/CartDetails"
import BtnScroll from "../components/BtnScroll"
const CategoriesPage = () =>{
    return (
        <React.Fragment>
            <Header />
            <Category />
            <FooterApp />
            <CartDetails />
            <BtnScroll />
            <DialogShow />
        </React.Fragment>
    )
}


export default CategoriesPage
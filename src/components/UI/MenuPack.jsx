import { Button, Stack, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { products } from "../../assets/data/products";
import ProductCard from "./ProductCard";
import "../../styles/home.css";

const MenuPack = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [allProducts, setAllProducts] = useState(products);
    useEffect(() => {
        if (selectedCategory === "All") {
            setAllProducts(products);
        }

        if (selectedCategory === "Burger") {
            const filteredProducts = products.filter(
                (product) => product.category === "Burger"
            );
            setAllProducts(filteredProducts);
        }
        if (selectedCategory === "Cake") {
            const filteredProducts = products.filter(
                (product) => product.category === "Cake"
            );
            setAllProducts(filteredProducts);
        }
        if (selectedCategory === "Chicken") {
            const filteredProducts = products.filter(
                (product) => product.category === "Chicken"
            );
            setAllProducts(filteredProducts);
        }
        if (selectedCategory === "Fries") {
            const filteredProducts = products.filter(
                (product) => product.category === "Fries"
            );
            setAllProducts(filteredProducts);
        }
    }, [selectedCategory]);

    return (
        <section>
            <Box>
                <Typography variant="h4" color="maroon" textAlign="center">
                    Our Menu Pack
                </Typography>
            </Box>
            <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Stack
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                        flexDirection: "row",
                        gap: "1rem",
                        background:
                            "linear-gradient(to right, #eb3a3a 0%, #e46a6a 100%)",
                        width: "50%",
                    }}
                >
                    <Button
                        className={`category__btn ${
                            selectedCategory == "All" ? "active__category" : ""
                        }`}
                        onClick={() => setSelectedCategory("All")}
                    >
                        All
                    </Button>
                    <Button
                        className={`category__btn ${
                            selectedCategory == "Burger"
                                ? "active__category"
                                : ""
                        }`}
                        onClick={() => setSelectedCategory("Burger")}
                    >
                        Burger
                    </Button>
                    <Button
                        className={`category__btn ${
                            selectedCategory == "Cake" ? "active__category" : ""
                        }`}
                        onClick={() => setSelectedCategory("Cake")}
                    >
                        Cake
                    </Button>
                    <Button
                        className={`category__btn ${
                            selectedCategory == "Chicken"
                                ? "active__category"
                                : ""
                        }`}
                        onClick={() => setSelectedCategory("Chicken")}
                    >
                        Chicken
                    </Button>
                    <Button
                        className={`category__btn ${
                            selectedCategory == "Fries"
                                ? "active__category"
                                : ""
                        }`}
                        onClick={() => setSelectedCategory("Fries")}
                    >
                        Fries
                    </Button>
                </Stack>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignProdproducts: "center",
                    justifyContent: "center",
                }}
                className="menu__stack"
            >
                {allProducts.slice(0, 12).map((product) => (
                    <Stack key={product.id} direction="row" spacing={2} m={2}>
                        <ProductCard product={product} />
                    </Stack>
                ))}
            </Box>
        </section>
    );
};

export default MenuPack;

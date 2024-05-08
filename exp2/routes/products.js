const express = require('express')
const router = express.Router()

let products = [
    {
        "id" : 1,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "iphone 13",
        "price" : 70000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 2,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "samsung",
        "price" : 21000,
        "rating" : 3.9,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 3,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "nokia 911",
        "price" : 30000,
        "rating" : 3.5,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 4,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "realme 15",
        "price" : 21000,
        "rating" : 4.0,
        "discount" : 50,
        "availabitity" : "no"
    },
    {
        "id" : 5,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "phone 2",
        "price" : 17000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 6,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "phone 3",
        "price" : 9000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 7,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "phone 4",
        "price" : 19000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 8,
        "company" : "AMZ",
        "Categories" : "Phone",
        "productName" : "phone 5",
        "price" : 15000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 9,
        "company" : "AMZ",
        "Categories" : "Laptop",
        "productName" : "Laptop 1",
        "price" : 78000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 10,
        "company" : "AMZ",
        "Categories" : "Laptop",
        "productName" : "Laptop 2",
        "price" : 210000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 13,
        "company" : "AMZ",
        "Categories" : "Laptop",
        "productName" : "Laptop 3",
        "price" : 121000,
        "rating" : 2.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 14,
        "company" : "FLP",
        "Categories" : "Phone",
        "productName" : "phone",
        "price" : 21000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 15,
        "company" : "FLP",
        "Categories" : "Phone",
        "productName" : "phone",
        "price" : 21000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 16,
        "company" : "FLP",
        "Categories" : "Phone",
        "productName" : "phone",
        "price" : 21000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    {
        "id" : 17,
        "company" : "FLP",
        "Categories" : "Phone",
        "productName" : "phone",
        "price" : 21000,
        "rating" : 4.7,
        "discount" : 50,
        "availabitity" : "yes"
    },
    
]


router.param("company", (req, res, next, company) => {
    const product = products.find(product => product.company.toLocaleLowerCase() === company.toLocaleLowerCase() );
    if (!product) {
        return res.json({ error: "Product not found" });
    }
    req.product = product;
    next();
});


router.param("Categories", (req,res,next,Categories)=>{
    const product = products.find(product =>product.Categories === Categories);
    if (!product) {
        return res.json({ error: "Product not found" });
    }
    next();
})

router.param("id", (req,res,next,id)=>{
    const product = products.find(product => product.id === id);
    if (!product) {
        return res.json({ error: "Product not found" });
    }
    next();
})

router.get(('/companies/:company'), (req, res) => {
    const { company } = req.params;
    const companyProducts = products.filter(product => product.company.toLocaleLowerCase() === company.toLocaleLowerCase());
    
    if (companyProducts.length === 0) {
        return res.status(404).json({ error: `No products found for company ${company}` });
    }
    
    res.json(companyProducts);
});

router.get(('/companies'), (req, res)=> {
    res.send("Enter the company name");
})

router.get(('/companies/:company/categories'), (req, res)=> {
    res.send("enter category")
})

router.get(('/companies/:company/categories/:Categories'), (req, res)=> {
    const {Categories, company} = req.params ;
    const categoriesProduct = products.filter(product => product.company === company && product.Categories === Categories )
    res.json(categoriesProduct)
})

router.get(('/companies/:company/categories/:Categories/product/:id'), (req, res)=> {
    const {Categories, company, id} = req.params ;
    const categoriesProduct = products.filter(product => product.company === company && product.Categories === Categories && product.id === id )
    res.json(categoriesProduct)
})

router.get('/', (req, res) => {
    res.send("E-commerce website Test");
});

module.exports = router
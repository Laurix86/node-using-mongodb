import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from "../controllers/controllers";

const routes = (app) =>{
    app.route('/products')
        .get(getProducts)
        .post(addnewProduct)
        .delete(deleteProduct);

    app.route('/products/:ProductID')
        .get(getProductWithID)
        .put(updateProduct);
    
    
}

export default routes;
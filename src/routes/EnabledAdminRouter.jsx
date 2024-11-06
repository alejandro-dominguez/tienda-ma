import {
    Route,
    Routes
} from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from '../pages/ErrorPage';
import AdminErrorPage from '../pages/AdminErrorPage';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import PaymentsPage from '../pages/PaymentsPage';
import SizesGuide from '../pages/SizesGuide';
import AdminPage from '../pages/AdminPage';
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage';
import RefoundsPage from '../pages/RefundsPage';
import WholesalersPage from '../pages/WholesalersPage';
import AboutClientPage from '../pages/AboutClientPage';
import BlogsContainer from '../containers/BlogsContainer';
import BlogArticleContainer from '../containers/BlogArticleContainer';
import ProductLineItemListContainer from '../containers/ProductLineItemListContainer';
import SubcategoriesItemListContainer from '../containers/SubcategoriesItemListContainer';
import BrandItemListContainer from '../containers/BrandItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import ItemCategoriesContainer from '../containers/ItemCategoriesContainer';
import FeaturedBlogArticleContainer from '../containers/FeaturedBlogArticleContainer';
import CartContainer from '../containers/CartContainer';
import AdminLandingPage from '../pages/AdminLandingPage';
import AdminPromotionsPage from '../pages/adminPages/AdminPromotionsPage';
import AdminCommentsPage from '../pages/adminPages/AdminCommentsPage';
import AdminProductsPage from '../pages/adminPages/AdminProductsPage';
import AdminBlogsPage from '../pages/adminPages/AdminBlogsPage';
import AdminPaymentsPage from '../pages/adminPages/AdminPaymentsPage';
import AdminOrdersPage from '../pages/adminPages/AdminOrdersPage';  
import AdminWholesalersPage from '../pages/adminPages/AdminWholesalersPage';  
import AdminMessagesPage from '../pages/adminPages/AdminMessagesPage';
import EditProductPage from '../pages/adminPages/adminDetailPages/EditProductPage';
import EditBlogPage from '../pages/adminPages/adminDetailPages/EditBlogPage';
import EditPaymentPage from '../pages/adminPages/adminDetailPages/EditPaymentPage';
import AdminOrdersDetailPage from '../pages/adminPages/adminDetailPages/AdminOrdersDetailPage';
import AdminWholesalersDetailPage from '../pages/adminPages/adminDetailPages/AdminWholesalersDetailPage';
import AdminMessagesDetailPage from '../pages/adminPages/adminDetailPages/AdminMessagesDetailPage';

const EnabledAdminRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Layout />}
            >
                <Route
                    index
                    element={<HomePage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/categorias/:categoryId/'
                    element={<ItemCategoriesContainer />}
                    errorElement={<ErrorPage />}
                >
                    <Route
                        path=':subcategoryId/'
                        element={<ItemListContainer />}
                    >
                        <Route
                            path='detalle/:id'
                            element={<ItemDetailContainer />}
                        />
                    </Route>
                </Route>
                <Route
                    path='/categorias/marcas/:brandId'
                    element={<BrandItemListContainer />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/categorias/subcategorias/:subcategoryId'
                    element={<SubcategoriesItemListContainer/>}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/categorias/lineasDeProducto/:productLineId'
                    element={<ProductLineItemListContainer />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/nosotros'
                    element={<AboutUsPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/blogs/'
                    element={<BlogsContainer />}
                    errorElement={<ErrorPage />}
                >
                    <Route
                        path=':id'
                        element={<BlogArticleContainer />}
                    />
                    <Route
                        path='destacado/:id'
                        element={<FeaturedBlogArticleContainer />}
                    />
                </Route>
                <Route
                    path='/formasDePago'
                    element={<PaymentsPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/talles'
                    element={<SizesGuide />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/carrito'
                    element={<CartContainer />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/admin'
                    element={<AdminPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/terminos&condiciones'
                    element={<TermsAndConditionsPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/devoluciones'
                    element={<RefoundsPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/mayoristas'
                    element={<WholesalersPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/sobreUstedes'
                    element={<AboutClientPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/admin/consola/'
                    element={<AdminLandingPage />}
                    errorElement={<AdminErrorPage />}
                >
                    <Route
                        path='comentarios'
                        element={<AdminCommentsPage />}
                    />
                    <Route
                        path='promociones'
                        element={<AdminPromotionsPage />}
                    />
                    <Route
                        path='productos/'
                        element={<AdminProductsPage />}
                    >
                        <Route
                            path='editar/:id'
                            element={<EditProductPage />}
                        />
                    </Route>
                    <Route
                        path='blogs/'
                        element={<AdminBlogsPage />}
                    >
                        <Route
                            path='editar/:id'
                            element={<EditBlogPage />}
                        />
                    </Route>
                    <Route
                        path='formasDePago/'
                        element={<AdminPaymentsPage />}
                    >
                        <Route
                            path='editar/:id'
                            element={<EditPaymentPage />}
                        />
                    </Route>
                    <Route
                        path='ordenes/'
                        element={<AdminOrdersPage />}
                    >
                        <Route
                            path=':id'
                            element={<AdminOrdersDetailPage />}
                        />
                    </Route>
                    <Route
                        path='mensajesMayoristas/'
                        element={<AdminWholesalersPage />}
                    >
                        <Route
                            path=':id'
                            element={<AdminWholesalersDetailPage />}
                        />
                    </Route>
                    <Route
                        path='mensajesContacto/'
                        element={<AdminMessagesPage />}
                    >
                        <Route
                            path=':id'
                            element={<AdminMessagesDetailPage />}
                        />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
};

export default EnabledAdminRouter;

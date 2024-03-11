import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import HomePage from '../../pages/HomePage';
import AboutUsPage from '../../pages/AboutUsPage';
import ErrorPage from '../../pages/ErrorPage';
import AdminPage from '../../pages/AdminPage';
import TermsAndConditionsPage from '../../pages/TermsAndConditionsPage';
import RefoundsPage from '../../pages/RefundsPage';
import ItemCategoriesContainer from '../../containers/ItemCategoriesContainer';
import CartContainer from '../../containers/CartContainer';
import BlogsContainer from '../../containers/BlogsContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import BrandItemListContainer from '../../containers/BrandItemListContainer';
import SubcategoriesItemListContainer from '../../containers/SubcategoriesItemListContainer';
import ProductLineItemListContainer from '../../containers/ProductLineItemListContainer';
import BlogArticleContainer from '../../containers/BlogArticleContainer';
import SizesGuide from '../../pages/SizesGuide';
import PaymentsPage from '../../pages/PaymentsPage';
import WholesalersPage from '../../pages/WholesalersPage';

const clientRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/:categoryId',
                element: <ItemCategoriesContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/:categoryId/:subcategoryId',
                element: <ItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/:categoryId/:subcategoryId/detalle/:id',
                element: <ItemDetailContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/marcas/:brandId',
                element: <BrandItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/subcategorias/:subcategoryId',
                element: <SubcategoriesItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/lineasDeProducto/:productLineId',
                element: <ProductLineItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/nosotros',
                element: <AboutUsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/blogs',
                element: <BlogsContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/blogs/:id',
                element: <BlogArticleContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/formasDePago',
                element: <PaymentsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/talles',
                element: <SizesGuide />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/carrito',
                element: <CartContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/admin',
                element: <AdminPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/terminos&condiciones',
                element: <TermsAndConditionsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/devoluciones',
                element: <RefoundsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/mayoristas',
                element: <WholesalersPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

export default clientRouter;

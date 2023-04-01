import ErrorPage from '../pages/error/ErrorPage';
import CvOnlinePage from '../pages/cv-online/CvOnlinePage';

export const routes = [
    {
        path: "/",
        element: <CvOnlinePage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <div>Home</div>,
    },
]
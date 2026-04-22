import App from '../App'
import Gallery from '../pages/Gallery'
import Booking from '../pages/Booking'
import Philosophy from '../pages/Philosophy'

export let routerApp = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/gallery",
        element: <Gallery />
    },
    {
        path: "/booking",
        element: <Booking />
    },
    {
        path: "/philosophy",
        element: <Philosophy />
    }
]
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './layouts/NavBar';
import Home from './pages/home';
import Work from './pages/work';
import DynamicPage from './components/dynamicpage';
import Agency from './pages/agency';
import Contact from './pages/contact';
import GetInTouch from './pages/getintouch';
import PrivacyPolicy from './pages/privacypolicy';
import { data } from './data/data';


function PageLoader() {

    const routes = data.map((page) => {
        return <Route key={page.id} path={`/${page.linkName}`} 
            element={<DynamicPage pageInfo={page}/>} />
    })

    


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar />} >
                    <Route path='/home' element={<Home />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/test' element={<DynamicPage />} />
                    <Route path='/agency' element={<Agency />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/get-in-touch' element={<GetInTouch />} />
                    <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                    {routes}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default PageLoader

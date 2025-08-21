
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
const HomeLayout = () => {

    return (
        <div className='w-full  mx-auto '>
        <header className='shadow-xl px-10'>
            <Navbar></Navbar>
        
        </header>
        <main className='w-11/12 mx-auto min-h-screen'>
            <Outlet></Outlet>
        </main>
        <footer className='w-full'>
            <Footer/>
        </footer>
        </div>
    );
};

export default HomeLayout;
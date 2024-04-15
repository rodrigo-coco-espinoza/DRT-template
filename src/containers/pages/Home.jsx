import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { motion } from 'framer-motion'

function Home() {

    // Scroll to top of page
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <Layout>
            <Navbar />

            {/* Motion for smooth transition */}
            <motion.div
                initial={{opacity: 0, transition: {duration: 1}}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: {duration: 0}}}
            >
                {/* Body */}
                <div>
                    This is your home page.
                </div>
            </motion.div>
            

            <Footer />
        </Layout>

    );
}

export default Home;
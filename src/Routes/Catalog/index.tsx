import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardCar from '../../components/CardCar';

export default function Catalog() {
    return (
        <div className='ct-page-container'>
            <Header />

            <main className='ct-catalog-main'>
                <section className='ct-section-card-cars ct-container'>
                    <h2>Venha nos visitar</h2>
                    <div className='ct-card-cars-container'>
                        <CardCar />
                        <CardCar />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
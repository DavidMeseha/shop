import Display from '@/layouts/Display'
import FilterSection from '@/layouts/FilterSection'
import style from '@/styles/Home.module.scss'
import Head from 'next/head'
import { useWindowWidth } from '@react-hook/window-size'
import useFilter from '@/hooks/useFilter'

export default function Home({ laptops }) {
    const { state } = useFilter()
    const windowWidth = useWindowWidth()

    return (
        <>
            <Head>
                <title>Shop Now</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.main}>
                <div className={style.filters} style={{ transform: `translate(${state ? 0 : windowWidth <= 1024 ? -300 : 0}px,0px)` }}>
                    <FilterSection laptops={laptops} />
                </div>
                <div className={style.products}>
                    <Display laptops={laptops} />
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const laptops = [
        {
            id: '000001',
            brand: 'Lenovo',
            model: 'Legon Z8',
            type: 'Gaming',
            price: 38999,
            image: 'OIP.jpg',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i7', version: '10th-Gen 10400H', speed: '4.5GHz' },
                GPU: { processor: 'Nvidia GeForce RTX', type: '3050', size: '4GB' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: '1TB',
                SSD: 'non',
                screen: '15.6 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: ['pen', 'touchscreen']
            }
        },
        {
            id: '000002',
            brand: 'Lenovo',
            model: 'Ideapad5 15Itl05-G',
            type: 'Notebook',
            price: 18999,
            image: '000002.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i7', version: '11th-Gen 1165G7', speed: '2.8GHz' },
                GPU: { processor: 'Intel Iris Xe Graphics', type: '', size: '' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: '1TB',
                SSD: '512GB',
                screen: '15.6 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000003',
            brand: 'Dell',
            model: 'Vostro 3500',
            type: 'PC',
            price: 22699,
            image: '000003.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i7', version: '11th-Gen 1165G7', speed: '2.8GHz' },
                GPU: { processor: 'Nvidia GeForce MX', type: '330', size: '2GB' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: '1TB',
                SSD: 'none',
                screen: '15.6 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000004',
            brand: 'HP',
            model: 'Victus 15-fa0031dx',
            type: 'Gaming',
            price: 25550,
            image: '000004.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i5', version: '12th-Gen 1165G7', speed: '3.3GHz' },
                GPU: { processor: 'Nvidia GeForce GTX', type: '1650', size: '4GB' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: 'none',
                SSD: '512GB',
                screen: '15.6 inch',
                OS: 'Windows11',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000005',
            brand: 'Dell',
            model: 'Vostro 3510',
            type: 'Transformer',
            price: 27550,
            image: '000005.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i7', version: '11th-Gen 1165G7', speed: '2.8GHz' },
                GPU: { processor: 'Nvidia GeForce MX', type: '350', size: '2GB' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: '1TB',
                SSD: 'none',
                screen: '15.6 inch',
                OS: 'Ubuntu',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000006',
            brand: 'ASUS',
            model: 'ROG Zephyrus Duo 16',
            type: 'Gaming',
            price: 122000,
            image: '000006.webp',
            specs: {
                CPU: { brand: 'Ryzen', type: '9', version: '5th Gen 5900HX', speed: '3.3GHz' },
                GPU: { processor: 'Nvidia GeForce RTX', type: '3080 Ti', size: '16GB' },
                ram: { size: '32GB', type: 'DDR4' },
                HDD: 'none',
                SSD: '2TB',
                screen: '15.6 inch',
                OS: 'Windows11',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000007',
            brand: 'HP',
            model: '15S-Fq5021 I5-1235U-8-512-D',
            type: 'Gaming',
            price: 17299,
            image: '000007.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i5', version: '12th Gen 1235U', speed: '4.4GHz' },
                GPU: { processor: 'Intel Iris Xe Graphics', type: '', size: '' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: 'none',
                SSD: '512GB',
                screen: '15.6 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000008',
            brand: 'HP',
            model: '15-dw3024nx',
            type: 'PC',
            price: 17299,
            image: '000008.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i7', version: '11th Gen 1165G7', speed: '4.4GHz' },
                GPU: { processor: 'Nvidia GeForce MX', type: '450', size: '2GB' },
                ram: { size: '8GB', type: 'DDR4' },
                HDD: 'none',
                SSD: '512GB',
                screen: '14.6 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000009',
            brand: 'ASUS',
            model: 'ROG Strix Gaming',
            type: 'Gaming',
            price: 32750,
            image: '000009.webp',
            specs: {
                CPU: { brand: 'Ryzen', type: '7', version: '6th Gen 6800H', speed: '3.2GHz' },
                GPU: { processor: 'Nvidia GeForce RTX', type: '3050', size: '4GB' },
                ram: { size: '16GB', type: 'DDR4' },
                HDD: 'none',
                SSD: '512GB',
                screen: '15.6 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
        {
            id: '000010',
            brand: 'Microsoft',
            model: 'Surface Laptop Go',
            type: 'PC',
            price:  22800,
            image: '000010.webp',
            specs: {
                CPU: { brand: 'Intel', type: 'Core i5', version: '10th Gen 1035G1', speed: '1GHz' },
                GPU: { processor: 'Intel UHD Graphics', type: '', size: '' },
                ram: { size: '16GB', type: 'LPDDR4' },
                HDD: 'none',
                SSD: '256GB',
                screen: '12.4 inch',
                OS: 'dos',
                connection: ['wifi', 'bluetooth'],
                otherOptions: []
            },
        },
    ]

    return { props: { laptops } }
}

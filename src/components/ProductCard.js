import Image from "next/image";
import style from '@/styles/Card.module.scss';
import { Heart as HeartIcon } from "@/components/Icons";

const ProductCard = ({ title, price, image, display }) => {
    return (
        <>
            <div className={style[display]}>
                <div className={style.img}>
                    <Image src={`/products/${image}`} alt={`${title}`} sizes='500px' fill />
                    <div className={style.favorite}><div className={style.icon}><HeartIcon /></div></div>
                </div>
                <div className={style.data}>
                    <div className={style.text}>
                        <h3 className={style.title}>{title}</h3>
                        <h3>{price + " "}<span>EGP</span></h3>
                    </div>
                    <button>Add To Cart</button>
                </div>
            </div>
        </>
    )
};
export default ProductCard;
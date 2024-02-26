import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
    icon: string | StaticImport;
    text: string;
};

const Card = (props: Props) => {
    const { icon, text } = props;
    return (
        <div className="rounded-md p-2 flex flex-col">
            <div>
                <Image 
                    src={icon}
                    alt="Card Image"
                    width={100}
                    height={100}
                    className="aspect-square"
                />
            </div>
            <div className="flex justify-center items-center font-semibold w-full text-center p-1 text-sm">
                {text}
            </div>
        </div>
    )
};

export default Card;
import Link from "next/link";
import Image from "next/image";
import Section from "../section";
import house from "@/assets/images/rumah.jpg";
import cafe from "@/assets/images/cafe.jpg";
import hotel from "@/assets/images/hotel.jpg";
import pabrik from "@/assets/images/pabrik.jpg";
import restoran from "@/assets/images/restoran.jpg";
import villa from "@/assets/images/villa.jpg";
import gudang from "@/assets/images/warehouse.jpg";
import kos from "@/assets/images/kos.jpg";

const options = [
    {title: "Rumah", image: house},
    {title: "Kost", image: kos},
    {title: "Villa", image: villa},
    {title: "Hotel", image: hotel},
    {title: "Gudang", image: gudang},
    {title: "Cafe", image: cafe},
    {title: "Resto", image: restoran},
    {title: "Pabrik", image: pabrik},
]

const ContactUs = () => {
    return (
        <Section>
            <div className="bg-stone-900 w-full min-h-24 flex flex-col justify-center items-center">
                <div className="font-bold text-lg text-yellow-50 w-[50%] text-center underline decoration-yellow-400 decoration-4 underline-offset-4">
                    Layanan Jasa Kontraktor Terbaik
                </div>
                <div className="my-8 px-4 flex flex-row gap-4 pb-3 w-full overflow-x-scroll snap-x snap-mandatory touch-auto scrollbar-thin scrollbar-track-stone-900 scrollbar-thumb-stone-700 select-none">
                    {options.map((option, i) => 
                        <div key={i} className="flex flex-col relative snap-center">
                            <div className="w-[15svw]">
                                <Image 
                                    src= {option.image}
                                    alt= "Card Image"
                                    width= {200}
                                    height= {112.5}
                                    className= "w-full rounded-md aspect-video"
                                />
                            </div>
                            <div className="absolute top-0 bg-stone-900/60 hover:bg-yellow-500/60 text-yellow-500 hover:text-stone-950 w-full h-full flex flex-col gap-4 items-center justify-between p-4 rounded-md">
                                <div className="font-bold text-xl text-center">
                                    {option.title}
                                </div>
                                <div className="rounded-md bg-yellow-500 text-stone-900 font-semibold py-1 px-2 text-sm">
                                    <Link href="/">
                                        Kontak Kami
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    )
};

export default ContactUs;
import Section from "../section";
import Image from "next/image";
import HeroImg from "@/assets/images/heroimg.jpg";
import Blueprint from "@/assets/images/blueprint.svg";
import TextAnimation from "./text";
import Link from "next/link";

const Hero = () => {
    return (
        <Section>
            <div className="flex flex-col relative">
                <div>
                    <Image 
                        src={HeroImg}
                        alt="Hero Image"
                        width={200}
                        height={112.5}
                        className="w-full aspect-video"
                        priority
                    />
                </div>
                <div className="absolute top-0 bg-stone-950/70 w-full h-full px-6 py-8 flex flex-col gap-4 sm:p-12 lg:py-20 xl:py-32">
                    <div className="flex flex-row gap-4 lg:justify-center lg:items-center">
                        <div className="flex justify-center items-center">
                            <Image 
                                src={Blueprint}
                                alt="Blueprint Icon"
                                width={80}
                                height={80}
                                className="aspect-square"
                            />
                        </div>
                        <div className="flex justify-center items-center max-w-36 sm:h-20 sm:w-64">
                            <div className="font-bold text-yellow-50">
                                <TextAnimation />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-md bg-yellow-400 font-semibold text-stone-900 cursor-pointer mx-auto max-w-[60%] px-2 py-1 text-center hover:bg-yellow-500">
                            <Link href="/" className="w-full">
                                Konsultasi Gratis
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
};

export default Hero;
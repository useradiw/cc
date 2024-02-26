import Section from "../section";
import Card from "./card";
import pic1 from "@/assets/images/pic1.svg";
import pic2 from "@/assets/images/pic2.svg";
import pic3 from "@/assets/images/pic3.svg";
import pic4 from "@/assets/images/pic4.svg";
import pic5 from "@/assets/images/pic5.svg";

const Options = [
    {icon: pic1, text: "Sewa Tukang"},
    {icon: pic2, text: "Hitung Biaya"},
    {icon: pic3, text: "Installasi Listrik"},
    {icon: pic4, text: "Pancang dan Fondasi"},
    {icon: pic5, text: "Audit Proyek"},
    {icon: pic5, text: "Audit Proyek"},
];

const Services = () => {
    return (
        <Section>
            <div className="grid grid-cols-3 gap-2">
                {Options.map((option, i) => 
                    <Card icon={option.icon} text={option.text} key={i}/>
                )}
            </div>
        </Section>
    )
};

export default Services;
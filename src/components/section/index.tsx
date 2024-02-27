interface Props {
    children: React.ReactNode;
    className?: string;
};

const Section = (Props: Props) => {
    const { children, className } = Props;
    return (
        <section className={`my-2 ${className} md:max-w-[50svw] md:mx-auto`}>
            {children}
        </section>
    )
};

export default Section;
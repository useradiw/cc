interface Props {
    children: React.ReactNode;
    className?: string;
};

const Section = (Props: Props) => {
    const { children, className } = Props;
    return (
        <section className={`my-2 ${className}`}>
            {children}
        </section>
    )
};

export default Section;
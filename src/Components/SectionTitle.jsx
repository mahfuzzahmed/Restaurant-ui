
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="w-4/12 mx-auto my-8 text-center">
            <p className="text-yellow-500 mb-2">---{heading}---</p>
            <h3 className="text-4xl py-4 border-y-4">{subheading}</h3>
        </div>
    );
};

export default SectionTitle;
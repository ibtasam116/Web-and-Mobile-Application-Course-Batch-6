
export default function Button(props) {
    return (
        <>
            <button className={`bg-[#2370C8] ${props.bgColor} px-6 py-2 my-5 text-md rounded-3xl hover:bg-sky-700 transition-all`}>{props.btnTitle}</button>
        </>
    )
}

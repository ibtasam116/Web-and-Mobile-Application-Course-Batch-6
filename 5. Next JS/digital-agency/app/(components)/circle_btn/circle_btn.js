import { FaGreaterThan } from "react-icons/fa"

export default function Circle_btn(props) {
    return (
        <>
            <button className={`${props.bgColor} p-4 rounded-3xl mx-2 hover:text-white transition-all`}><props.btnIcon /></button>
        </>
    )
}

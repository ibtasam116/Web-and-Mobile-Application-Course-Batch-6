
export default function Circle_btn(props) {
    return (
        <>
            <button className={`${props.style} rounded-full hover:text-white transition-all`}><props.btnIcon /></button>
        </>
    )
}

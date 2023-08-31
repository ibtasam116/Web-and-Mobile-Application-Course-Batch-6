
export default function Circle_btn(props) {
    return (
        <>
            <button className={`${props.style} p-3 rounded-full hover:text-white transition-all`}><props.btnIcon /></button>
        </>
    )
}

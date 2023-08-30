import Image from 'next/image'

export default function Client_card(props) {
    return (
        <>
            <div className='text-[#F2F2F2] border-2 border-[#6AB0FF] py-8 flex flex-col justify-center items-center shadow hover:shadow-black transition-all'>
                <Image src={props.imgSrc} width={60} height={60} className='rounded-full' />
                <div className='my-3 text-center'>
                    <h3 className='text-xl'>{props.title}</h3>
                    <h6 className='text-sm'>{props.subTitle}</h6>
                </div>
                <div className='text-center w-[85%]'>
                    <p className='text-[10px] md:text-xs'>There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, </p>
                </div>
            </div>
        </>
    )
}

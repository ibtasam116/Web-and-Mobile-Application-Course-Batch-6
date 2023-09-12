import Header from "../(components)/header/header";
import Digital_services from "../home/home_sections/digital_services/digital_services";
import Plans from "../home/home_sections/plans/plans";

export default function Page() {
    return (
        <>
            <Header header_title="services" />
            <Digital_services />
            <Plans />
        </>
    )
}

import Header from "../(components)/header/header";
import Clients from "../home/home_sections/clients/clients";
import Contact_Us_Cards from "./(components)/Contact_Us_Cards/Contact_Us_Cards";

export default function Page() {
    return (
        <>
            <Header header_title="Contact" />
            <Contact_Us_Cards />
            <Clients />
        </>
    )
}

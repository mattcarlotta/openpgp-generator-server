import Header from "../components/layout/Header";
import OpenPGPForm from "../components/layout/OpenPGPForm";

export default function Home() {
    return (
        <>
            <Header title="An example nextjs application that generates openpgp keys" />
            <section className="flex min-h-body flex-col items-center justify-center">
                <OpenPGPForm />
            </section>
        </>
    )
}

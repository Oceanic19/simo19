// src/components/Home.jsx

export default function Home() {
    return (
        <section
            id="home"
            // Ensure this height aligns with the centering logic
            className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 scroll-mt-24"
        >
            <h1 className="font-sketch text-5xl mb-4">
                Hi, I'm Melgen Simo
            </h1>
            <p className="font-sketch text-3xl leading-relaxed">
                A Student from the
                <br />
                Holy Cross of Davao College
            </p>
        </section>
    );
}
export default function Certificates() {
    const certificates = [
        "Cloud Computing Course – NPTEL",
        "Oracle Certified Foundations Associate – Cloud Infrastructure",
        "Full-Stack Web Development Internship Certificate",
        "Employability Soft Skills Training (RUSA 2.0)"
    ];

    return (
        <section id="certificates" className="bg-secondary text-white px-5 py-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold border-b-4 border-primary inline-block mb-6">Certificates</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    {certificates.map((cert, index) => (
                        <li key={index} className="hover:text-primary transition duration-200">{cert}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

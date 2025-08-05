import Image from "next/image";

export default function Overview() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                    Services That We Offer
                </h2>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="flex w-full flex-col text-center md:w-1/3">
                        <h3 className="mb-4 text-xl font-semibold text-foreground">
                            FASCIAL COUNTERSTRAIN (FCS)
                        </h3>
                        <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                            <Image
                                src="/assets/pt-stockphoto1.jpg"
                                alt="Physical therapist providing personalized care to patient"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <p className="text-muted-foreground">
                        A gentle hands-on technique that treats dysfunction in the fascial system, nervous system, blood vessels, lymphatics, and more. Safe, effective, and non-invasive.
                        </p>
                    </div>
                    <div className="flex w-full flex-col text-center md:w-1/3">
                        <h3 className="mb-4 text-xl font-semibold text-foreground">
                            HOLISTIC ASSESSMENT
                        </h3>
                        <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                            <Image
                                src="/assets/pt-stockphoto-2.jpg"
                                alt="Modern physical therapy treatment room"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <p className="text-muted-foreground">
                        We don’t just chase symptoms. I take the time to understand your full health picture—from past injuries and chronic pain to emotional stress and lifestyle patterns.
                        </p>
                    </div>
                    <div className="flex w-full flex-col text-center md:w-1/3">
                        <h3 className="mb-4 text-xl font-semibold text-foreground">
                            PATIENT EDUCATION & MOVEMENT COACHING
                        </h3>
                        <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                            <Image
                                src="/assets/pt-stockphoto-3.jpg"
                                alt="Therapist providing hands-on treatment"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <p className="text-muted-foreground">
                        Understand your body. Learn how to move, breathe, and live in ways that support long-term healing and vitality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Image from "next/image";
import React from "react";

const OndaPay = () => {
    return (
        <div className="p-2">
            <section className="space-y-2">
                <h1 className="text-center font-bold text-3xl">Onda Pay</h1>
                <Image
                    src="/projects/ondapay.png"
                    alt="onda pay"
                    width={1617}
                    height={933}
                />
                <div>
                    <p>
                        <span className="pl-5"></span> OndaPay is a modern
                        platform to organize and automate your payments. It
                        integrates seamlessly with the Brazilian Pix system and
                        supports Split payments, making it ideal for businesses
                        that need speed, flexibility, and control over their
                        financial operations.
                    </p>
                    <p>
                        <span className="pl-5"></span> For this project, I
                        designed developed the landing page and the sign-up form
                        UI
                    </p>
                </div>
            </section>
        </div>
    );
};

export default OndaPay;

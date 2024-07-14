"use client"

import Link from "next/link"


function ContactForm() {
    return (
        <div className=" h-[40rem]  mt-32 w-full bg-[#0B1120] ">
            <div className="flex items-center justify-center p-12">


                <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#FCF8F3]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#FCF8F3]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#FCF8F3]"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#FCF8F3]"
                            >
                                Message
                            </label>
                            <textarea

                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div className="mt-10 text-center">
                            <Link href={'#'}
                                className="px-4 py-2 rounded border border-meutrual-600 text-meutrual-600 hover:bg-meutrual-600 text-white hover:text-[#009FBD] transition-all duration-300"
                            >Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
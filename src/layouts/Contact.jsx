import React, { useEffect, useState } from 'react'
import { glassCardStyle } from '../utils/utilityFunctions';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { COLOURS as C } from '../constants/colors';
import SectionHead from '../components/SectionHead';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchem } from '../schemas/contactSchema';

const Contact = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(contactSchem), defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    const CONTACT_OPTIONS = [
        { icon: <i className="fa-solid fa-location-dot"></i>, label: "Location", value: "Kerala, India" },
        { icon: <i className="fa-brands fa-github"></i>, label: "GitHub", value: "www.github.com/ardra-m-siva", url: "https://github.com/ardra-m-siva" },
        { icon: <i className="fa-brands fa-square-linkedin"></i>, label: "LinkedIn", value: "www.linkedin.com/in/ardra-m-sivakumaran", url: "https://www.linkedin.com/in/ardra-m-sivakumaran/" }
    ];


    const handleSubmitOfMessage = async (data) => {
        try {
            const formData = new URLSearchParams();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("subject", data.subject);
            formData.append("message", data.message);
            const scriptUrl = import.meta.env.VITE_SHEET_URL;
            const res = await fetch(scriptUrl, {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData
            });
            const result = await res.json();
            if (result.result === 'success') {
                setShowSuccessModal(true)
                reset({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            }
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    }

    return (
        <>
            <div id="contact" style={{ borderTop: `1px solid ${C.border}` }}>
                <section>
                    <SectionHead label="Get in touch" title={<>Let's <span className="shimmer-em">Connect</span></>} sub="Let's connect, collaborate, and create." />
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-4 sm:gap-5">
                        <Reveal delay={.1}>
                            <div className='flex flex-col gap-3 sm:gap-3.5 h-full'>
                                <div className='p-6 flex-1 rounded-[20px] hidden md:block' style={glassCardStyle}>
                                    <p className='mb-0 text-[14.5px] leading-[1.9]' style={{ color: C.muted }}>
                                        Great ideas start with great conversations. Whether you have a project in mind, an opportunity to explore, or simply want to connect, I'd love to hear from you and see what we can build together. Available for freelance.
                                    </p>
                                </div>
                                {CONTACT_OPTIONS.map(({ icon, label, value, url }, index) => (
                                    <TiltCard key={label} intensity={8} style={glassCardStyle} className={`card-hover flex items-center cursor-pointer gap-2.5 md:gap-3.5 py-3 md:py-3.5 px-3.5 sm:px-4.5 rounded-2xl ${index == 0 ? 'hidden md:flex' : ''}`} onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}>
                                        <span className='text-[20px]'>{icon}</span>
                                        <div>
                                            <div className='mb-0.5 text-[11px]' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{label}</div>
                                            <div className='font-medium text-[13.5px] text-[#94a3b8]'>{value}</div>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        </Reveal>
                        {/* form */}
                        <Reveal delay={.2}>
                            <div className='h-full rounded-[22px] p-5 sm:p-6 md:p-8' style={glassCardStyle}>
                                <div className='absolute top-0 left-0 right-0 h-0.5' style={{ background: `linear-gradient(90deg,${C.em},${C.cy},transparent)` }} />
                                <div className='flex flex-col gap-4'>
                                    <div className='grid grid-cols-2 gap-3.5'>
                                        {[["Name", "Your name"], ["Email", "your@email.com"]].map(([field, placeHolder]) => (
                                            <div key={field}>
                                                <label id={field.toLowerCase()} className='text-[11px] mb-1.75 tracking-[0.5px] block uppercase' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{field}</label>
                                                <input
                                                    {...register(field.toLowerCase())}
                                                    className='w-full text-[14px] rounded-xl outline-none py-2.75 px-3.5 form-input'
                                                    placeholder={placeHolder}
                                                />
                                                <p className="text-red-400 text-xs mt-1">
                                                    {errors[field.toLowerCase()]?.message}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {[["Subject", "Project inquiry · collaboration · just hello"], ["Message", ""]].map(([field, placeHolder]) => (
                                        <div key={field}>
                                            <label id={field.toLowerCase()} className='block text-[11px] tracking-[0.5px] rounded-[7px] mb-1.75 uppercase' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{field}</label>
                                            {field === "Message"
                                                ? <>
                                                    <textarea {...register('message')} className='w-full rounded-xl py-2.75 px-3.5 text-[14px] outline-none resize-none form-input' rows={5} placeholder="Tell me about your project or idea..."
                                                    />
                                                    <p className="text-red-400 text-xs">
                                                        {errors.message?.message}
                                                    </p>
                                                </>
                                                : <>
                                                    <input {...register('subject')} className='w-full rounded-xl py-2.75 px-3.5 text-[14px] outline-none form-input' placeholder={placeHolder}
                                                    // onFocus={e => { e.target.style.borderColor = C.em; e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,.1)`; }}
                                                    // onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }}
                                                    />
                                                    <p className="text-red-400 text-xs mt-1">
                                                        {errors.subject?.message}
                                                    </p>
                                                </>
                                            }
                                        </div>
                                    ))}
                                    <button disabled={isSubmitting} onClick={handleSubmit(handleSubmitOfMessage)} className="glow-em w-full mt-1 flex items-center gap-1 justify-center ">
                                        Send Message{isSubmitting ?
                                            <div className="flex items-center justify-center">
                                                <div className="w-4 h-4 border-2 border-gray-300 border-t-emerald-500 rounded-full animate-spin"></div>
                                            </div>
                                            : <i className="fa-solid fa-paper-plane fa-sm"></i>}</button>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>

            {
                showSuccessModal &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-max overflow-hidden rounded-4xl bg-gray-900 shadow-xl ">
                        <div className='py-10 px-15'>
                            <div className="flex flex-col items-center justify-center gap-5 ">
                                <div className="flex w-12 h-12 shrink-0 border border-green-600 items-center justify-center rounded-full bg-green-500/10">
                                    <i className="fa-solid fa-check text-green-600"></i>
                                </div>
                                <p>Your message has been successfully sent</p>
                                <button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Contact
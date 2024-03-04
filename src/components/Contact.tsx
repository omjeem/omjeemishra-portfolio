import { useState } from "react";
import gmail from "../images/gmail.png";
import phone from "../images/phone-call.png";
import { Button } from "./subComponents/Button";
import emailjs from '@emailjs/browser';



export function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = () => {
        const templateParams: any = {
            from_name: name,
            from_email: email,
            to_name: "Om Jee Mishra",
            subject: subject,
            message: message
        };
        emailjs.send('service_4fmbibp', 'template_c9sukxj', templateParams, {
            publicKey: 'ZBnSm3Qe0iKFCfKsN',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Your message sent successfull")
                    setName("")
                    setEmail("")
                    setMessage("")
                    setSubject("")
                    const Ename = document.getElementById("Ename") as HTMLInputElement;
                    const Eemail = document.getElementById("Eemail") as HTMLInputElement;
                    const Esubject = document.getElementById("Esubject") as HTMLInputElement;
                    const Emessage = document.getElementById("Emessage") as HTMLInputElement;
                    Ename.value = "";
                    Eemail.value = "";
                    Esubject.value = "";
                    Emessage.value = "";
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Error while sending the message ")
                },
            );
    };
    return <div id="contact" className="my-20 flex justify-center" >

        <div className=" m-6  lg:m-16 bg-white rounded-xl p-8  space-y-4 ">
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center text-4xl font-bold ">
                        <span className="text-purple-700 mx-1"> Get in Touch</span>
                    </div>
                    <div className="text-center my-1">
                        Let's Connect and Create Something Amazing Together!
                    </div>
                </div>
            </div>

            <div className="lg:flex lg:space-x-10  ">
                <div className="my-4 border-gray-100 items-center p-4 lg:w-80 space-y-1  rounded-lg border-2	rounded-xl hover:shadow-xl ">
                    <div className="flex justify-center ">
                        <img src={gmail} alt="gmail" className="w-10 h-10" />
                    </div>
                    <div className="flex justify-center underline font-semibold">
                        <a href="mailto:omjeem558@gmail.com">omjeem558@gmail.com</a>
                    </div>


                </div>
                <div className="my-4 border-gray-100 items-center p-4 lg:w-80 space-y-1 rounded-lg border-2	rounded-xl hover:shadow-xl ">
                    <div className="flex justify-center ">
                        <img src={phone} alt="gmail" className="w-10 h-10" />
                    </div>
                    <div className="flex justify-center font-semibold">
                        +91 6395139599
                    </div>


                </div>

            </div>
            <div className="text-xl ">
                Contact Form
            </div>
            <div className="space-y-2">
                <div className=" lg:flex  lg:space-x-6 " >
                    <div className="w-full mt-2">
                        <input id="Ename" onChange={(e) => setName(e.target.value)} type="name" placeholder="Your Name*" className="border-gray-200 border-2 p-2 rounded-xl w-full " />
                    </div>
                    <div className="w-full mt-2">
                        <input id="Eemail" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email*" className="border-gray-200 border-2 p-2 rounded-xl  w-full" />
                    </div>
                </div>
                <div className="w-full my-2">
                    <input id="Esubject" onChange={(e) => setSubject(e.target.value)} type="name" placeholder="Subject*" className="border-gray-200 border-2 p-2 rounded-xl w-full " />
                </div>
                <div className="w-full my-2">
                    <input id="Emessage" onChange={(e) => setMessage(e.target.value)} type="name" placeholder="Message*" className="border-gray-200 border-2 p-2 rounded-xl w-full h-16" />
                </div>
            </div>
            <div className="flex justify-center">
                <Button onClick={() => {
                    if (name == "" || email == "" || subject == "" || message == "") {
                        alert("Please fill all details")
                        return;

                    }
                    sendEmail()
                }} label={"Send"}></Button>
            </div>
        </div>
    </div>
}
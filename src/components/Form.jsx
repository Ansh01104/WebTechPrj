import { useState } from "react";
import { send } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Div from "./Div";


const Form = () => {
    const [userInput, setUserInput] = useState({});
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        send(
            "gmail", // Service ID
            "template", // Template ID
            userInput,
            "W_mxFTk9pvPhWTgbs" // Public Key - https://dashboard.emailjs.com/admin/account
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formSuccess();
                setLoading(false);
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setLoading(false);
            });
    };

    const formSuccess = () => {
        toast(
            "Thanks for the message ;)"
        );

        // Resetting Form
        document.getElementById("queryForm").reset();
    };

    const onChange = (e) => {
        let obj = { ...userInput, [e.target.name]: e.target.value };
        setUserInput(obj);
    };

    return (
        <Div className="max-w-[700px] mx-auto    rounded-[30px] p-10 bg-thetrans">
            <ToastContainer />

            {/* LOADER START */}
            {loading && (
                <div className="w-full h-full rounded-[20px] absolute bg-black/[.5] top-0 left-0 flex justify-center items-center">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="5"
                        ></circle>
                    </svg>
                </div>
            )}
            {/* LOADER START */}

            <form
                id="queryForm"
                className="flex flex-col gap-8"
                onSubmit={formSubmitHandler}
            >
                {/* ROW START */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/* NAME - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="from_name"
                            className="text-[16px] text-white uppercase"
                        >
                            Your amazing name<sup>*</sup>
                        </label>
                        <input
                            name="from_name"
                            type="text"
                            className=" rounded-[30px] h-[64px] bg-white outline-none border-none text-black px-4"
                            required
                            autoComplete="off"
                            onChange={onChange}
                        />
                    </div>
                    {/* NAME - FORM FIELD END */}

                    {/* EMAIL - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="from_email"
                            className="text-[16px] text-white uppercase"
                        >
                            Your email<sup>*</sup>
                        </label>
                        <input
                            name="from_email"
                            type="email"
                            className="rounded-[30px] h-[64px] bg-white outline-none border-none text-black px-4"
                            required
                            autoComplete="off"
                            onChange={onChange}
                        />
                    </div>
                    {/* EMAIL - FORM FIELD END */}
                </div>
                {/* ROW END */}

                {/* MESSAGE - FORM FIELD START */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-[16px] text-white uppercase"
                    >
                        Message
                        <sup>*</sup>
                    </label>
                    <textarea
                        name="message"
                        className="rounded-[30px] h-[162px] bg-white outline-none border-none text-black p-4 resize-none"
                        required
                        onChange={onChange}
                    />
                </div>
                {/* MESSAGE - FORM FIELD END */}

                {/* SUBMIT BUTTON */}
                <button className=" rounded-[30px] bg-white hover:bg-purple-600 h-[64px] max-w-[585px] text-[16px] transition-transform active:scale-[0.95]">
                    Send?
                </button>
                {/* SUBMIT BUTTON */}
            </form>
        </Div>
    );
};

export default Form;

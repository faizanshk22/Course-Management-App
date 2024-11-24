import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const modalRef = useRef(null); // Ref for the dialog element

    const onSubmit = (data) => {
        console.log(data); // Handle successful form submission
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close(); // Close the modal programmatically
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Modal Button */}
                        <Link to='/'
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                            onClick={closeModal}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg text-black">Login</h3>

                        {/* Email Input */}
                        <div className="mt-4 font-light text-black space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        {/* Password Input */}
                        <div className="mt-8 font-light text-black space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>

                        {/* Submit Button and Links */}
                        <div className="flex justify-around mt-6">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white -ml-[2vw] rounded-md px-3 py-1 hover:bg-blue-900 duration-200"
                            >
                                Login
                            </button>
                            <p className="mt-1 text-lg font-normal text-black">
                                Not registered yet?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle successful form submission
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close Modal Button */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                            >
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg text-black">Signup</h3>

                            {/* First Name */}
                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>First Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('firstName', { required: 'First name is required' })}
                                />
                                <br/>
                                {errors.firstName && (
                                    <span className="text-red-500">{errors.firstName.message}</span>
                                )}
                            </div>

                            {/* Last Name */}
                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>Last Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('lastName', { required: 'Last name is required' })}
                                />
                                <br/>
                                {errors.lastName && (
                                    <span className="text-red-500">{errors.lastName.message}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                <br/>
                                {errors.email && (
                                    <span className="text-red-500">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mt-4 font-light space-y-2 text-lg text-black">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long',
                                        },
                                    })}
                                />
                                <br/>
                                {errors.password && (
                                    <span className="text-red-500">{errors.password.message}</span>
                                )}
                            </div>

                            {/* Signup Button */}
                            <div className="flex justify-around mt-6">
                                <button
                                    type="submit"
                                    className="bg-blue-600 -ml-[2vw] text-white text-lg rounded-md px-3 py-1 hover:bg-blue-900 duration-200"
                                >
                                    Signup
                                </button>

                                {/* Login Button */}
                                <p className="mt-1 text-lg text-black">
                                    Have an account?{' '}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                    >
                                        Login
                                    </button>{' '}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;

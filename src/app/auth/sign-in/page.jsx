'use client';

import { useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import useAuth from "@/hook/useAuth";

const SignInLayer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, loading, error, data } = useAuth();
    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await login(email, password);
        console.log(response);
        if (response && response.access_token) {
            router.push('/');
        }
    };

    return (
        <section className='auth bg-base d-flex flex-wrap'>
            <div className='auth-left d-lg-block d-none'>
                <div className='d-flex align-items-center flex-column h-100 justify-content-center'>
                    <Image 
                        src='/assets/images/logo.png'
                        alt='Authentication'
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
            <div className='auth-right py-32 px-24 d-flex flex-column justify-content-center'>
                <div className='max-w-464-px mx-auto w-100'>
                    <div>
                        <Link href='/' className='mb-40 max-w-290-px d-block'>
                            <Image 
                                src='/assets/images/logo.png' 
                                alt='logo' 
                                width={150} 
                                height={40}
                                priority
                            />
                        </Link>
                        <h4 className='mb-12'>Sign In to your Account</h4>
                        <p className='mb-32 text-secondary-light text-lg'>
                            Welcome back! please enter your detail
                        </p>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className='icon-field mb-16'>
                            <span className='icon top-50 translate-middle-y'>
                                <Icon icon='mage:email' />
                            </span>
                            <input
                                type='email'
                                name='email'
                                className='form-control h-56-px bg-neutral-50 radius-12'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='position-relative mb-20'>
                            <div className='icon-field'>
                                <span className='icon top-50 translate-middle-y'>
                                  <Icon icon='solar:lock-password-outline' />
                                </span>
                                <input
                                    type='password'
                                    name='password'
                                    className='form-control h-56-px bg-neutral-50 radius-12'
                                    id='your-password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <span
                                className='toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light'
                                data-toggle='#your-password'
                            />
                        </div>
                        <div className=''>
                            <div className='d-flex justify-content-between gap-2'>
                                <div className='form-check style-check d-flex align-items-center'>
                                    <input
                                        className='form-check-input border border-neutral-300'
                                        type='checkbox'
                                        defaultValue=''
                                        id='remeber'
                                    />
                                    <label className='form-check-label' htmlFor='remeber'>
                                        Remember me{" "}
                                    </label>
                                </div>
                                {/*<Link href='#' className='text-primary-600 fw-medium'>*/}
                                {/*    Forgot Password?*/}
                                {/*</Link>*/}
                            </div>
                        </div>

                        {error && <p className="text-danger mt-2">{error.message}</p>}

                        <button
                            type='submit'
                            className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignInLayer;

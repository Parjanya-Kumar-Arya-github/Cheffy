import Head from "next/head";
import styles from "../styles/login.module.css";
import Link from "next/link";
import Image from "next/image";
import bg from '../public/login_bg.png'
export default function Home() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Sign up page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.gradient}></div>
                    <Image src={bg} layout="fill" objectFit="cover"></Image>
                </div>

                <div className={styles.part2}>
                    <div className={styles.question}>
                        <p>Already have an account?</p>
                        <Link href="/">
                            <a className={styles.sign_up}>SIGN IN</a>
                        </Link>
                    </div>
                    <form className={styles.form}>
                        <h1 className={styles.welcome}>Welcome</h1>
                        <p className={styles.continue_text}>Register your account</p>
                        <div className={styles.input}>
                            <div className={styles.icon}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M8.00008 7.99999C7.29284 7.99999 6.61456 7.71904 6.11446 7.21894C5.61437 6.71884 5.33341 6.04057 5.33341 5.33332C5.33341 4.62608 5.61437 3.9478 6.11446 3.4477C6.61456 2.94761 7.29284 2.66666 8.00008 2.66666C8.70732 2.66666 9.3856 2.94761 9.8857 3.4477C10.3858 3.9478 10.6667 4.62608 10.6667 5.33332C10.6667 6.04057 10.3858 6.71884 9.8857 7.21894C9.3856 7.71904 8.70732 7.99999 8.00008 7.99999ZM8.00008 9.99999C10.1241 9.99999 12.0301 10.3807 13.3334 12.042V13.3333H2.66675V12.042C3.97008 10.38 5.87608 9.99999 8.00008 9.99999Z" fill="#3F403F" />
                                    </g>
                                </svg>


                            </div>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className={styles.input_email}>
                            <div className={styles.icon}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M1.6 6.39998V12.8H14.4V6.39998L8 8.79998L1.6 6.39998ZM1.6 3.19998V4.79998L8 7.19998L14.4 4.79998V3.19998H1.6ZM1.6 1.59998H14.4C14.8243 1.59998 15.2313 1.76855 15.5314 2.0686C15.8314 2.36866 16 2.77563 16 3.19998V12.8C16 13.2243 15.8314 13.6313 15.5314 13.9313C15.2313 14.2314 14.8243 14.4 14.4 14.4H1.6C1.17565 14.4 0.768687 14.2314 0.468629 13.9313C0.168571 13.6313 0 13.2243 0 12.8V3.19998C0 2.77563 0.168571 2.36866 0.468629 2.0686C0.768687 1.76855 1.17565 1.59998 1.6 1.59998Z" fill="#3F403F" />
                                    </g>
                                </svg>

                            </div>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div className={styles.input_password}>
                            <div className={styles.icon}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.99998C0.756 4.34878 4.0504 1.59998 8 1.59998C11.9496 1.59998 15.244 4.34878 16 7.99998C15.244 11.6512 11.9496 14.4 8 14.4C4.0504 14.4 0.756 11.6512 0 7.99998ZM8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99998C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99998 8 3.99998C6.93913 3.99998 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99998C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12ZM8 10.4C8.63652 10.4 9.24697 10.1471 9.69706 9.69703C10.1471 9.24695 10.4 8.6365 10.4 7.99998C10.4 7.36346 10.1471 6.75301 9.69706 6.30292C9.24697 5.85283 8.63652 5.59998 8 5.59998C7.36348 5.59998 6.75303 5.85283 6.30294 6.30292C5.85286 6.75301 5.6 7.36346 5.6 7.99998C5.6 8.6365 5.85286 9.24695 6.30294 9.69703C6.75303 10.1471 7.36348 10.4 8 10.4Z" fill="#3F403F" />
                                    </g>
                                </svg>


                            </div>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter your Password"
                                required
                            />
                        </div>
                        <div className={styles.keep}>
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                checked="checked"
                            />
                            <p className={styles.keepsign}>Keep me signed in</p>
                        </div>
                        <p className={styles.terms}>
                            By signing in, you agree to our{" "}
                            <span>
                                Terms and <br /> Conditions
                            </span>{" "}
                            and <span>Privacy statement.</span>{" "}
                        </p>
                        <div className={styles.button}>
                            <Link href="/success">
                                <button type="submit" className={styles.btn}>
                                    CONTINUE
                                </button>
                            </Link>
                            <p>Forgot password?</p>
                        </div>

                        <div className={styles.continue_with}>
                            <p>or continue with</p>
                            <svg width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_682_265)">
                                    <rect x="6" y="3" width="60" height="48" rx="4" fill="white" />
                                </g>
                                <g clip-path="url(#clip0_682_265)">
                                    <path d="M50.2339 43.0001C51.2091 43.0001 52 42.2094 52 41.234V12.7661C52 11.7906 51.2091 11 50.2339 11H21.7661C20.7905 11 20 11.7906 20 12.7661V41.234C20 42.2094 20.7905 43.0001 21.7661 43.0001H50.2339Z" fill="#395185" />
                                    <path d="M42.0795 43.0001V30.608H46.2391L46.8619 25.7786H42.0795V22.6951C42.0795 21.2969 42.4679 20.344 44.473 20.344L47.0304 20.3429V16.0235C46.5879 15.9646 45.0699 15.8331 43.3039 15.8331C39.6166 15.8331 37.0924 18.0838 37.0924 22.217V25.7786H32.9221V30.608H37.0924V43.0001H42.0795Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_682_265" x="0" y="0" width="72" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3" />
                                        <feGaussianBlur stdDeviation="3" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_682_265" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_682_265" result="shape" />
                                    </filter>
                                    <clipPath id="clip0_682_265">
                                        <rect x="20" y="11" width="32" height="32" rx="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_682_270)">
                                    <rect x="6" y="3" width="60" height="48" rx="4" fill="white" />
                                </g>
                                <path d="M51.9847 27.2993C51.9847 25.9883 51.8758 25.0316 51.6402 24.0395H36.3187V29.9568H45.3121C45.1308 31.4273 44.1517 33.6419 41.9759 35.1301L41.9454 35.3282L46.7897 38.9951L47.1254 39.0278C50.2077 36.2463 51.9847 32.1537 51.9847 27.2993Z" fill="#4285F4" />
                                <path d="M36.3187 42.8901C40.7247 42.8901 44.4236 41.4727 47.1253 39.0279L41.9758 35.1301C40.5979 36.0691 38.7484 36.7246 36.3187 36.7246C32.0034 36.7246 28.3407 33.9432 27.0351 30.0986L26.8437 30.1145L21.8065 33.9236L21.7406 34.1025C24.4241 39.3112 29.9362 42.8901 36.3187 42.8901Z" fill="#34A853" />
                                <path d="M27.0351 30.0986C26.6906 29.1065 26.4913 28.0434 26.4913 26.945C26.4913 25.8465 26.6906 24.7835 27.017 23.7914L27.0079 23.5801L21.9075 19.7098L21.7406 19.7874C20.6346 21.9489 20 24.3761 20 26.945C20 29.5139 20.6346 31.941 21.7406 34.1025L27.0351 30.0986Z" fill="#FBBC05" />
                                <path d="M36.3187 17.1654C39.383 17.1654 41.45 18.4587 42.6286 19.5395L47.2341 15.1457C44.4056 12.5768 40.7247 11 36.3187 11C29.9362 11 24.4241 14.5787 21.7406 19.7874L27.017 23.7915C28.3407 19.9469 32.0034 17.1654 36.3187 17.1654Z" fill="#EB4335" />
                                <defs>
                                    <filter id="filter0_d_682_270" x="0" y="0" width="72" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3" />
                                        <feGaussianBlur stdDeviation="3" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_682_270" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_682_270" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

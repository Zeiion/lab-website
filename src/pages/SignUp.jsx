import React from 'react';
import { Link } from 'react-router-dom';

import Header from '~/components/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '~/components/Banner';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 max-w-6xl mx-auto pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                <h1 className="h1">
                  Welcome. We exist to make entrepreneurship easier.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="relative flex items-center w-full px-0 text-white bg-red-600 btn hover:bg-red-700">
                        <svg
                          className="w-4 h-4 mx-4 text-white opacity-75 fill-current shrink-0"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span
                          className="flex items-center h-6 mr-4 border-r border-white border-opacity-25"
                          aria-hidden="true"
                        ></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Sign up with Google
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="mr-3 border-t border-gray-700 border-dotted grow"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-400">
                    Or, register with your email
                  </div>
                  <div
                    className="ml-3 border-t border-gray-700 border-dotted grow"
                    aria-hidden="true"
                  ></div>
                </div>
                <form>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-300"
                        htmlFor="full-name"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        className="w-full text-gray-300 form-input"
                        placeholder="First and last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-300"
                        htmlFor="company-name"
                      >
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        className="w-full text-gray-300 form-input"
                        placeholder="Your company or app name"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-300"
                        htmlFor="email"
                      >
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full text-gray-300 form-input"
                        placeholder="you@yourcompany.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-300"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="w-full text-gray-300 form-input"
                        placeholder="Password (at least 10 characters)"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-sm text-center text-gray-500">
                    I agree to be contacted by Open PRO about this offer as per
                    the Open PRO{' '}
                    <Link
                      to="#"
                      className="text-gray-400 underline transition duration-150 ease-in-out hover:text-gray-200 hover:no-underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </div>
                  <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3">
                      <button className="w-full text-white bg-purple-600 btn hover:bg-purple-700">
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-6 text-center text-gray-400">
                  Already using Open PRO?{' '}
                  <Link
                    to="signin"
                    className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Banner />
    </div>
  );
}

export default SignUp;

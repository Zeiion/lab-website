import React from 'react';
import { Link } from 'react-router-dom';

import Header from '~/components/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '~/components/Banner';

function ResetPassword() {
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
                <h1 className="mb-4 h1">Forgot your password?</h1>
                <p className="text-xl text-gray-400">
                  We'll email you instructions on how to reset it.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-300"
                        htmlFor="email"
                      >
                        Email
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
                  <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3">
                      <button className="w-full text-white bg-purple-600 btn hover:bg-purple-700">
                        Reset Password
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-6 text-center text-gray-400">
                  <Link
                    to="/signin"
                    className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                  >
                    Cancel
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

export default ResetPassword;

import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate('/');

  return (
    <>
      <section className="relative z-10 h-screen flex items-center justify-center">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-[#9538E2] sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-[#9538E2]">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg text-[#9538E2]">
                  The page you are looking for it maybe deleted
                </p>
                <button
                  onClick={() => navigate()}
                  className="inline-block rounded-lg border border-[#9538E2] px-8 py-3 text-center text-base font-semibold text-[#9538E2] transition hover:scale-105 hover:text-primary"
                >
                  Go To Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;

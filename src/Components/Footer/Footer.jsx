import React from 'react';

const Footer = () => {
  return (
    <div className="py-[56px] md:py-[70px] lg:py-[100px] w-full bg-white">
      <div className="container mx-auto px-[3%] md:px-0 space-y-8">
        <div className="max-w-[490px] mx-auto space-y-3 text-center">
          <h4 className="text-[32px] font-bold text-[#09080F]">
            Gadget Heaven
          </h4>
          <p className="text-[#09080f99] font-normal text-base">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="border-b border-[#09080f2f]"></div>
        <div className="footer sm:footer-horizontal text-neutral-content grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center max-w-[700px] w-full mx-auto">
          <nav>
            <h6 className="text-[#09080F] font-semibold">Services</h6>
            <a className="link link-hover text-[#09080f99] font-medium">
              Branding
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Design
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Marketing
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="text-[#09080F] font-semibold">Company</h6>
            <a className="link link-hover text-[#09080f99] font-medium">
              About us
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Contact
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">Jobs</a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="text-[#09080F] font-semibold">Legal</h6>
            <a className="link link-hover text-[#09080f99] font-medium">
              Terms of use
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Privacy policy
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Cookie policy
            </a>
            <a className="link link-hover text-[#09080f99] font-medium">
              Cookie policy
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;

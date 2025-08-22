"use client";
import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="!bg-[url('/images/mobile/bg-two.jpg')] bg-no-repeat bg-cover bg-center min-h-screen pt-20 pb-6 flex justify-between items-center flex-col">
        <form className="grid grid-cols-2 gap-x-4 max-w-[360px]">
          {/* First name */}
          <div className="col-span-2 mb-14">
            <Image
              src={"/icon-logo.svg"}
              alt="logo"
              height={107}
              width={136}
              quality={100}
              className="mx-auto"
            />
          </div>
          <div className="col-span-2 mb-7">
            <label htmlFor="email" className="block text-base font-normal mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="col-span-2 mb-8">
            <label
              htmlFor="password"
              className="block text-base font-normal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />

            
            <Link
              href={"/auth/selfie-policy"}
              className="!block text-left mt-5"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="col-span-2 mt-6 text-center">
            <Link
              href={"/auth/selfie-policy"}
              className="mobile-btn !text-[#323232] !mx-auto"
            >
              Login
            </Link>

          </div>

        </form>
        
          {/* Terms */}
          <div className="col-span-2 mt-14 text-center">
            <p className="text-[10px] text-[#9C9AA5]">
              By signing up to create an account I accept Company’s <br />
              <strong className="font-bold italic text-[#26203B]">
                Terms of use & Privacy Policy.
              </strong>
            </p>
      </div>
    </div>
  );
}

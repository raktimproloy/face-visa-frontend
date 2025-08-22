"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const hasMinLength = password.length >= 8;
  const hasSymbolOrNumber = /[\d\W]/.test(password);
  const notContainNameOrEmail =
    !password.toLowerCase().includes(firstName.toLowerCase()) &&
    !password.toLowerCase().includes(email.toLowerCase());

  const strength =
    password.length >= 12 && hasSymbolOrNumber && notContainNameOrEmail
      ? "Strong"
      : hasMinLength
      ? "Medium"
      : "Weak";

  const checkIcon = (active: boolean) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.3334 4L6.00008 11.3333L2.66675 8"
        stroke="#465FF1"
        strokeOpacity={active ? "1" : "0.25"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="!bg-[url('/images/mobile/bg-two.jpg')] bg-no-repeat bg-cover bg-center min-h-screen pt-20 pb-6">
      <div className="flex justify-end items-center flex-col">
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
          <div className="col-span-1 mb-7">
            <label
              htmlFor="first_name"
              className="block text-base font-normal mb-2"
            >
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last name */}
          <div className="col-span-1 mb-7">
            <label
              htmlFor="last_name"
              className="block text-base font-normal mb-2"
            >
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 mb-7">
            <label htmlFor="email" className="block text-base font-normal mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Password conditions */}
          <div className="col-span-2">
            <ul className="ml-7">
              <li className="flex items-center gap-2 text-xs font-medium mb-3">
                <div className="icon">{checkIcon(true)}</div>
                <p>Password Strength: {strength}</p>
              </li>
              <li className="flex items-center gap-2 text-xs font-medium mb-3">
                <div className="icon">{checkIcon(notContainNameOrEmail)}</div>
                <p>Cannot contain your name or email address</p>
              </li>
              <li className="flex items-center gap-2 text-xs font-medium mb-3">
                <div className="icon">{checkIcon(hasMinLength)}</div>
                <p>At least 8 characters</p>
              </li>
              <li className="flex items-center gap-2 text-xs font-medium mb-3">
                <div className="icon">{checkIcon(hasSymbolOrNumber)}</div>
                <p>Contains a number or symbol</p>
              </li>
            </ul>
          </div>

          {/* Submit button */}
          <div className="col-span-2 mt-12 text-center">
            <Link
              href={"/auth/selfie-policy"}
              className="mobile-btn !text-[#323232] !mx-auto"
            >
              Create Account
            </Link>
          </div>

          {/* Terms */}
          <div className="col-span-2 mt-14 text-center">
            <p className="text-[10px] text-[#9C9AA5]">
              By signing up to create an account I accept Company’s <br />
              <strong className="font-bold italic text-[#26203B]">
                Terms of use & Privacy Policy.
              </strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

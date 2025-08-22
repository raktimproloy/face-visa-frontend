import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="!bg-[url('/images/mobile/bg-two.jpg')] bg-no-repeat bg-cover bg-center min-h-screen pt-20">
      <div className="w-full text-center">
        <Image
          src={"/icon-logo.svg"}
          alt="logo"
          height={107}
          width={136}
          quality={100}
          className="mx-auto mb-12"
        />
        <h2 className="mt-20 mb-9 text-base text-[#323232] font-bold text-center font-inter">
          Hello John,
        </h2>
        <p className="text-[15px] text-[#262626] font-normal text-center mb-3">
          Your face has been successfully enrolled.{" "}
        </p>
        <p className="text-[15px] text-[#262626] font-normal text-center mb-[230px]">
          From now on, just smile at <br />
          any of our Verifier screens and <br />
          you’ll breeze right in.
        </p>
        <p className="text-xs text-[#262626]">How to Troubleshoot <br />
If you ever have trouble, email <i>support@visaface.online</i></p>
<Link  href={'/auth/final'} className="mobile-btn two !mt-5">I’m all set</Link>
      </div>
    </div>
  );
}

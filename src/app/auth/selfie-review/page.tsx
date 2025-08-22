import Image from "next/image";
import Link from "next/link";


export default function SelfieReviewPage() {
  return (
    <div className="!bg-[url('/images/mobile/bg-two.jpg')] bg-no-repeat bg-cover bg-center min-h-screen py-9">
      <div className="w-full">
      <button className="sm-btn two !text-sm !font-normal !text-[#3E3E3E] !px-5 !mb-5">Satisfied with your photo?</button>
      
            <Image
              src={"/images/mobile/face-two.jpg"}
              alt="logo"
              width={424}
              height={502}
              className="mx-auto max-h-[500px]"
            />
          <div className="text-center  mt-12 max-auto">
            <Link
              href={"/auth/success"}
              className="mobile-btn !text-[#28A300] !mb-3 !block max-w-[313px]"
            >
              Upload
            </Link>
            <Link
              href={"/auth/selfie"}
              className="mobile-btn !text-[#B20610] mb-3 !block max-w-[208px] !min-w-[208px] !px-4 !py-3"
            >
              Re-Take
            </Link>
          </div>
      </div>
      
    </div>
  );
}

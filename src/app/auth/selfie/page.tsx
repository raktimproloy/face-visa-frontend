import Image from "next/image";
import Link from "next/link";

export default function SelfiePage() {
  return (
    <div className="relative h-screen py-9 pb-20 flex flex-col justify-between items-center">
      <Image
        src={"/images/mobile/face.jpg"}
        alt="logo"
        quality={100}
        fill={true}
        className="mx-auto lg:object-contain object-cover"
      />

      <button className="sm-btn">Hold Still</button>
      <Link href={'/auth/selfie-review'} className="mobile-btn !flex items-center gap-2 max-w-[313px] !px-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="30"
          viewBox="0 0 45 42"
          fill="none"
        >
          <path
            d="M43.125 33.25C43.125 34.1783 42.7299 35.0685 42.0266 35.7249C41.3234 36.3813 40.3696 36.75 39.375 36.75H5.625C4.63044 36.75 3.67661 36.3813 2.97335 35.7249C2.27009 35.0685 1.875 34.1783 1.875 33.25V14C1.875 13.0717 2.27009 12.1815 2.97335 11.5251C3.67661 10.8687 4.63044 10.5 5.625 10.5H13.125L16.875 5.25H28.125L31.875 10.5H39.375C40.3696 10.5 41.3234 10.8687 42.0266 11.5251C42.7299 12.1815 43.125 13.0717 43.125 14V33.25Z"
            stroke="#EBEBEB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 29.75C26.6421 29.75 30 26.616 30 22.75C30 18.884 26.6421 15.75 22.5 15.75C18.3579 15.75 15 18.884 15 22.75C15 26.616 18.3579 29.75 22.5 29.75Z"
            stroke="#EBEBEB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Take Photo Now
      </Link>
    </div>
  );
}

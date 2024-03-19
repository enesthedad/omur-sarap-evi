import { UserTestimonial } from "./UserTestimonial";
import { FaStar, FaTripadvisor, FaStarHalfAlt } from "react-icons/fa";
import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import { Divider } from "./Divider";
import { FaGoogle } from "react-icons/fa";
export const Testimonials = () => {
  return (
    <div className=" pt-20 pb-32 flex-col relative gap-6 bg-[#722F37] text-white flex justify-center items-center">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <Link
          className="cursor-pointer "
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/search?q=omur+suryani+sarap+evi&oq=omur+s&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRhAMgYIAhBFGDkyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0MzUwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x400a4de6c8c136a9:0xd350f15bc5483e22,1,,,,"
        >
          <Card
            shadow="lg"
            className="max-w-[250px]  md:max-w-[300px] lg:max-w-[400px] px-10 bg-[#212022]"
          >
            <CardHeader className="flex gap-3">
              <div className="flex items-center justify-center w-full gap-2">
                <FaGoogle className="text-2xl text-white" />
                <p className="text-2xl text-white">Google</p>
              </div>
            </CardHeader>
            <Divider className="bg-stone-700" />
            <CardBody className="">
              <div className="flex gap-2 text-2xl text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </CardBody>
          </Card>
        </Link>
        <Link
          className="cursor-pointer "
          target="_blank"
          rel="noreferrer"
          href="https://www.tripadvisor.com.tr/Attraction_Review-g780971-d23915934-Reviews-Omur_Suryani_Sarap_Evi-Midyat_Mardin_Province.html"
        >
          <Card className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]  px-10 bg-[#212022]">
            <CardHeader className="flex gap-3">
              <div className="flex items-center justify-center w-full gap-2">
                <FaTripadvisor className="text-2xl text-white" />
                <p className="text-2xl text-white">TripAdvisor</p>
              </div>
            </CardHeader>
            <Divider className="bg-stone-700" />
            <CardBody className="">
              <div className="flex gap-2 text-2xl text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </CardBody>
          </Card>
        </Link>
      </div>

      <h3 className="mt-10 font-bold text-white uppercase xl:text-4xl text-[22px] md:text-[64px]">
        Sizin Yorumlariniz
      </h3>
      <div className="flex flex-row p-5 ">
        <UserTestimonial />
      </div>
      <Divider color="#212022" />
    </div>
  );
};

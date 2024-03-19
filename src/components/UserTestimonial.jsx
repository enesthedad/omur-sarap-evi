import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  User,
  Image,
} from "@nextui-org/react";
import { FaRegStar, FaStar } from "react-icons/fa";
import users from "../data/testimonial";
import { convertUserName } from "../utils/nameConverter";

export const UserTestimonial = () => {
  return (
    <div className="grid justify-center grid-cols-1 gap-3 px-2 py-2 mx-auto mt-0 xl:gap-5 md:gap-3 lg:gap-4 xl:px-10 xl:py-4 lg:px-8 lg:py-3 md:px-6 md:py-2 md:grid-cols-2 2xl:grid-cols-3">
      {users.map((user) => (
        <Card shadow="lg" key={user.id} className="bg-stone-100 ">
          <CardHeader className="flex gap-3 font-bold text-stone-950">
            <div className="flex flex-col">
              <User
                name={convertUserName(user.user)}
                avatarProps={{
                  src: user.userImg,
                }}
              />
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[12px] md:text-[12px] lg-[13px] 2xl-[15px] 2xl-[16px] xl:text-[14px]">
              {user.message}
            </p>
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {user.point > i ? (
                  <FaStar className="text-[#B52C37]" />
                ) : (
                  <FaRegStar />
                )}
              </span>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Logo } from "./Logo";
import { FaWhatsapp } from "react-icons/fa";
export const Header = () => {
  const menuItems = [
    { item: "Ana Sayfa", href: "/" },
    { item: "Ürünlerimiz", href: "/products" },
    { item: "Hakkımızda", href: "/about" },
    { item: "İletişim", href: "/contact" },
    {
      item: "Sipariş Ver",
      href: "https://api.whatsapp.com/send/?phone=905373972468&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <Navbar
      className="h-full p-4 text-white bg-black/30 lg:p-10 md:py-10"
      isBordered
    >
      <div className="flex items-center justify-between w-full gap-1 py-4 md:flex-col md:justify-center">
        <div className="">
          <NavbarContent className="pr-3 sm:hidden" justify="center">
            <NavbarBrand size="sm">
              <Logo />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden gap-4 sm:flex">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>
        </div>
        <div className="flex items-center">
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Link aria-label="main-page-link" href="/">
                <p className="text-sm text-white xl:text-xl lg:text-lg">
                  Ana Sayfa
                </p>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                size="sm"
                href="/products"
                aria-current="products-link"
                className="text-white"
              >
                <p className="text-sm text-white xl:text-xl lg:text-lg ">
                  Ürünlerimiz
                </p>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link size="sm" href="/about" aria-label="about-page-link">
                <p className="text-sm text-white xl:text-xl lg:text-lg ">
                  Hakkımızda
                </p>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link size="sm" href="/contact" aria-label="contacts-page-link">
                <p className="text-sm text-white xl:text-xl lg:text-lg ">
                  İletişim
                </p>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                size="sm"
                target="_blank"
                aria-label="whatsapp-link"
                href="https://api.whatsapp.com/send/?phone=905373972468&text&type=phone_number&app_absent=0"
              >
                <p className="text-sm text-white flex items-center gap-2 bg-[#25D366] px-2 py-1 rounded-full xl:text-xl lg:text-lg ">
                  <FaWhatsapp /> Sipariş Ver
                </p>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </div>

      <NavbarMenu className="flex items-center justify-center w-full pt-[-100px] gap-4 bg-stone-900 ">
        {menuItems.map((item, index) =>
          index === menuItems.length - 1 ? (
            <NavbarMenuItem key={`${item.item}-${index}`}>
              <Link
                className="text-[#f5f5f5] text-2xl w-full"
                aria-label="whatsapp-link"
                href={item.href}
                target="_blank"
              >
                <p className=" text-white flex items-center gap-2 bg-[#25D366] px-2 py-1 rounded-full xl:text-xl lg:text-lg ">
                  <FaWhatsapp /> {item.item}
                </p>
              </Link>
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem key={`${item.item}-${index}`}>
              <Link
                className="text-[#f5f5f5] px-2 text-2xl w-full"
                href={item.href}
                aria-label={`link-to-${item.href}`}
              >
                {item.item}
              </Link>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </Navbar>
  );
};

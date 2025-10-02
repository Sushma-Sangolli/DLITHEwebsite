import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import logo from "../../assets/landing_page/logo.png"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Programs", href: "/program" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallary" },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 w-full bg-black shadow-sm shadow-yellow-400 z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-15 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-white text-base font-medium transition-colors hover:text-orange ${
                location.pathname === item.href ? "text-yellow-400" : ""
              }`}
            >
              {item.name}
              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  location.pathname === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white w-64">
              <div className="flex flex-col gap-6 mt-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium transition-colors hover:text-yellow-400 ${
                      location.pathname === item.href
                        ? "text-orange"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

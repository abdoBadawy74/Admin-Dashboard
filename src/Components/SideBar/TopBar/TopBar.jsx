import {
    faBars,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../../Context/MenuContext"
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png"


export default function TopBar() {
    const menu = useContext(Menu);
    const setIsOpen = menu.setIsOpen;
    const isOpen = menu.isOpen

    return (
        <div className="top-bar flex items-center gap-2"
        >
            <Link to={"/"}>
                <img src={logo} alt="logo"
                    width={
                        !isOpen ? "90px" : "218px"}
                    style={{
                        height: "70px"
                    }}
                />
            </Link>
            <div className="d-flex align-items-center gap-5">
                <FontAwesomeIcon
                    onClick={() => setIsOpen((prev) => !prev)}
                    cursor={"pointer"}
                    icon={faBars}
                />
            </div>
            <div className="w-[60%] h-[100%] flex items-center px-3 justify-between" >
                <div className="flex">
                    <p className="text-[14px]">لوحة التحكم </p>
                    <Link to={"/"} className="text-[14px] text-gray-400">
                        {" / "}الرئيسية
                    </Link>
                </div>
                <div className="md:flex items-center gap-2 border rounded-xl px-2 py-3 w-[50%] hidden">
                    <FontAwesomeIcon icon={faSearch} className=" text-gray-400" />
                    <input type="text" className="outline-0 flex-grow bg-gray-50" placeholder="بحث"/>
                </div>
            </div>

        </div>
    );
}
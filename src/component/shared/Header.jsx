import React, { Fragment } from "react";
import { GoSearch } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";
import { BiSolidUserDetail, BiPowerOff } from "react-icons/bi";
import { Popover, Transition, Menu } from "@headlessui/react";

function Header() {
  return (
    <div className="bg-[#fff]  flex justify-between py-4 px-10">
      <div className="flex items-center justify-center gap-2 bg-[#F9FAFB] px-2 rounded-lg">
        <button type="submit">
          <i>
            <GoSearch size={20} color="gray" />
          </i>
        </button>
        <input
          type="text"
          placeholder="Search here..."
          className="w-[30rem] max-md:w-[10rem] h-12 focus:outline-none active:outline-none bg-[#F9FAFB]"
        />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex item-center focus:outline-none">
                <i className="bg-gray-200 p-1.5 rounded-full">
                  <CiBellOn size={30} />
                </i>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0  mt-2 w-70 z-10">
                  <div className="overflow-hidden bg-gray-100 rounded-lg shadow-lg ring-1 ring-black/5 p-4">
                    <strong className="pt-2 my-4">Notification</strong>
                    <div className="pt-2 my-4">This is a notification</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex">
              <span className="sr-only">Open profile</span>
              <div className="bg-black rounded-full">
                <img
                  src="logo192.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full overflow-visible"
                />
                <span className="sr-only">User Name</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="overflow-hidden bg-gray-100 rounded-lg shadow-lg ring-1 ring-black/5 p-4">
                <Menu.Item>
                  {({ active }) => (
                    <>
                      <button className="flex gap-3 pt-2">
                        <i>
                          <BiSolidUserDetail size={20} />
                        </i>
                        <span>Profile</span>
                      </button>
                      <button className="flex gap-3 pt-2">
                        <i>
                          <BiPowerOff size={20} />
                        </i>
                        <span>Logout</span>
                      </button>
                    </>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;

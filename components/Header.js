import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 h-[80px] flex items-center z-50 bg-white shadow-md transition-all">

            <div className="container max-w-[1760px] w-full p-4 md:px-10 lg:px-20 flex flex-row mx-auto">
                <div className="relative flex flex-1 items-center h-8 cursor-pointer my-auto">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>

                <div className="flex flex-grow-0 justify-center items-center border bg-gray-50 rounded-full py-1 px-2 shadow-sm hover:shadow-md transition-all w-[300px]">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Start your search"
                        className="flex-1 bg-transparent outline-none px-3 text-sm"
                    />

                    <SearchIcon className="h-8 w-8 bg-red-400 hover:bg-red-500 text-white rounded-full p-2 cursor-pointer transition-all" />
                </div>

                <div className="flex flex-1 justify-end items-center">
                    <span className="bg-white hover:bg-gray-100 text-sm font-semibold p-3 rounded-full cursor-pointer transition-all">Become a host</span>

                    <span className="bg-white hover:bg-gray-100 text-sm font-semibold p-3 rounded-full cursor-pointer transition-all">
                        <GlobeAltIcon className="h-5 w-5" />
                    </span>

                    <span className="border flex flex-row items-center justify-center ml-2 rounded-full p-1 cursor-pointer text-gray-500 hover:shadow-md transition-all">
                        <MenuIcon className="h-5 w-5 mx-2" />
                        <UserCircleIcon className="h-8 w-8" />
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header

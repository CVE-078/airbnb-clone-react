import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="header sticky top-0 z-50 bg-white shadow-md p-4 md:px-10 lg:px-20 transition-all">

            <div className="container max-w-screen-2xl w-full flex flex-row mx-auto">
                <div className="header__logo relative flex flex-1 items-center h-8 cursor-pointer my-auto">
                    <Image
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>

                <div className="header__searchBar flex flex-1 justify-center items-center border-2 bg-gray-50 rounded-full py-1 px-2 shadow-sm hover:shadow-md transition-all">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Start your search"
                        className="flex-1 bg-transparent outline-none px-3 text-sm"
                    />

                    <SearchIcon className="h-8 w-8 bg-red-400 hover:bg-red-500 text-white rounded-full p-2 cursor-pointer transition-all" />
                </div>

                <div className="header__navigation flex flex-1 justify-end items-center">
                    <span className="header__host bg-white hover:bg-gray-100 text-sm font-semibold p-3 rounded-full cursor-pointer transition-all">Become a host</span>

                    <span className="header__language bg-white hover:bg-gray-100 text-sm font-semibold p-3 rounded-full cursor-pointer transition-all">
                        <GlobeAltIcon className="h-5 w-5" />
                    </span>

                    <span className="header__menu border flex flex-row items-center justify-center ml-2 rounded-full p-1 cursor-pointer text-gray-500 hover:shadow-md transition-all">
                        <MenuIcon className="h-5 w-5 mx-2" />
                        <UserCircleIcon className="h-8 w-8" />
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header

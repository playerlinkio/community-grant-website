import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {url} from "inspector";

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: AnnotationIcon,
    },
    { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const navigation = [
    { name: 'TOKENS', href: '#' },
    { name: 'GRANTS', href: '#' },
    { name: 'NEWS', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'SUBSCRIBE', href: '#' },
    { name: 'CONTACT US', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <div className="min-h-screen">
            <header>
                <Popover className="relative">
                    <div className="pb-6 ">
                        <div className="fixed text-xl z-40 inset-x-0 text-center bg-purple-600">
                            <a href="">广告招租&nbsp;&nbsp;&nbsp; 立即参与 ›››</a>
                        </div>
                    </div>
                    <div className="flex  fixed z-30 inset-x-0 bg-black   justify-between items-center p-5 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10  ">

                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-base rounded-lg p-2 font-medium text-gray-50 hover:bg-blue-500">
                                    {item.name}
                                </a>
                            ))}
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="https://unity3d-test.vercel.app/"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                NETWORK
                            </a>

                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <a href="home">
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                    alt="Workflow"
                                                /></a>
                                        </div>

                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 ">
                                    {navigation.map((item) => (
                                        <div   key={item.name} className="m-1   text-center ">
                                            <a
                                                href={item.href}
                                                className="p-0.5  text-xl rounded-lg bg-indigo-300 font-medium text-gray-50  "
                                            >
                                                {item.name}
                                            </a>  </div>
                                    ))}

                                    <div className="mt-6">

                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            <a href="https://unity3d-test.vercel.app/" className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                NETWORK
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative"  >
                        <div className="relative  bg-cover  md:bg-center sm:overflow-hidden"
                             style={{backgroundImage:"url('https://img.tukuppt.com/bg_grid/00/03/39/trTD0kQKQJ.jpg!/fh/350') "}}>
                                <div className="relative  p-20 md:p-40 ">
                                    <div className="p-5">
                                        <h1 className="text-center  text-3xl font-extrabold tracking-tight sm:text-5xl ">
                                            <span className="block text-indigo-600">Grants Program</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {/*ONE*/}
                            <div className="shadow-xl  bg-white sm:overflow-hidden" >
                                <div className=" px-8 py-20  md:p-20">
                                    <div className="md:pl-40 md:pr-40">
                                        <h1 className="text-center text-2xl tracking-tight sm:text-3xl mb-10 ">
                                            <span className="block font-extrabold text-black mb-5 md:mb-10">About the Grant Program</span>
                                            <span className="block text-base md:text-lg text-black">Projects that add value to the Moonbeam ecosystem are eligible for funding opportunities. Learn how you can apply to be part of the first cohort of teams to participate in the Grants Program.</span>
                                        </h1>
                                       <div className="flex flex-wrap justify-between ">
                                           <div className=" flex-col text-center m-5 w-80 ">
                                               <img className="w-80 mx-auto"
                                                    src="https://moonbeam.foundation/wp-content/uploads/2021/02/Glimmer-Token-Allocation-Launch-16-1536x740.png" />
                                               <h1 className="m-5 text-blue-500">Purpose</h1>
                                               <h2 className="">To fund the development of projects and applications that contribute to the Moonbeam ecosystem and promote overall network growth<br></br></h2>
                                           </div >
                                           <div className="text-center  flex-col m-5 w-80  ">
                                               <img className=" w-80 mx-auto  "
                                                    src="https://moonbeam.foundation/wp-content/uploads/2021/02/Glimmer-Token-Allocation-Launch-15-1536x740.png" alt=""/>
                                               <h1 className="m-5 text-blue-500">Mission</h1>
                                               <h2 className="">To encourage passionate teams to build innovative, interconnected projects on Moonbeam and reward them projects that fulfill unaddressed use cases</h2>
                                           </div>
                                       </div>
                                        <div className="mt-10 max-w-sm mx-auto  text-center sm:max-w-none  sm:justify-center">
                                            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                                                <a
                                                    href="#"
                                                    className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 transform duration-200 hover:shadow-2xl hover:-translate-y-1"
                                                >
                                                    <i className="" ></i>
                                                    CLICK ON
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    {/* TWO   */}
                        <div className="shadow-xl  bg-black sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-white md:p-16">
                                <div className="md:pl-10 md:pr-10">
                                    <h1 className="text-center text-2xl  tracking-tight sm:text-3xl mb-10 ">
                                        <span className="block font-extrabold  mb-5 md:mb-10">Why You Should Apply</span>
                                    </h1>
                                    <div className="flex flex-wrap justify-center md:justify-between ">
                                        <div className=" flex-col text-center w-80 md:w-60 ">
                                            <img className="w-80 md:w-60  mx-auto"
                                                 src="https://moonbeam.foundation/wp-content/uploads/2021/02/Glimmer-Token-Allocation-Launch-16-1536x740.png" />
                                            <h1 className="m-5 text-blue-500">Passion & Enthusiasm</h1>
                                            <h2 className="">You’re excited about the potential of Moonbeam and Polkadot, and want to help build the ecosystems.<br></br></h2>
                                        </div >
                                        <div className="text-center  flex-col w-80 md:w-60  ">
                                            <img className="w-80 md:w-60 mx-auto  "
                                                 src="https://moonbeam.foundation/wp-content/uploads/2021/02/Glimmer-Token-Allocation-Launch-15-1536x740.png" alt=""/>
                                            <h1 className="m-5 text-blue-500">Experimentation</h1>
                                            <h2 className="">You want to build and test your application in a growing ecosystem with a strong community and a growing user base.</h2>
                                        </div>
                                        <div className="text-center  flex-col  w-80 md:w-60  ">
                                            <img className=" w-80 md:w-60 mx-auto  "
                                                 src="https://moonbeam.foundation/wp-content/uploads/2021/02/Glimmer-Token-Allocation-Launch-15-1536x740.png" alt=""/>
                                            <h1 className="m-5 text-blue-500">Scalability</h1>
                                            <h2 className="">You want to build and test your application in a growing ecosystem with a strong community and a growing user base.</h2>
                                        </div>
                                        <div className="text-center  flex-col w-80 md:w-60  ">
                                            <img className="w-80 md:w-60mx-auto  "
                                                 src="https://moonbeam.foundation/wp-content/uploads/2021/02/Glimmer-Token-Allocation-Launch-15-1536x740.png" alt=""/>
                                            <h1 className="m-5 text-blue-500">Multi-Chain</h1>
                                            <h2 className="">You want to build and test your application in a growing ecosystem with a strong community and a growing user base.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*three*/}
                        <div className="shadow-xl  bg-white sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-black md:p-16">
                                <div className="md:pl-6 md:pr-6">
                                    <h1 className="text-center text-2xl  tracking-tight sm:text-3xl mb-10 md:pl-32 md:pr-32 ">
                                        <span className="block font-extrabold  mb-5 md:mb-10">Grant Program Resources</span>
                                        <span className="block text-base md:text-lg text-black">
                                            By joining the Moonbeam Grants Program,
                                            you will have greater ability to contribute to Moonbeam’s growth,
                                            and your team will have access to great benefits that will impact your project growth and development.
                                        </span>
                                    </h1>
                                    <div className=" flex flex-wrap  justify-center md:justify-between pt-5 " >
                                        <div className="relative  w-80 h-72 md:w-72  mb-14 transform duration-700 hover:shadow-2xl hover:-translate-y-3  ">
                                            <img className="absolute  w-80 mx-auto"
                                                 src="https://tse3-mm.cn.bing.net/th/id/OIP-C.xOkhNOEyavPnz4EJSqwNcAAAAA?pid=ImgDet&rs=1" />
                                            <div>
                                                <h1 className=" relative m-5 text-blue-500">NO.1</h1>
                                            </div>
                                        </div >
                                        <div className="relative w-80 h-72 md:w-72 mb-14  transform duration-700 hover:shadow-2xl hover:-translate-y-3 ">
                                            <img className="absolute w-80   mx-auto"
                                                 src="https://tse3-mm.cn.bing.net/th/id/OIP-C.xOkhNOEyavPnz4EJSqwNcAAAAA?pid=ImgDet&rs=1" />
                                            <div className="relative  m-5 text-blue-500">
                                                <h1 className=" ">NO.2</h1>
                                            <div className="  ">
                                                Glimmer token grants for community projects
                                            </div>
                                            </div>
                                        </div >
                                        <div className="relative w-80 h-72 md:w-72  mb-14 transform duration-700 hover:shadow-2xl hover:-translate-y-3 ">
                                            <img className="absolute w-80   mx-auto"
                                                 src="https://tse3-mm.cn.bing.net/th/id/OIP-C.xOkhNOEyavPnz4EJSqwNcAAAAA?pid=ImgDet&rs=1" />
                                            <div>
                                                <h1 className=" relative m-5 text-blue-500">NO.3</h1>
                                            </div>
                                        </div >
                                        <div className="relative w-80 h-72 md:w-72   transform duration-700 hover:shadow-2xl hover:-translate-y-3 ">
                                            <img className="absolute  w-80    mx-auto"
                                                 src="https://tse3-mm.cn.bing.net/th/id/OIP-C.xOkhNOEyavPnz4EJSqwNcAAAAA?pid=ImgDet&rs=1" />
                                            <div>
                                                <h1 className=" relative m-5 text-blue-500">NO.4</h1>
                                            </div>
                                        </div >
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*  Four  */}
                        <div className="shadow-xl  bg-gray-800 sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-white md:p-16">
                                <div className="md:pl-40  md:pr-40">
                                    <h1 className="text-center text-2xl tracking-tight sm:text-3xl mb-10 ">
                                        <span className="block font-extrabold  mb-5 md:mb-10">Eligible Projects and Ideas</span>
                                    </h1>
                                    <div className="flex flex-wrap justify-center ">
                                        <div className="flex  w-96 mb-5 mr-5 ">
                                        <div className="fa fa-cog fa-2x"></div>
                                            <div className="ml-8">
                                                <h1 className="mb-3 text-lg md:text-2xl">Tooling and Infrastructure</h1>
                                            <h2 className="mb-2">Projects that support the development tools and infrastructure needed by other teams.</h2>
                                              <h3 className="italic ">These projects must fill existing tooling gaps from the developer tools portfolio in Moonbeam. Examples include wallets, browsers, and API services.</h3>
                                            </div>
                                            </div >
                                        <div className="flex  w-96 mb-5 mr-5 ">
                                           <div className="fa fa-lightbulb-o fa-2x"></div>
                                            <div className="ml-8">
                                            <h1 className=" mb-3 text-lg md:text-2xl">Ecosystem Projects</h1>
                                            <h2 className="mb-2">Projects that support the ecosystem through a wide range of use cases, such as DeFi, NFT, identity, games, insurance, and more.</h2>
                                            <h3 className="italic ">This category aims to seed the Moonbeam ecosystem by providing useful services and utility on the network.</h3>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Five   */}
                        <div className="shadow-xl  bg-white sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-black md:p-30">
                                <div className="md:pl-20  md:pr-20">
                                    <h1 className=" text-3xl tracking-tight sm:text-4xl mb-10 md:mb-20">
                                        <span className="block font-normal  mb-5 md:mb-10">The Grant Application Process</span>
                                    </h1>
                                    <div className="flex flex-wrap justify-center  md:justify-start ">
                                        <div className="flex  w-80 mb-5 mr-5 md:mb-16 md:mr-16 ">
                                            <div className="w-20 h-6 border border-gray-900 border-solid rounded-full text-center">1</div>
                                            <div className="ml-8">
                                                <h1 className="mb-3 text-lg  ">Fill Out the Application Form</h1>
                                                <h2 className="mb-2 text-base font-light text-gray-900">Share all the necessary information with us. The more information we have, the better we can evaluate your application.</h2>

                                            </div>
                                        </div >
                                        <div className="flex  w-80 mb-5 mr-5  md:mb-16 md:mr-16 ">
                                            <div className="w-28 h-6 border border-gray-900 border-solid rounded-full text-center">2</div>
                                            <div className="ml-8">
                                                <h1 className=" mb-3 text-lg md:text-xl">Review and Feedback Call</h1>
                                                <h2 className="mb-2 text-base font-light text-gray-900">After reviewing your application, we will send you a link to schedule a call with the Moonbeam team to discuss your project and answer any questions you might have.</h2>
                                            </div>
                                        </div>
                                        <div className="flex  w-80 mb-5 mr-5  md:mb-16 md:mr-16">
                                            <div className="w-12 h-6 border border-gray-900 border-solid rounded-full text-center">3</div>
                                            <div className="ml-8">
                                                <h1 className=" mb-3 text-lg md:text-xl">Decision</h1>
                                                <h2 className="mb-2 text-base font-light text-gray-900">We will contact you to tell you if your application was approved or rejected.</h2>
                                            </div>
                                        </div>
                                        <div className="flex  w-80 mb-5 mr-5 md:mb-16 md:mr-16">
                                            <div className="w-16 h-6 border border-gray-900 border-solid rounded-full text-center">4</div>
                                            <div className="ml-8">
                                                <h1 className=" mb-3 text-lg md:text-xl">Onboarding</h1>
                                                <h2 className="mb-2 text-base font-light text-gray-900">In this step, we will welcome you to the program and review the legal and funding aspects.</h2>
                                            </div>
                                        </div>
                                        <div className="flex  w-80 mb-5 mr-5 md:mb-16 md:mr-16">
                                            <div className="w-16 h-6 border border-gray-900 border-solid rounded-full text-center">5</div>
                                            <div className="ml-8">
                                                <h1 className=" mb-3 text-lg md:text-xl">Follow-up</h1>
                                                <h2 className="mb-2 text-base font-light text-gray-900">We will have recurring calls with you and your team to follow up and give the support needed.</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 max-w-sm mx-auto  text-center sm:max-w-none  md:-mt-5 sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 transform duration-200 hover:shadow-2xl hover:-translate-y-1"
                                            >
                                                <i className="" ></i>
                                                CLICK ON
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Six*/}
                        <div className="shadow-xl  bg-black sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-white bg-cover  md:bg-center md:p-16"
                                 style={{backgroundImage:"url('https://img.zcool.cn/community/015b1456cd26db32f875520f3f7a84.jpg@1280w_1l_2o_100sh.jpg')"}}>
                                <div className="md:pl-20  md:pr-20">
                                    <h1 className=" text-3xl tracking-tight sm:text-4xl mb-10 md:mb-20">
                                        <span className="block font-normal  mb-5 md:mb-10">Sign Up for Updates</span>
                                    </h1>
                                    <div className="flex flex-wrap justify-center -mt-8 md:justify-start ">
                                        <div className="flex  w-80 mb-5 mr-5 md:mb-16 md:mr-16 ">
                                            <div className="">
                                                <h1 className="mb-3 text-lg  ">We’ll update you on important Foundation news, like Moonriver Crowdloan information and Glimmer token distribution.</h1>
                                            </div>
                                        </div >
                                        <div>
                                        <div className="flex   w-auto mb-2 mr-5   md:mr-16  ">
                                            <div className="text-black">
                                                <form action="" method="post">
                                                <input className="w-44 h-8 mr-5 p-1 md:w-96" type="text" placeholder=" Please fill out the." />
                                                <input type="submit" value="Submit"
                                                className=" px-4 py-3 border border-transparent text-base
                                                font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 cursor-pointer
                                                hover:bg-opacity-70 sm:px-20 transform duration-200 hover:shadow-2xl hover:-translate-y-1"/>
                                                </form>
                                            </div>
                                            </div>
                                    <div className="flex ">
                                        <div className="flex  w-48">
                                            <input type="checkbox" value=""/>
                                            <h1 className="ml-1 text-xs ">Send me news and updates from the Moonbeam Foundation</h1>

                                        </div>
                                        <div className="w-36">
                                        <h2 className=" text-xs font-light ">
                                            By submitting this form, you agree to the terms of the
                                            <a className="ml-2 text-blue-500" href="">Privacy Policy.</a>
                                        </h2>
                                    </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* seven   */}
                        <div className="bg-black p-16 sm:overflow-hidden text-white">
                            <div className=" max-w-max mx-auto mb-12">
                                <a href="home">
                                    <img
                                        className="h-16 "
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    /></a>
                            </div>
                            <div className="flex justify-center mb-12">
                                <div className="text-center text-xs text-gray-400 hover:text-blue-600 mr-8">
                                    <a href="">
                                        中文(中国)
                                    </a>
                                </div>
                                <div className="text-center text-xs text-gray-400 hover:text-blue-600">
                                    <a href="">
                                        English
                                    </a>
                                </div>
                            </div>

                            <div className="text-center text-xs text-gray-400 hover:text-blue-600 mb-3">
                                <a href="">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="text-center text-xs text-gray-600">
                                © 2021 Moonbeam Foundation. All Rights Reserved
                            </div>
                        </div>
                    </div >
                </div>
            </main>
        </div>
    )
}

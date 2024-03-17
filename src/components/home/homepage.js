import React from 'react';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
// import { message } from "antd";
// import axios from "axios";

function Homepage() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>

            <NavbarComponent />
            <div>
                <div class="relative z-5 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                    <div class="absolute inset-0">
                        <img className="h-full" src="//imageskincare.com/cdn/shop/files/HB4b-desktop-no-copy_c9388d53-03d9-4333-8b34-9202f6a13d83.jpg?v=1709409023&width=1800" />
                        <div class="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div class="relative z-5 flex flex-col justify-center items-center h-full text-center">
                        <h1 class="text-5xl font-bold leading-tight mb-4">Unlock Your Natural Glow</h1>
                        <p class="text-lg text-gray-300 mb-8">Discover amazing products that await you.</p>
                        <a href="#" class="bg-[#F5BCBA] text-gray-900 hover:bg-[#C8A8E9] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Shop Now</a>
                    </div>
                </div>



                <div class="text-center p-10">
                    <h1 class="font-bold text-4xl mb-4">Product's Categories</h1>

                </div>

                <section id="Projects"
                    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">

                                <p class="text-lg font-bold text-black truncate block capitalize">Women Makeup</p>

                            </div>
                        </a>
                    </div>

                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1593560369164-8f3a8facd0e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">

                                <p class="text-lg font-bold text-black truncate block capitalize">Women Haircare</p>

                            </div>
                        </a>
                    </div>

                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">

                                <p class="text-lg font-bold text-black truncate block capitalize">Women Skincare</p>

                            </div>
                        </a>
                    </div>
                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">

                                <p class="text-lg font-bold text-black truncate block capitalize">Gifts & Sets</p>

                            </div>
                        </a>
                    </div>



                </section>




            </div>
            <br />
            <section class="text-gray-600 body-font bg-pink-900">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">NEW Virtual Skincare Analysis

                        </h1>
                        <p class="mb-8 leading-relaxed text-white">Looking for a full skincare routine?
                            Our NEW Virtual Skincare Analysis Tool evaluates your skin and provides the most personalized recommendations. </p>
                        <div class="flex justify-center">
                            <h3 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">Scan with your phone to get started

                            </h3>
                        </div>
                        <img className="w-48" src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" />
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1309405076/photo/beauty-portrait-of-young-woman.jpg?s=2048x2048&w=is&k=20&c=SFjYmzGkvOyWdeHNDe0LapqmnwR_9pHca6lPtZ8BsLo=" />
                    </div>
                </div>
            </section>
            <br />
            <h1 class="font-bold text-4xl mb-4 mt-4 text-center">Our Best Sellers</h1>
            <Carousel responsive={responsive} className='ml-20 mr-10 mt-10 mb-5'>
                <div className=' w-96 bg-[#FBEFF2] rounded-2xl'>
                    <a class="p-8 max-w-lg border border-[#C8A8E9] rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="shadow rounded-lg overflow-hidden border h-72" />
                        <div class="mt-8">
                            <h4 class="font-bold text-xl">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class="mt-2 text-gray-600">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration
                            </p>
                            <div class="mt-5">
                                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                                    SHop Now</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' w-96 bg-[#FBEFF2] rounded-2xl'>
                    <a class="p-8 max-w-lg border border-[#C8A8E9] rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="shadow rounded-lg overflow-hidden border h-72" />
                        <div class="mt-8">
                            <h4 class="font-bold text-xl">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class="mt-2 text-gray-600">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration
                            </p>
                            <div class="mt-5">
                                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                                    Shop Now</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' w-96 bg-[#FBEFF2] rounded-2xl'>
                    <a class="p-8 max-w-lg border border-[#C8A8E9] rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://images.unsplash.com/photo-1616986953793-2e6159b78580?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="shadow rounded-lg overflow-hidden border h-72" />
                        <div class="mt-8">
                            <h4 class="font-bold text-xl">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class="mt-2 text-gray-600">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration
                            </p>
                            <div class="mt-5">
                                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                                    Shop Now</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' w-96 bg-[#FBEFF2] rounded-2xl'>
                    <a class="p-8 max-w-lg border border-[#C8A8E9] rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="shadow rounded-lg overflow-hidden border h-72" />
                        <div class="mt-8">
                            <h4 class="font-bold text-xl">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class="mt-2 text-gray-600">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration
                            </p>
                            <div class="mt-5">
                                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                                    Shop Now</button>
                            </div>
                        </div>
                    </a>
                </div>
            </Carousel>
            <br></br>
            <div class="px-2 py-20 w-full flex justify-center">
                <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div class="lg:w-1/2">
                        <div class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg bg-[url('https://i.pinimg.com/736x/fb/43/68/fb436826ced9741a007925c45d8f4bf7.jpg')]"
                        >
                        </div>
                    </div>
                    <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg bg-[#FBEFF2]">
                        <h4 class="text-3xl text-gray-800 font-bold">
                            Special offers
                            <br />
                            <span class="text-[#A10550]">
                                Save up to 50%</span>
                        </h4>
                        <p class="mt-4 text-gray-600">
                            Mother’s Day is coming!
                            For everything she’s given you, it's time to give back. Shower her with love, happiness, and the best of Beautya.
                        </p>
                        <p className='mt-4 text-[#A10550] font-bold'>
                            visit your local beautya branches to find out more about our special offers in make up and skincare products.
                        </p>
                        <div class="mt-8">
                            <a href="#" class="bg-[#F5BCBA] text-gray-900 hover:bg-[#C8A8E9] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <section class="text-gray-600 body-font bg-pink-900">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/premium-photo/skincare-face-cream-portrait-women-studio-wellness-health-natural-routine-beauty-cosmetic-interracial-females-with-facial-moisturizer-spf-lotion-by-nude-background_590464-133368.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais" />
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Brand

                        </h1>
                        <p class="mb-8 leading-relaxed text-white">We believe that beauty thrives in diversity and discovery.
                            Our purpose is to expand the way the world sees beauty by empowering the Extraordinary in each of us </p>
                        <div class="mt-8">
                            <a href="#" class="bg-[#F5BCBA] text-gray-900 hover:bg-[#C8A8E9] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">More Info</a>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <div class="text-center p-10">
                <h1 class="font-bold text-4xl mb-4">Our Blog</h1>

            </div>
            <div className='text-right decoration-solid'>
                <a href="/blog" className=' pr-72 text-[#A10550] '>View all</a>
            </div>

            <section id="Projects"
                class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-5 mb-20">


                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <h4 class="font-bold text-xl mb-3">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class=" text-black">Many people find it difficult to get clear skin. The methods for getting clear skin will vary..</p>

                        </div>
                    </a>
                </div>

                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1593560369164-8f3a8facd0e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <h4 class="font-bold text-xl mb-3">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class=" text-black">Many people find it difficult to get clear skin. The methods for getting clear skin will vary..</p>

                        </div>
                    </a>
                </div>

                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72 h-3">
                            <h4 class="font-bold text-xl mb-3">Beautya Capture Total Dreamskin Care & Perfect</h4>
                            <p class=" text-black">Many people find it difficult to get clear skin. The methods for getting clear skin will vary..</p>

                        </div>
                    </a>
                </div>
            </section>
            <div>

                <div
                    class="mb-20 relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#A10550] text-gray-900 sm:rounded-lg shadow-lg">
                    <div class="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
                    <div class="relative">
                        <div>
                            <h2 class="text-center text-slate-100 text-4xl lg:text-5xl font-bold leading-tight">Testimonials</h2>
                            <div class="my-4 mx-auto w-12 h-2 border-4 border-[#E3AADD]"></div>
                            <div class="text-center text-slate-100 font-light">Here are what some of our amazing customers are
                                saying ...</div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
                            <div
                                class="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
                                <div class="-ml-4">
                                    <svg class="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                                        shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                        fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                                        fill='currentColor'>
                                        <path
                                            d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                                    </svg>
                                </div>
                                <div class="mt-2">
                                    I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
                                    crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
                                    brain was tired
                                </div>
                                <div>
                                    <div class="mx-auto w-full border border-gray-300 my-8"></div>
                                    <div class="flex items-center">
                                        <div>
                                            <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                                                src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4" />
                                        </div>
                                        <div class="ml-4">
                                            <div class="font-bold">David H. Hansson</div>
                                            <div class="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
                                <div class="-ml-4">
                                    <svg class="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                                        shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                        fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                                        fill='currentColor'>
                                        <path
                                            d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                                    </svg>
                                </div>
                                <div class="mt-2">
                                    I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
                                    crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
                                    brain was tired
                                </div>
                                <div>
                                    <div class="mx-auto w-full border border-gray-300 my-8"></div>
                                    <div class="flex items-center">
                                        <div>
                                            <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                                                src="https://avatars0.githubusercontent.com/u/810438?s=100" />
                                        </div>
                                        <div class="ml-4">
                                            <div class="font-bold">Dan Abramov</div>
                                            <div class="text-sm text-gray-600 mt-1">Creator, <a href="https://swift.org/">Java</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6 py-6 rounded md:px-12 md:py-12 lg:py-16 bg-[#F4E7EB]">
                <div class="flex flex-col items-center justify-between space-y-4 lg:space-y-0 lg:space-x-8">
                    <div class="max-w-2xl mb-4 text-center lg:mb-8">
                        <h3 class="mb-2 text-3xl font-semibold text-gray-700 lg:text-4xl">
                            Subscribe to newsletter
                        </h3>
                        <div class="text-lg text-gray-500">
                            Welcome to our newsletter! We are thrilled to bring you the latest news and updates on all things
                            Lebanon.
                        </div>
                    </div>
                    <form>
                        <div class="space-y-4">
                            <div>
                                <label for="member_email" class="sr-only">Email address</label>
                                <input class="inline-block w-full px-4 py-4 text-gray-800 placeholder-gray-800 bg-white border border-gray-200 rounded-full revue-form-field focus:outline-none" required="" placeholder="Your email address..." type="email" />
                            </div>
                            <div class="flex items-center justify-center revue-form-actions">
                                <button type="submit" class="font-semibold bg-slate-100 text-gray-900 border-2 border-solid border-[#A10550] inline-block px-4 py-2 text-center transition-all duration-700 rounded-lg cursor-pointer h-10  from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 hover:border-slate-100 hover:bg-[#E3AADD] hover:text-[#A10550]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
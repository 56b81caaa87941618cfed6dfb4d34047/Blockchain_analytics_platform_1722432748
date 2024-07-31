/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
Vue.component("simple_hero_component_1722432752", {
    template: `
        <div class="bg-gradient-to-br from-pink-400 to-purple-600 min-h-screen">
            <nav class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-opacity-30">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo</span>
                    </a>
                    <div class="flex md:order-2">
                        <button type="button" class="text-white bg-pink-500 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 transition duration-300 ease-in-out transform hover:scale-105">Get started</button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white hover:text-pink-300 rounded md:bg-transparent md:p-0 transition duration-300 ease-in-out" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white hover:text-pink-300 rounded md:hover:bg-transparent md:p-0 transition duration-300 ease-in-out">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white hover:text-pink-300 rounded md:hover:bg-transparent md:p-0 transition duration-300 ease-in-out">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="hero-section" class="flex-1 pt-20">
                <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                        <div id="hero-title-container-text" class="flex">
                            <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-7xl text-white text-shadow-lg">Unlock Blockchain Insights</h1>
                        </div>
                        <div id="hero-subtitle-container" class="flex">
                            <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-xl lg:text-2xl text-pink-100">Powerful Analytics for Ethereum Data</p>
                        </div>
                        <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <div id="hero-button-1-container" class="flex">
                                <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-purple-500 bg-opacity-50 rounded-lg sm:w-auto hover:bg-opacity-70 focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out transform hover:scale-105">Start Analyzing</a>
                            </div>
                            <div id="hero-button-2-container" class="flex">
                                <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-pink-500 bg-opacity-50 rounded-lg sm:w-auto hover:bg-opacity-70 focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out transform hover:scale-105">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    </div>
                </div>
            </section>            
        </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

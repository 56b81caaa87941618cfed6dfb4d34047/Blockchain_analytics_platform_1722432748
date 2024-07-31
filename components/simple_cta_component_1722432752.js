/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722432752", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-12 backdrop-blur-md bg-white/20 rounded-3xl shadow-2xl">
            <div id="cta-content" class="max-w-screen-md mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock Ethereum's Potential with Real-Time Analytics</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-light text-pink-100 md:text-lg">Our cutting-edge platform harnesses the power of the Ethereum blockchain, providing you with invaluable insights and actionable data.</p>
                </div>
                
                <div id="cta-button-container" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Explore Ethereum Analytics</a>
                    <button class="flex-1 text-pink-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Hello World</button>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

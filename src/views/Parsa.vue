<template>
    <div>
        <main>

            <section>
                <router-link to="/">
                    <span> &lt;&lt;
                        Back Home</span>
                </router-link>
                <p>
                    Results-driven Frontend Engineer with a passion for crafting
                    seamless user interfaces for <b>+3 years</b>. Proficient in modern web
                    technologies Such as <b>Next.js</b> and <b>Vue.js</b> to obtain the best looking
                    platforms while maintaining the fastest performance </p>
                <h3>
                    Technologies:
                </h3>
                <h6>Vue.js</h6>
                <h6>Next.js</h6>
                <h6>Typescript</h6>
                <h6>TailwindCSS</h6>
                <h6>Git</h6>
                <h3>Full CV:</h3>
                <!-- 
                <a href="https://drive.google.com/file/d/18Non0EQMudMNAiYlLzJ44SsZbErUhOI_/view" class="button"
                    target="_blank">Download</a> -->
                <a href="../../ParsaSaeednia.pdf" class="button" target="_blank">Download</a>


            </section>
            <!-- <div class="image-container">
                <img src="https://picsum.photos/254/294" alt="PARHAM">
            </div> -->
        </main>
        <footer>
            <ul>
                <a href="https://github.com/parsasaeednia" target="_blank">
                    <li>Github</li>
                </a>
                <a href="https://www.linkedin.com/in/parsa-saeednia-5a11a6174/" target="_blank">
                    <li>linkedin</li>
                </a>
                <a href="mailto:p.parsa31@gmail.com" target="_blank">
                    <li>mail</li>
                </a>
            </ul>
        </footer>
    </div>
</template>


<style scoped>
div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

main {
    height: 100vh;
    padding: 46px 208px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fafafa;
    z-index: 2;
}

.image-container {
    padding-left: 56px;
}

section {
    margin-top: 7em;
    padding-left: 67px;
    display: flex;
    flex-direction: column;
    border-right: 2px dashed #212121;

}

span {
    line-height: 2em;
    font-weight: 500;

}

p {
    margin: 1em 2em 1em 0;
    text-align: justify;

}

h3 {
    font-size: 26px;
    font-weight: 200;
    margin: 0.5em 0;
}

h6 {
    font-size: 16px;
}

a.button {
    border: 1px solid #212121;
    padding: 6px;
    background-color: #fafafa;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    width: fit-content;
    font-weight: 500;
}

footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    height: 64px;
}

ul {
    display: flex;
    align-items: center;
    justify-content: center;
}

li {
    list-style: none;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 300;
}

li:hover {
    font-weight: 500;
    cursor: pointer;
}

@media screen and (max-width:1024px) {
    img {
        width: 100px;
    }

    .image-container {
        display: none;
    }

    main {
        padding-left: 3em;
        padding-right: 3em;
    }

    section {
        padding-left: 1em;
    }

    span {
        font-size: small;
    }

    h3 {
        font-size: 16px;
    }

    h6 {
        font-size: 14px;
    }

    p {
        font-size: 12px;
    }

    a.button {
        font-size: small;
    }
}
</style>
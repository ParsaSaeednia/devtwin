
<template>
    <div>
        <main>
            <!-- <div class="image-container">
                <img src="https://picsum.photos/254/294" alt="PARHAM">
            </div> -->
            <section>
                <router-link to="/">
                    <span>
                        &lt;&lt;back home
                    </span>
                </router-link>
                <p>
                    Seasoned Backend Engineer adept at designing and implementing <b>scalable</b> server
                    <b>architectures</b>. Skilled in
                    <b>Node JS</b>, database management, and <b>API development</b> to ensure optimal <b>performance</b> and
                    reliability. A
                    results-oriented professional committed to delivering efficient backend solutions for complex
                    applications.

                </p>
                <h3>
                    Technologies:
                </h3>
                <h6>Nest.js</h6>
                <h6>Docker</h6>
                <h6>Git</h6>
                <h6>Microservices</h6>
                <h3>Full CV:</h3>
                <!-- <a href="https://drive.google.com/file/d/1F0Vn0zva4I8LZ-LyWb1KmxEd4PY38lEH/view" class="button"
                    target="_blank">Download</a> -->
                <a href="../../public/ParhamSaeednia.pdf" class="button" target="_blank">Download</a>


            </section>
        </main>
        <footer>
            <ul>
                <a href="https://github.com/parhamsaeednia" target="_blank">
                    <li>Github</li>
                </a>
                <a href="https://www.linkedin.com/in/parham-saeednia-a88a30196/" target="_blank">
                    <li>linkedin</li>
                </a>
                <a href="mailto:saeedniaparham@gmail.com" target="_blank">
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
    padding-right: 56px;
}

section {
    margin-top: 7em;
    padding-left: 67px;
    display: flex;
    flex-direction: column;
    border-left: 2px dashed #212121;

}

p {
    text-align: justify;
}

span {
    line-height: 4em;
    font-weight: 500;

}

span:hover {
    cursor: pointer;
}



h3 {
    font-size: 26px;
    font-weight: 200;
    margin: 1em 0;
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
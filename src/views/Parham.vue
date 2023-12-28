<template>
    <div>
        <main>
            <div class="image-container">
                <img src="https://picsum.photos/254/294" alt="PARHAM">
            </div>
            <section>
                <router-link to="/">
                    <span>Back Home</span>
                </router-link>
                <p>
                    PARHAM IS AND IS A FORMER SPEED CUBER AND FORMER ISIS MEMBER
                    HE HAS FUCKED MANY BITHCES ON TABLE
                </p>
                <h3>
                    Technologies:
                </h3>
                <h6>Nest.js</h6>
                <h3>Projects:</h3>
                <h6>x.com</h6>
                <h6>y.com</h6>
            </section>
        </main>
        <footer>
            <ul>
                <li>Github</li>
                <li>Linekdin</li>
                <li>Email</li>
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
    border-right: 2px dashed #212121;
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
    padding-left: 67px;
    display: flex;
    flex-direction: column;
}

span:hover {
    font-weight: 500;
    cursor: pointer;
}

p {
    margin: 1em 0;

}

h3 {
    font-size: 26px;
    font-weight: 200;
    margin: 1em 0;
}

h6 {
    font-size: 16px;
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
</style>
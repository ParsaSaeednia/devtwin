<template>
    <nav>
        <router-link class="parham-container" to="/Parham">
            <div>
                <h1>Parham</h1>
                <h3 class="parham-hover-line">Go through</h3>
            </div>
        </router-link>

        <router-link class="parsa-container" to="/Parsa">
            <div>
                <h1>Parsa</h1>
                <h3 class="parsa-hover-line">Go through</h3>
            </div>
        </router-link>

    </nav>
</template>


<style scoped>
nav {
    padding: 46px 208px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px dashed #212121;
    padding-bottom: 2em;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    background: #fafafa;
}



h1 {
    font-size: 68px;
    font-weight: 200;
    line-height: normal;
    color: #606060
}

h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: normal;

}

/*
 PARHAM STYLES
*/

.parham-container {
    /* Required to contain the absolute positioning */
    position: relative;
    overflow: hidden;
    /* Ensures the line doesn't exceed the container */
}

.parham-container:hover h1,
.parham-container:hover h3 {
    transition: 1s ease;
    /* Your hover styles here, example: */
    color: #212121;
    /* Changes text color on hover */
    cursor: pointer;
    /* Changes the cursor to a pointer to indicate it's clickable */
}

.parham-container h1,
.parham-container h3 {
    transition: color 1s ease, padding-left 1s ease;
    /* Smooth transition for color change */
}


.parham-hover-line {
    position: relative;
    padding-left: 0em;
    /* Default padding */
    /* Required for the absolute positioning of the pseudo-element */
    transition: color 1s ease, padding-left 1s ease;
    /* Transition for both padding and color */
}


.parham-hover-line::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 0%;
    /* Start with no line at all */
    height: 2px;
    /* Thickness of the line */
    background-color: #212121;
    /* Color of the line */
    transition: width 1s ease;
}

.parham-container:hover .parham-hover-line::before {
    width: 55%;
    /* Full width on hover */
}

.parham-container:hover .parham-hover-line {
    padding-left: 11.5em;
    /* Adjust space as need on hover */
}



/*
 PARSA STYLES
*/
.parsa-container {
    /* Required to contain the absolute positioning */
    position: relative;
    overflow: hidden;
    /* Ensures the line doesn't exceed the container */
}

.parsa-container:hover h1,
.parsa-container:hover h3 {
    transition: 1s ease;
    /* Your hover styles here, example: */
    color: #212121;
    /* Changes text color on hover */
    cursor: pointer;
    /* Changes the cursor to a pointer to indicate it's clickable */
}

.parsa-container h1,
.parsa-container h3 {
    transition: color 1s ease, padding-left 1s ease;
    /* Smooth transition for color change */
}


.parsa-hover-line {
    position: relative;
    padding-left: 0em;
    /* Default padding */
    /* Required for the absolute positioning of the pseudo-element */
    transition: color 1s ease, padding-left 1s ease;
    /* Transition for both padding and color */
}


.parsa-hover-line::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 0%;
    /* Start with no line at all */
    height: 2px;
    /* Thickness of the line */
    background-color: #212121;
    /* Color of the line */
    transition: width 1s ease;
}

.parsa-container:hover .parsa-hover-line::before {
    width: 45%;
    /* Full width on hover */
}

.parsa-container:hover .parsa-hover-line {
    padding-left: 7.1em;
    /* Adjust space as need on hover */
}


.router-link-active h1 {
    color: #212121;
}

.router-link-active h3 {
    display: none;
}
</style>
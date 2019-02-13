<template>
    <div>
        <nav id="ssp-nav">
            <section>
                <h1>SSP</h1>
            </section>

            <section>
                <ul>
                    <li><router-link to="/">Last post</router-link></li>
                    <li><router-link to="/new-post">New post</router-link></li>
                </ul>
            </section>
        </nav>
    </div>
</template>


<script>
export default {
    name: 'MenuBar',
}
</script>

<style scoped>
#ssp-nav {
    width: 100%;
    height: 75px;
    padding: 0 8%;

    background-color: #1565C0;
    color: white;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}
#ssp-nav section:first-child h1 {
    font-family: Offside, cursive;
    font-weight: normal;
    font-size: 24px;
}
#ssp-nav section:last-child ul li {
    list-style: none;
    display: inline;
    margin: 10px;
}
a {
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-decoration: none;
}
</style>

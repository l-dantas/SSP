<template>
    <div>
        <div id="seperator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Seperator',
}
</script>

<style scoped>
#seperator {
    margin: 30px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
#seperator span {
    display: inline-block;

    width: 40%;
    height: 2px;
    background: gray;
}
#seperator span:nth-child(2) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid gray;
    background: transparent;
}
</style>

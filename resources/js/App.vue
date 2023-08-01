<template>
    <Header/>
    <router-view/>
</template>

<script>
    import LoginPage from "./components/LoginPage.vue"
    import Header from "./Header.vue"
    export default{
        components: {LoginPage,Header}
    }
</script>
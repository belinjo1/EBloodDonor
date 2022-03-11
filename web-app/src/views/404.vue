<template>
    <div class="main">
        <font-awesome-icon class="face" :icon="['fas', 'face-frown-open']"/>
        <h1 class="main-title">404</h1>
        <h2>Not Found</h2>
        <p>The page or resource you requested doesn't exist or an other error occurred!</p>
        <div class="links">
            <a @click="$router.back()"><font-awesome-icon :icon="['fas', 'arrow-left']"/> Back</a> |
            <router-link to="/"><font-awesome-icon :icon="['fas', 'home']"/> Home</router-link>
        </div>
    </div>
</template>

<script>

export default {}
</script>

<style scoped>
    .main{
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .face{
        font-size: 50pt;
    }

    .main-title{
        font-size: 50pt;
    }

    p{
        margin: 6px 0;
    }
    
    .links{
        margin: 20px 0;
    }
    .links a{
        cursor: pointer;
        text-decoration: none;
        color: rgb(24, 36, 143);
        margin: 0 10px;
    }
</style>

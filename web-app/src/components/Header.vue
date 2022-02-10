<template>
    <div>
        <div id="header">
            <div>
                 <button class="sideBarButton">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </button>
            </div>
           
            <div class="header-brand">
                <router-link :to="{ name: 'Home' }">
                    <div class="header-logo">
                        <img src="../assets/logo.png">
                        <span>E-BloodDonor</span>
                    </div>
                </router-link>
            </div>
           
            <div>
                <div class="register-login">
                    <a>Register</a>
                    <a>Login</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

#header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(120deg, rgba(180,182,205,1) 0%, rgba(204,160,160,1) 100%);
    padding: 15px 0;
    box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.35);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}

#header>div{
    width: 100%;
    max-width: 200px;
    /* border: dashed 1px red; */
    display: flex;
    align-items: center;
    justify-content: center;
}

#header>div>*{
    margin: 0 10px;
}

.sideBarButton{
    width: 50px;
    height: 50px;
    background-color: #cf434f;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}
.sideBarButton:hover{
    background-color: #b3313c;
}
.sideBarButton svg{
   color: white;
   font-size: 25px;
}

.header-brand a{
    text-decoration: none;
    color: inherit;
}

.header-logo{
    display: flex;
    align-items: center;
    background: rgba(212, 215, 224, 0.7);
    padding: 3px 15px;
    border-radius: 25px;
    align-self: center;
    box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.103);
    transition: 0.2s;
}

.header-logo:hover{
    scale: 1.035;
}
.header-logo:active{
    scale: 1;
    transition: 0s;
}
.header-logo img{
    width: 40px;
}
.register-login {
    display: flex;
    /*border: solid 1px red;*/
}

.register-login a {
    padding: 10px 20px;
    margin: 0 1px;
    color: white;
    text-decoration: none;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s;
}

.register-login a:first-child {
    background: linear-gradient(121deg, rgba(195,89,121,1) 18%, rgba(235,96,96,1) 100%);
    border-radius: 8px 0 0 8px;
    
}

.register-login a:first-child:hover {
    background: linear-gradient(121deg, rgba(186,61,99,1) 18%, rgba(235,73,73,1) 100%);
    border-radius: 8px 0 0 8px;
}

.register-login a:last-child {
    background: linear-gradient(138deg, rgba(92,169,235,1) 0%, rgba(148,67,240,1) 100%);
    border-radius: 0 8px 8px 0;
}

.register-login a:last-child:hover {
    background: linear-gradient(138deg, rgba(65,152,227,1) 0%, rgba(124,38,222,1) 100%);
    border-radius: 0 8px 8px 0;
}

</style>

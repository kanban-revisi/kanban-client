<template>
    <nav v-if="isLoggedIn" class="navbar navbar-expand-lg navbar-light bg-light all" id="navbar">
        <a class="navbar-brand" href="/"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#"><h1 style="color:#ecf0f1;">Kanban</h1><span class="sr-only">(current)</span></a>
            </li>
            </ul>
            <div class="all" id="logout-div">
            <button @click="logout" class="logout-button" id="logout-button">Logout</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['isLoggedIn'],
    methods: {
        logout() {
            this.$emit('logout')
        }
    }
}
</script>
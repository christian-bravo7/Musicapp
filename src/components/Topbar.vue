<template>
    <nav class="topbar">
        <div class="topbar__left">
            <span class="topbar__logo">
                <i class="material-icons">library_music</i>Music<strong>app</strong>
            </span>
        </div>
        <div class="topbar__right">
            <router-link class="topbar__link" to="/">Search</router-link>
            <router-link class="topbar__link" to="/about">About</router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

.topbar {
    display: flex;
    justify-content: space-between;
    padding: rem(10);
    background-color: #5ac7a2;
    align-items: center;

    &__logo {
        display: flex;
        align-items: center;
    }

    &__right {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > a:nth-child(n + 2) {
            margin-left: rem(16);
        }
    }

    &__logo {
        color: white;
    }

    &__link {
        text-decoration: none;
        border-radius: rem(20);
        padding: rem(5) rem(15);
        border: rem(2) double #5ac7a2;
        min-width: rem(100);
        text-align: center;
        transition: 0.250ms;
        color: white;

        &:hover,
        &.router-link-active.router-link-exact-active {
            cursor: pointer;
            color: white;
            border-color: white;
        }
    }
}

</style>

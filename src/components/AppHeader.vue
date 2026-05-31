<template>
    <header class="app-header">
        <div class="left">
            <img src="/logo.svg" alt="logo" class="logo" />

            <div class="title">
                <h1 class="app-title">Polla Man Dashboard</h1>
                <p class="app-sub">Admin panel</p>
            </div>
        </div>


        <div class="right">

					<OverlayBadge  v-if="unread > 0":value="unread"severity="danger" size="small">
						<Button
								icon="pi pi-bell"
								text
								rounded
								severity="secondary"
								
								@click="onNotifications"
						>
								<Bell />
						</Button>
					</OverlayBadge>

            <Menu
                ref="menu"
                popup
                :model="menuItems"
            />

            <div	
                class="user"
                @click="showMenu($event)"
            >
                <Avatar
                    image="/avatar.png"
                    shape="circle"
                />

                <span class="user-name">
                    {{ user.name }}
                </span>

                <i class="pi pi-chevron-down"></i>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Bell } from '@lucide/vue';
import Button from 'primevue/button';
import OverlayBadge from 'primevue/overlaybadge';
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';
const apiUrl = import.meta.env.VITE_API_URL;
const unread = ref(3);

const user = ref({
    name: 'Admin'
});

const menu = ref();

const menuItems = [
    {
        label: 'Profile',
        icon: 'pi pi-user'
    },
    {
        label: 'Settings',
        icon: 'pi pi-cog'
    },
    {
        separator: true
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out'
    }
];

function showMenu(event: Event) {
    menu.value?.toggle(event);

		console.log(import.meta.env.MODE); // development | production
		console.log(import.meta.env.DEV);  // true en desarrollo
		console.log(import.meta.env.PROD); // true en producción
}

function onNotifications() {
    unread.value = 0;
}
</script>

<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: var(--p-surface-0);
    border-bottom: 1px solid var(--p-surface-200);
}

.left {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: 0.75rem;
}

.app-title {
    margin: 0;
    font-size: 1.1rem;
}

.app-sub {
    margin: 0;
    font-size: 0.75rem;
    color: var(--p-text-muted-color);
}

.center {
    flex: 1;
    display: flex;
    justify-content: center;
}

.search {
    width: 320px;
}

.right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.notifications {
    position: relative;
}

.notification-badge {
    position: absolute;
    top: -4px;
    right: -4px;
}

.user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.user-name {
    font-weight: 500;
}
</style>
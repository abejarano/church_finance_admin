<script setup lang="ts">
import { ref } from "vue";

import AppMenuItem from "./AppMenuItem.vue";
import { useAuth } from "@/shared/composables/useAuth.ts";
import { useI18n } from "vue-i18n";

const { logout } = useAuth();

const { t } = useI18n({ useScope: "global" });

export interface MenuItemDashboard {
  label: string;
  separator?: boolean;
  items: {
    label: string;
    icon: string;
    to: string;
    click?: () => void;
  }[];
}

const handleLogout = async () => {
  logout();
};

const menuOptions = ref<MenuItemDashboard[]>([
  {
    label: "HOME",
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/dashboard" }],
  },
  {
    label: t("administrativeManagement"),
    items: [
      {
        label: t("districts"),
        icon: "pi pi-map",
        to: "/administrative-management/districts",
      },
      {
        label: "Region",
        icon: "pi pi-map",
        to: "/administrative-management/region",
      },
      {
        label: t("churches"),
        icon: "pi pi-map",
        to: "/administrative-management/church",
      },
      {
        label: "Ministros",
        icon: "pi pi-user-plus",
        to: "/administrative-management/ministers",
      },
    ],
  },
  {
    label: "Gestión local",
    items: [
      {
        label: "Miembros",
        icon: "pi pi-user-plus",
        to: "/local-church/members",
      },
      {
        label: "Ingresos",
        icon: "pi pi-user-plus",
        to: "/local-church/incomes",
      },
      {
        label: "Compras",
        icon: "pi pi-user-plus",
        to: "/local-church/incomes",
      },
      {
        label: "Bienes",
        icon: "pi pi-user-plus",
        to: "/local-church/incomes",
      },
    ],
  },
  {
    label: "Seguridad del sistema",
    items: [
      {
        label: "usuarios",
        icon: "pi pi-user-plus",
        to: "/security-system/users",
      },
      {
        label: "Perfile de usuario",
        icon: "pi pi-lock-open",
        to: "/security-system/profiles",
      },
      {
        label: "Modulos del sistema",
        icon: "pi pi-bars",
        to: "/security-system/system-modules",
      },
    ],
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in menuOptions" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i" />
      <li v-if="item.separator" class="menu-separator mt-4"></li>
    </template>
    <li class="mt-4">
      <router-link to="/login" @click="handleLogout">
        <i class="pi pi-fw pi-sign-out layout-menuitem-icon"></i>
        <span class="layout-menuitem-text pl-2">Salir</span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>

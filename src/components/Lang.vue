<template>
  <div class="container-center">
    <p class="text-center">{{ t("languageSelector") }}</p>
    <div class="container-center pt-0">
      <SelectButton
        class="lang-selector"
        v-model="languageSelected"
        :options="languages"
        aria-labelledby="custom"
        optionLabel="name"
        dataKey="code"
        @click="changeLang"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SelectButton from "primevue/selectbutton";
import { useRouter } from "vue-router";

interface LangSelect {
  name: string;
  code: string;
}

const route = useRouter();
const languageSelected = ref<LangSelect>();
const languages = ref<LangSelect[]>([
  { name: "ES", code: "es" },
  { name: "PT", code: "pt" },
]);

const { t, locale } = useI18n({
  useScope: "global",
});

const changeLang = (event: any) => {
  if (languageSelected.value?.code) {
    setLang(languageSelected.value.code);
    return;
  }

  let l = localStorage.getItem("church@lang");

  if (l == "es") {
    l = "pt";
  } else {
    l = "es";
  }

  setLang(l);
};

function setLang(code: string) {
  locale.value = code;
  localStorage.setItem("church@lang", code);

  route.go(0);
}

onMounted(() => {
  const localeLocalStorage = localStorage.getItem("church@lang");
  if (!localeLocalStorage) {
    languageSelected.value = { name: "PT", code: "pt" };
    setLang("pt");
  } else {
    const langToSet = languages.value.find(
      (lang) => lang.code === localeLocalStorage,
    );
    languageSelected.value = langToSet;
  }
});
</script>
<style scoped>
p {
  font-size: 1rem;
  color: #a4a4a4;
}
</style>

<script setup lang="ts">
const HEAD_META = [
  {
    name: 'description',
    content: 'A simple website to use taskwarrior on the web',
  },
  // // Facebook
  // {
  //   name: 'og:url',
  //   content: 'https://me.kurtstories.com/',
  // },
  // {
  //   name: 'og:type',
  //   content: 'website',
  // },
  // {
  //   name: 'og:title',
  //   content: 'Kurt.me',
  // },
  // {
  //   name: 'og:description',
  //   content: 'Here is Kurt | Follow me on Github @kurt-liao',
  // },
  // {
  //   name: 'og:image',
  //   content:
  //     'https://raw.githubusercontent.com/kurt-liao/terminal.me/main/public/logo.svg',
  // },
  // // Twitter
  // {
  //   name: 'twitter:card',
  //   content: 'summary_large_image',
  // },
  // {
  //   name: 'twitter:domain',
  //   content: 'me.kurtstories.com',
  // },
  // {
  //   name: 'twitter:url',
  //   content: 'https://me.kurtstories.com/',
  // },
  // {
  //   name: 'twitter:title',
  //   content: 'Kurt.me',
  // },
  // {
  //   name: 'twitter:description',
  //   content: 'Here is Kurt | Follow me on Github @kurt-liao',
  // },
  // {
  //   name: 'twitter:image',
  //   content:
  //     'https://raw.githubusercontent.com/kurt-liao/terminal.me/main/public/logo.svg',
  // },
]

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Taskwarrior Webclient',
  meta: HEAD_META,
  script: [
  //   {
  //     innerHTML: `
  //       (function (w, d, s, l, i) {
  //       w[l] = w[l] || [];
  //       w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  //       var f = d.getElementsByTagName(s)[0],
  //       j = d.createElement(s),
  //       dl = l != "dataLayer" ? "&l=" + l : "";
  //       j.defer = true;
  //       j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  //       f.parentNode.insertBefore(j, f);
  //       })(window, document, "script", "dataLayer", "GOOGLE_TARGET_ID")
  //     `
  // }
]
})
</script>

<template>
  <ThemeProvider>
    <ShellProvider>
      <NuxtLayout> <NuxtPage /></NuxtLayout>
    </ShellProvider>
  </ThemeProvider>
</template>

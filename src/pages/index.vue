<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-6xl">Index</h1>
    <hr>
    <h2>IP address</h2>
    <p>Information from <a href="https://httpbin.org/ip">https://httpbin.org/ip</a>:</p>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow text-sm w-full">{{ ip_status }}</pre>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow text-sm w-full">{{ ip_data }}</pre>
  </div>
</template>

<script setup>
/* vue */
import { ref } from 'vue';

/* refs */
const ip_data = ref();
const ip_status = ref();

cordova.plugin.http.get('https://httpbin.org/ip', {}, {}, res => {
  ip_status.value = res.status;
  ip_data.value = res.data;
}, res => {
  ip_status.value = res.status;
  ip_data.value = res.error;
});
</script>

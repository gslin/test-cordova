<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-6xl">Index</h1>
    <hr>
    <h2>IP address</h2>
    <p>Information from <a href="https://httpbin.org/ip">https://httpbin.org/ip</a>:</p>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow w-full" id="ip_status"></pre>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow w-full" id="ip_data"></pre>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const ip_data = document.querySelector('#ip_data');
  const ip_status = document.querySelector('#ip_status');
  cordova.plugin.http.get('https://httpbin.org/ip', {}, {}, res => {
    ip_status.innerText = res.status;
    ip_data.innerText = res.data;
  }, res => {
    ip_status.innerText = res.status;
    ip_data.innerText = res.error;
  });
});
</script>

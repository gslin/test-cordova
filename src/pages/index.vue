<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-6xl">Index</h1>
    <hr>
    <h2 class="text-4xl">Database</h2>
    <p>SQLite row count:</p>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow text-sm w-full">{{ db_row_cnt }}</pre>
    <hr>
    <h2 class="text-4xl">IP address</h2>
    <p>Information from <a href="https://httpbin.org/ip">https://httpbin.org/ip</a>:</p>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow text-sm w-full">{{ ip_status }}</pre>
    <pre class="bg-slate-100 border font-mono p-4 rounded shadow text-sm w-full">{{ ip_data }}</pre>
  </div>
</template>

<script setup>
/* vue */
import { ref } from 'vue';

/* refs */
const db_row_cnt = ref();
const ip_data = ref();
const ip_status = ref();

/* sqlite */
const db = window.sqlitePlugin.openDatabase({
  name: 'hello.db',
  location: 'default',
  androidDatabaseProvider: 'system',
});

db.transaction(tx => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id SERIAL, col1 TEXT, col2 INTEGER);');
  tx.executeSql('INSERT INTO foo (col1, col2) VALUES (?, ?);', ['test', Math.floor(Date.now() / 1000)]);
});

db.transaction(tx => {
  tx.executeSql('SELECT COUNT(*) AS cnt FROM foo;', [], (tx, rs) => {
    db_row_cnt.value = rs.rows.item(0).cnt;
  });
});

cordova.plugin.http.get('https://httpbin.org/ip', {}, {}, res => {
  ip_status.value = res.status;
  ip_data.value = res.data;
}, res => {
  ip_status.value = res.status;
  ip_data.value = res.error;
});
</script>

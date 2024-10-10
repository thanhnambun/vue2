<template>
  <div>
    <h1>Vuetify</h1>
    <v-btn color="red">Click</v-btn>
    <v-text-field type="email" label="Email"></v-text-field>
    <v-select label="Phòng ban" :items="['phòng kế toán', 'phòng bảo vệ']"></v-select>
    <svg-icon type="mdi" :path="mdiAccountArrowDown"></svg-icon>

    <v-carousel next-icon="mdi-arrow-right" prev-icon="mdi-arrow-left" hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col :cols="2">
          cột 1
        </v-col>
        <v-col>
          cột 2
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          cột 3
        </v-col>
        <v-col>
          cột 4
        </v-col>
        <v-col>
          cột 5
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="2">
          cột 6
        </v-col>
        <v-col>
          cột 7
        </v-col>
      </v-row>
    </v-container>
    <Bt1/>
    <Bt2/>
    <Bt3/>
    <Bt4/>
    <Bt5/>
    <Bt6/>
    <Bt7/>
    <Bt8/>
    <Bt9></Bt9>
    <Bt10/>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import Bt3 from './components/Bt3.vue';
import Bt1 from './components/Bt1.vue';

import { mdiAccountArrowDown } from '@mdi/js'
import { ref } from 'vue'
import Bt2 from './components/Bt2.vue';
import Bt4 from './components/Bt4.vue';
import Bt5 from './components/Bt5.vue';
import Bt6 from './components/Bt6.vue';
import Bt7 from './components/Bt7.vue';
import Bt8 from './components/Bt8.vue';
import Bt9 from './components/Bt9.vue';
import Bt10 from './components/Bt10.vue';

const items = ref([
  { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
])

</script>

<style scoped></style>

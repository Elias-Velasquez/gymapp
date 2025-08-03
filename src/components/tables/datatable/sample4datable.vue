<template>
  <span class="me-2">search field:</span>
  <select v-model="searchField">
    <option>player</option>
    <option>team</option>
  </select>

  <br />

  <span class="me-2">search value: </span>
  <input type="text" v-model="searchValue">

  <EasyDataTable :headers="headers" :items="items" :search-field="searchField" :search-value="searchValue" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

const searchField = ref("player");
const searchValue = ref("Stephen Curry");

const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team" },
  { text: "NUMBER", value: "number" },
  { text: "POSITION", value: "position" },
  { text: "HEIGHT", value: "height" },
  { text: "WEIGHT (lbs)", value: "weight", sortable: true },
  { text: "LAST ATTENDED", value: "lastAttended" },
  { text: "COUNTRY", value: "country" },
];

const items: Item[] = [
  { player: "Stephen Curry", team: "Golden State Warriors", number: 30, position: "PG", height: "6'3\"", weight: 185, lastAttended: "Davidson College", country: "USA" },
  { player: "LeBron James", team: "Los Angeles Lakers", number: 23, position: "SF", height: "6'9\"", weight: 250, lastAttended: "High School", country: "USA" },
  { player: "Kevin Durant", team: "Phoenix Suns", number: 7, position: "SF", height: "6'10\"", weight: 240, lastAttended: "Texas", country: "USA" },
  { player: "Giannis Antetokounmpo", team: "Milwaukee Bucks", number: 34, position: "PF", height: "7'0\"", weight: 242, lastAttended: "High School", country: "Greece" },
  { player: "Kawhi Leonard", team: "Los Angeles Clippers", number: 2, position: "SF", height: "6'7\"", weight: 225, lastAttended: "San Diego State", country: "USA" },
  { player: "Jayson Tatum", team: "Boston Celtics", number: 0, position: "SF", height: "6'8\"", weight: 210, lastAttended: "Duke", country: "USA" },
  { player: "James Harden", team: "Philadelphia 76ers", number: 1, position: "SG", height: "6'5\"", weight: 220, lastAttended: "Arizona State", country: "USA" },
  { player: "Joel Embiid", team: "Philadelphia 76ers", number: 21, position: "C", height: "7'0\"", weight: 280, lastAttended: "Kansas", country: "Cameroon" },
  { player: "Damian Lillard", team: "Portland Trail Blazers", number: 0, position: "PG", height: "6'2\"", weight: 195, lastAttended: "Weber State", country: "USA" },
  { player: "Luka Dončić", team: "Dallas Mavericks", number: 77, position: "PG", height: "6'7\"", weight: 230, lastAttended: "Real Madrid", country: "Slovenia" },
  { player: "Anthony Davis", team: "Los Angeles Lakers", number: 3, position: "PF", height: "6'10\"", weight: 253, lastAttended: "Kentucky", country: "USA" },
  { player: "Kyrie Irving", team: "Dallas Mavericks", number: 2, position: "PG", height: "6'2\"", weight: 195, lastAttended: "Duke", country: "Australia" },
  { player: "Jimmy Butler", team: "Miami Heat", number: 22, position: "SF", height: "6'7\"", weight: 230, lastAttended: "Marquette", country: "USA" },
  { player: "Devin Booker", team: "Phoenix Suns", number: 1, position: "SG", height: "6'5\"", weight: 206, lastAttended: "Kentucky", country: "USA" },
  { player: "Trae Young", team: "Atlanta Hawks", number: 11, position: "PG", height: "6'1\"", weight: 164, lastAttended: "Oklahoma", country: "USA" },
  { player: "Zion Williamson", team: "New Orleans Pelicans", number: 1, position: "PF", height: "6'7\"", weight: 284, lastAttended: "Duke", country: "USA" },
  { player: "Russell Westbrook", team: "Los Angeles Clippers", number: 0, position: "PG", height: "6'3\"", weight: 200, lastAttended: "UCLA", country: "USA" },
];
</script>
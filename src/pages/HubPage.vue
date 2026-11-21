<!-- The hub, per decision #4: Variant A "The Feed". Single-column
     chronological feed, rainbow topic-filter buttons, blinking NEW badge. -->
<script setup lang="ts">
import type { Topic } from '../content/topics'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'
import BrandMark from '../components/BrandMark.vue'
import BadgeWall from '../components/hub/BadgeWall.vue'
import MidiPlayer from '../components/hub/MidiPlayer.vue'
import NewsTicker from '../components/hub/NewsTicker.vue'
import SetCard from '../components/hub/SetCard.vue'
import TopicFilter from '../components/hub/TopicFilter.vue'
import { useMapleCursor } from '../composables/useMapleCursor'
import { ALL_SETS } from '../content/sets'
import { retroGif } from '../lib/retro-gif'

const activeTopic = ref<Topic | null>(null)

const visibleSets = computed(() =>
  activeTopic.value
    ? ALL_SETS.filter(set => set.topic === activeTopic.value)
    : ALL_SETS,
)

const newestSlug = ALL_SETS[0]?.slug

// Emitted at build time by the rss-feed plugin, so it is not a router route.
const feedUrl = `${import.meta.env.BASE_URL}feed.xml`

const lastUpdated = ALL_SETS[0]?.date
const thisYear = new Date().getFullYear()

useMapleCursor()
</script>

<template>
  <div class="feed">
    <header class="banner">
      <div class="banner-row">
        <img :src="retroGif('flag-waving')" alt="" class="flag" width="132" height="95">
        <BrandMark as="h1" class="banner-title" :leaves="false" />
        <img :src="retroGif('flag-waving')" alt="" class="flag mirrored" width="132" height="95">
      </div>
      <p class="tagline">
        your weekly dose of maple-flavoured knowledge
      </p>
      <MidiPlayer class="banner-player" />
    </header>

    <TopicFilter v-model="activeTopic" />
    <NewsTicker />

    <main>
      <SetCard
        v-for="set in visibleSets"
        :key="set.slug"
        :set="set"
        :is-newest="set.slug === newestSlug"
      />
      <p v-if="visibleSets.length === 0" class="empty">
        no facts here yet, sorry bud<br>
        <img :src="retroGif('beaver')" alt="A cartoon beaver" width="103" height="108">
      </p>
    </main>

    <footer class="feed-footer">
      <img :src="retroGif('moose-flag')" alt="A cartoon moose marching with a Canadian flag" class="moose" width="269" height="350">
      <p class="construction">
        <img :src="retroGif('under-construction')" alt="" width="96" height="66">
        <span>this site is <em>always</em> under construction!!</span>
      </p>
      <p>
        <a class="rss-link" :href="feedUrl">
          <Icon icon="lucide:rss" class="icon" /> subscribe by RSS
        </a>
      </p>
      <BadgeWall />
      <p v-if="lastUpdated" class="small-print">
        last updated: {{ lastUpdated }} &nbsp;|&nbsp; © 1996–{{ thisYear }}
      </p>
      <p>
        <a class="to-top" href="#">
          <img :src="retroGif('maple-leaf-spin')" alt="" width="35" height="35"> back to top
        </a>
      </p>
      <p>~*~ made with zero design skill (on purpose) ~*~</p>
    </footer>
  </div>
</template>

<style scoped>
.feed {
  max-width: var(--layout-hub-width);
  margin: 0 auto;
  padding: var(--space-lg) var(--space-lg) var(--space-5xl);
  background: var(--surface-feed);
  min-height: 100vh;
}

.banner {
  text-align: center;
  border: var(--border-banner);
  background: var(--surface-card);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.banner-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.banner-title {
  font-size: var(--text-3xl);
  /* Long name, small phone: let it wrap rather than push the flags off. */
  white-space: normal;
}

.flag {
  width: clamp(3rem, 14vw, 132px);
  height: auto;
  flex-shrink: 0;
}

.mirrored {
  transform: scaleX(-1);
}

.banner-player {
  margin-top: var(--space-md);
}

.tagline {
  color: var(--ink-shout);
  font-weight: bold;
  margin: var(--space-sm) 0 0;
}

.empty {
  text-align: center;
  font-size: var(--text-lg);
}

.feed-footer {
  text-align: center;
  color: var(--ink-shout);
  font-weight: bold;
  margin-top: var(--space-3xl);
}

.rss-link,
.to-top {
  color: inherit;
}

.to-top img {
  vertical-align: middle;
}

.moose {
  display: block;
  width: min(60%, 180px);
  height: auto;
  margin: 0 auto var(--space-lg);
}

.construction {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.small-print {
  color: var(--ink-muted);
  font-size: var(--text-sm);
  font-weight: normal;
}
</style>

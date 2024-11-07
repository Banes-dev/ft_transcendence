<!-- src/components/LoopVideo.vue -->
<template>
  <div class="absolute inset-0 -z-10 w-full h-full overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="object-cover w-full h-full"
    >
      <source src="@/assets/fond_video.mp4" type="video/mp4" />
      <!-- Remarque : Assurez-vous que la vidéo est dans le dossier `src/assets/videos` -->
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
  </div>
</template>

<script setup>
// Pas de script nécessaire ici
</script>

<style scoped>
/* Style optionnel pour ajuster le fond */
</style>

<template>
  <div class="relative">
    <!-- Vidéo en fond transparent, en boucle -->
    <video 
      autoplay 
      loop 
      muted 
      playsinline 
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="../assets/feu_artifice_low.mp4" type="video/mp4">
      <!-- Message de fallback si le format n'est pas supporté -->
      Ton navigateur ne supporte pas les vidéos en HTML5.
    </video>
    <!-- Contenu de la page, comme du texte ou d'autres éléments -->
    <div class="relative z-10 text-white text-center p-8">
      <h1 class="text-4xl font-bold">Bienvenue à notre célébration!</h1>
      <p class="mt-4 text-lg">Profitez du spectacle de feu d'artifice en arrière-plan.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoopVideo'
}
</script>

<style scoped>
/* Pour contrôler le style de la vidéo si nécessaire */
</style>

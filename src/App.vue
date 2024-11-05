<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
	<div class="w-screen h-screen flex flex-col">
		<header class="w-full">
			<!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
		</header>

		<main class="flex-1 w-full">
			<div class="bg-custom-bg bg-cover bg-center h-full flex items-center justify-center">
				<HelloWorld msg="Let's go" />
			</div>
			<Footer/>
		</main>
	</div>
</template>

<style>
body {
	overflow-x: hidden; /* Désactive seulement le défilement horizontal */
}
</style>

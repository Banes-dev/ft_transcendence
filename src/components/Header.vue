<template>
	<header class="bg-gray-800 text-gray-300 py-6 mt-auto max-w-6xl mx-auto px-36 rounded-b-xl">
		<div class="absolute justify-center mx-24 top-2">
			<h2>↓ Francais</h2>
			<i class="fi fi-fr text-2xl"></i>
		</div>
	</header>
	<div class="relative flex justify-center">
		<img
			class="h-14 w-14 rounded-xl border-2 border-red-600 absolute -top-10"
			src="../assets/img/default_avatar.png"
			alt="Avatar par défaut"
		/>
	</div>
</template>

<script>
	export default {
		name: "Header",
	};
</script>
  
<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
	@import url("https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css");
</style>
  
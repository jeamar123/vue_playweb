<template>
	<div class="header-container flex">
		<div class="menu-wrapper flex--4"></div>
		<div x-data="{ open: false }" class="profile-section-wrapper wpx--100 pos--rel">
			<div x-on:click="open = true" class="user-icon text--right">
				<div class="user-letter">JL</div>
			</div>
			
			<div x-show="open" x-on:click.away="open = false" class="user-setting-drop">
				<div class="item-drop" x-on:click="open = false">Logout</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import Header from './function.vue'
	export default Header
</script>
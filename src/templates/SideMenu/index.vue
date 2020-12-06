<template>
	<div class="sidemenu-container">
		<router-link tag="div" class="sidemenu-item" :to="{ name: 'TypingContest' }">
			Typing Contest
		</router-link>
		<router-link tag="div" class="sidemenu-item" :to="{ name: 'TicTacToe' }">
			Tic Tac Toe
		</router-link>
		<router-link tag="div" class="sidemenu-item" :to="{ name: 'RockPaperScissors' }">
			Rock Paper Scissors
		</router-link>
		<router-link tag="div" class="sidemenu-item" :to="{ name: 'CardGuessingGame' }">
			Card Guessing Game
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import SideMenu from './function.vue'
	export default SideMenu
</script>
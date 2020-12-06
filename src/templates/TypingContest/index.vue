<template>
	<div class="typing-contest-container">
		<div class="middle-container">
			<div class="random-words-wrapper">
				<div 
					v-show="(index + 1) <= 10"
					v-for="(list, index) in typeWordsArr" 
					:key="list.index" 
					class="word-text font--primary-medium font--bold"
					:class="{
						'active' : typingCtr == index,
						'good' : wordsScore[index] == true,
						'bad' : wordsScore[index] == false,
					}"
				>
					{{ list }}
				</div>
			</div>

			<div class="text-input-wrapper">
				<input 
					type="text" 
					class="hpt--full wpt--full text--full font--primary-medium font--bold border--rad-18"
					v-on:keyup="onTypeFunc"
					v-model="typeInputValue"
					autofocus
				>
			</div>
		</div>
		<div class="right-container">
			<div class="card-div border--rad-8 padding--10 text--center">
				<div class="timer-wrapper flex">
					<div class="minute flex--3 text--40 font--primary-medium">01</div>
					<div class="separator flex--1 text--40 font--primary-medium">:</div>
					<div class="second flex--3 text--40 font--primary-medium">00</div>
				</div>

				<div class="btn-options-wrapper">
					<button class="btn btn--success wpt--full margin--top-10">Start</button>
					<button class="btn btn--danger wpt--full margin--top-10">Stop</button>
					<button class="btn btn--warning wpt--full margin--top-10">Pause</button>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import TypingContest from './function.vue'
	export default TypingContest
</script>
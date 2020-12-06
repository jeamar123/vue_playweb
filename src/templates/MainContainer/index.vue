<template>
	<div class="main-container">
		<Header />
		
		<div class="main-content-container">
			<SideMenu />
			<div class="dynamic-content">
				<router-view></router-view>
			</div>
			<!-- <div class="blank-space"></div> -->
		</div>
	</div>
  
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import MainContainer from './function.vue'
	export default MainContainer
</script>
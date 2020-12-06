<script>
	// import axios from 'axios'

	import { Header } from '../Header'
	import { SideMenu } from '../SideMenu'

	var MainContainer = {
		components:{
			Header,
			SideMenu
		},
		data() {
			return {
				showLoader : false,
			}
		},
		created() {
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},1000);
      },
    }
	}

	export default MainContainer
</script>
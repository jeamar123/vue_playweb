<script>
	// import axios from 'axios'
	import randomWords from 'random-words'

	var TypingContest = {
		data() {
			return {
				showLoader : false,
				typeWordsArr	:	randomWords(40),
				wordsScore	:	Array(40),

				nextTypeWordsArr	:	randomWords(40),
				nextWordsScore	:	Array(40),

				typingCtr	:	0,
				typeInputValue	:	'',
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
			typeSubmit(){
				this.typeInputValue = this.typeInputValue.replace(' ', '');
				if(this.typeInputValue != ''){
					this.wordsScore[this.typingCtr] = this.typeInputValue === this.typeWordsArr[this.typingCtr] ? true : false;
					this.typingCtr += 1;
				}
				this.typeInputValue = '';

				if( this.typingCtr == 15 ){
					this.typingCtr = 0;
					this.typeWordsArr	=	randomWords(15);
					this.wordsScore	=	Array(15);
				}
			},
			onTypeFunc(event){
				if (event.keyCode === 32 || event.key === ' '){
					this.typeSubmit();
				}
			}
    }
	}

	export default TypingContest
</script>
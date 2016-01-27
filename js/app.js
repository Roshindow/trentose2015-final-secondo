var score=0;

var FlirtrModel = {  
  
   /* It sets the phrase to analyse */
   analyse : function (phrase){
	   FlirtrModel.getScore(phrase);
   },
  
   /* Returns the flirting score (number) of the phrase.
    * It is computed by looking for flirting patterns, 
    * adding up the individual scores of the matching
    * patterns (unless the pattern neutraliser is found to 
    * the right of the matching word)
    */
   getScore : function (str) {
	   var str2="";
	   var str3="";
	   var s=0;
	   for (var i = 0; i < patterns.length; i++) {
			var n = str.search(patterns[i].word);
			if(n>=0){
				str2 = str.substr(n+(patterns[i].word.length),str.length);
				var m = str2.search(patterns[i].neutraliser);
					if(m<0){
						s+=patterns[i].score;
					}
				var z = str.search(patterns[i].word.supporter);
				if(z<0){
						s+=1;
					}
			}
	   }
	   score = s;
   }
         
};

function esegui(){
	x = document.getElementById("phrase").value;
	FlirtrModel.analyse(x);
	$(".answer").empty();
	$(".answer").append("Score: ");
	//document.getElementById("answer").innerHTM = "Score =";
	$(".answer").append(score);
}

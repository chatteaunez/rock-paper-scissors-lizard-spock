var moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
			var outputs = [
				'draw',
				'paper covers rock',
				'rock crushes scissors',
				'rock smashes lizard',
				'spock vaporizes rock',
				'scissors cuts paper',
				'lizard eats paper',
				'paper disproves spock',
				'scissors decapitates lizard',
				'spock breaks scissors',
				'lizard poisons spock'
			];
			var corresp = [
				[0,1,-2,-3,4],
				[-1,0,5,6,-7],
				[2,-5,0,-8,9],
				[3,-6,8,0,-10],
				[-4,7,-9,10,0]
			];

			var x,y;

			function play(e){
				document.body.setAttribute('playing','true');
				var f = e.getAttribute('data');
				document.getElementById('context').innerHTML = f;
				y = moves.indexOf(f);
				x = Math.floor(Math.random() * 5);
				document.getElementById('player').setAttribute('data', moves[y]);
				setTimeout(expressResults,850);
			}
			function expressResults(){
				document.getElementById('player').setAttribute('data', moves[y]);
				document.getElementById('computer').setAttribute('data', moves[x]);
				document.getElementById('context').innerHTML = outputs[Math.abs(corresp[x][y])];

				if(corresp[x][y]<0){document.body.setAttribute('data','lose');}
				else if(corresp[x][y]>0){document.body.setAttribute('data','win');}
				else{document.body.setAttribute('data','draw');}

				document.body.setAttribute('playing','false');
			}

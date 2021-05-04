$(document).ready(function() {

	

	const cats = [
		{
				name: 'Tigro',
				age: 1.5,
				color: '#964100',
				gender: 'male'
		},
		{
				name: 'Etoile',
				age: 1,
				color: '#494146',
				gender: 'female'
		},
		{
				name: 'Pallino',
				age: 6,
				color: '#CAA446',
				gender: 'male'
		},
		{
				name: 'Rambo',
				age: 0.8,
				color: '#1E110A',
				gender: 'male'
		},
		{
				name: 'Rey',
				age: 2.5,
				color: '#6E4B35',
				gender: 'female'
		},
	];

	/* MILESTONE 1 */

	
	cats.forEach((cat) => {
		$('#mailes-1 ul').append(listGenerator(cat.color, cat.name));
	})

	/* MILESTONE 2 */
	
	const pink = '#ff00e6';
	const blue = '#0084ff';
	const newCats = cats.map((cat) => {
		
		let color = (cat.gender === 'female') ? pink : blue;
		let opacity = cat.age / 10;
		return {
			...cat,
			ribbon:{
				color,
				opacity
			}
		}

	}); 



	
	const femaleCats = newCats.filter((cat) => cat.gender === 'female');
	const maleCats = newCats.filter((cat) => cat.gender === 'male');

	// ciclo gli arr filtrati per generare l'output
	femaleCats.forEach((cat) => {
		$('#mailes-2-female ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
	})

	maleCats.forEach((cat) => {
		$('#mailes-2-male ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
	})

	/* MILESTONE 3 */
	
	const orderedCats = [...femaleCats, ...maleCats];
	
	
	const catsTarget = orderedCats.map((cat) => {
		
		const {name, color, ribbon} = cat;

		
		$('#mailes-3 ul').append(listGenerator(color, name, ribbon.color, ribbon.opacity));

		
		
		return {name, color, ribbon};
	});

	console.log(catsTarget);


});



/* FUNCTIONS */

function listGenerator(catColor, name, ...ribbon){

	let ribbonTag = "";
	if(ribbon.length > 0){
		ribbonTag = `<i class="fas fa-ribbon"
													style="color:${ribbon[0]};
																opacity:${ribbon[1]}"></i> `
	}
	let html = `
		<li>
          <i class="fas fa-cat" style="color:${catColor}"></i>
					${ribbonTag}
          <span>${name}</span>
    </li>
	`;
	return html;

}

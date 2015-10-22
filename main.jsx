require(['bundle!./modules/a.js'], function(aBundle, bBundle) {
	console.log(aBundle((f) => { f.hello() } ))
	console.log(bBundle((f) => { f.hello() } ))
})

require(['bundle!./modules/b.js'], function(aBundle, bBundle) {
	console.log(aBundle((f) => { f.hello() } ))
	console.log(bBundle((f) => { f.hello() } ))
})

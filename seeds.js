var mogoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Buchta",
		image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=649&q=80",
		description: "Sudai myzalai"
	},
	{
		name: "Debilas",
		image: "https://images.unsplash.com/photo-1502113040754-9e3e85618a00?auto=format&fit=crop&w=1050&q=80",
		description: "Sudai myzalai"
	},
	{
		name: "Bezdziones",
		image: "https://images.unsplash.com/photo-1500367215255-0e0b25b396af?auto=format&fit=crop&w=1050&q=80",
		description: "Sudai myzalai"
	}
]

function seedDB(){
	// REMOVE all
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds!");
		data.forEach(function(seed){
		Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				} else {
					console.log("added a campground");
					// COMMENTS
					Comment.create(
						{
							text: "Well said in the description!",
							author: "Homer"
						}, function(err, comment){
							if(err){
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("comment created!")
							}
						}
					)
				}
			})
		})
	})

}

module.exports = seedDB;

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(
      username: "Teja",
      password: "bookshares"
)

Book.create!(
      title: "1984",
      author: "George Orwell",
      description: "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of 'negative utopia' -a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.",
      owner_id: 1,
      image_url: "http://farm1.static.flickr.com/126/4545312810_6841a6a870_m.jpg"
    )
Book.create!(
      title: "Wild",
      author: "Cheryl Strayed",
      description: "Pacific crest trail",
      owner_id: 1,
      image_url: "http://www.literarytraveler.net/wp-content/uploads/2012/07/Wild.jpg"
    )
Book.create(
      title: "The Brothers Karamazov",
      author: "George Orwell",
      description: "Dystopian fiction",
      owner_id: 2,
      image_url: "https://magrudy-assets.storage.googleapis.com/__sized__/9781406790092-thumbnail-300x400.jpg"
)
Book.create!(
      title: "Emma",
      author: "Jane Austen",
      owner_id: 2,
      description: "Beautiful, clever, rich - and single - Emma Woodhouse is perfectly content with her life and sees no need for either love or marriage. Nothing, however, delights her more than interfering in the romantic lives of others. But when she ignores the warnings of her good friend Mr. Knightley and attempts to arrange a suitable match for her protegee Harriet Smith, her carefully laid plans soon unravel and have consequences that she never expected. With its imperfect but charming heroine and its witty and subtle exploration of relationships, Emma is often seen as Jane Austen's most flawless work."

)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


product1 = Product.create({name: "apple cider vinegar"})
product2 = Product.create({name: "baking soda"})
purpose1 = Purpose.create({body: "scalp conditioner", product_id: 1})
purpose2 = Purpose.create({body: "cleaning windows", product_id: 1})
purpose1 = Purpose.create({body: "shampoo", product_id: 2})
purpose2 = Purpose.create({body: "insect sting neutralizer", product_id: 2})
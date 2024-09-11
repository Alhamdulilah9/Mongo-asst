db.createCollection("contactlist")

//Insert Documents

db.contactlist.insertMany([
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40 },
  { lastName: "Alex", firstName: "Brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 }
])

// Display All contacts

db.contactlist.find().pretty()


//Display Information About One Person Using ID

db.contactlist.find().pretty()

// Display Contacts with Age >18

db.contactlist.find({ age: { $gt: 18 } }).pretty()

// db.contactlist.find({ age: { $gt: 18 }, firstName: /ah/ }).pretty()

db.contactlist.find({ age: { $gt: 18 }, firstName: /ah/ }).pretty()


//Change First Name from "Kefi Seif" to "Kefi Anis"

db.contactlist.updateOne(
  { lastName: "Kefi", firstName: "Seif" },
  { $set: { firstName: "Anis" } }
)

//Delete Contacts Aged Under 5

db.contactlist.deleteMany({ age: { $lt: 5 } })


//Display All Contacts After Deletion

db.contactlist.find().pretty()


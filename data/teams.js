export { 
	find
}
const teams = [
  {name: 'Bears', championships: 9, _id: 125223},
  {name: 'Blackhawks', championships: 6, _id: 139608},
  {name: 'Bulls', championships: 6, _id: 127904},
  {name: 'Cubs', championships: 3, _id: 139608},
]
const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions)
    // If the object is empty, return all the teams
    if (conditionKeys.length === 0) return callback(null, teams)
    // make sure that all the properties on the conditions exists on the object
    if (!conditionKeys.every((i) => Object.keys(teams[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
			// Finally actually find what we're looking for
      return callback(null, teams.filter((team) =>
        conditionKeys.every((propKey) => team[propKey] === conditions[propKey])
      ))
    }
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}
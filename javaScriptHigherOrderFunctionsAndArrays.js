const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forLoop
//for (let i = 0; i < companies.length; i++) {
//	console.log(companies[i]);
//}

// forEach

/*companies.forEach((company) => {
	console.log(company.name);
});*/

// cleaner version

// companies.forEach((company) => console.log(company.name));

// filter

//forLoop example

//let canDrink =[];
//for (let i =0; i < ages.length; i++){
//	if (ages[i] >= 21){
//		canDrink.push(ages[i]);
//	}
//}
//console.log(canDrink);

// filter alternative

//const canDrink = ages.filter(function(age){
//	if (age >= 21){
//		return true;
//	}
//});


//cleaner version
//const canDrink2 = ages.filter(age => age >= 21);
//console.log(canDrink);

const retailCompanies = companies.filter(companies => companies.category === 'Retail');
console.log(retailCompanies);
// map
// sort
// reduce
let eightiesCompany = companies.reduce((accumulator, company) =>{
	if (company.start - company.end <= 10){
		eightiesCompanyTotal += 1;
	}, {
			eightiesCompanyTotal: 0,
	})
let eightiesArr = JSON.stringify(retailCompanies);

console.log(retailCompanies);

let itemList = [];

function initArray() {
	document.getElementsByName("itemRow").forEach( (a, i) => {
		itemList[i] = {};
		itemList[i].row = a;
		itemList[i].name = document.getElementsByName("itemName")[i];
		itemList[i].price = document.getElementsByName("itemPrice")[i];
		itemList[i].number = document.getElementsByName("itemNumber")[i];
		itemList[i].add = document.getElementsByName("itemAdd")[i];
		itemList[i].minus = document.getElementsByName("itemMinus")[i];
		itemList[i].total = document.getElementsByName("itemTotal")[i];
		itemList[i].delete = document.getElementsByName("itemDelete")[i];
	})
}

// console.log(itemList);


function removeYuan(str) {
	let newStr = str.slice(0, str.length - 1)
	return parseInt(newStr) ;
}

function itemCalc (index) {
	let price = removeYuan(itemList[0].price.innerText);
	let total = price * itemList[index].number.value;
	itemList[index].total.innerText = `${total}元`;
}

function totalCalc () {
	let items = 0;
	itemList.forEach( (a) => {
		let price = removeYuan(a.total.innerText);
		items += price;
	});
	document.querySelector(`#priceItems`).innerText = `${items}元`;
	let delivery = removeYuan(document.querySelector('#priceDelivery').innerText);
	let discount = removeYuan(document.querySelector('#priceDiscount').innerText);
	let grand = items + delivery + discount;
	document.querySelector(`#priceGrand`).innerText = `${grand}元`;
}


function itemInit() {
	itemList.forEach( (a, i) => {
		itemCalc(i);
		a.number.addEventListener('focusout', () => {
			itemCalc(i);
			totalCalc();
		});
		a.add.addEventListener('click', () => {
			a.number.value = ++a.number.value;
			itemCalc(i);
			totalCalc();
		});
		a.minus.addEventListener('click', () => {
			a.number.value = a.number.value != 0 ? --a.number.value : a.number.value
			itemCalc(i);
			totalCalc();
		});
		a.delete.addEventListener('click', () => {
			a.row.remove();
			itemList[i].total.innerText = "00";
			console.log(itemList);
			totalCalc();
		});



	});
};

$(document).ready( () => {
	initArray();
	itemInit();
	totalCalc();
});
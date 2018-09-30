$(function() {

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});




	const addInvoiceButton = document.querySelector('#add');
	const addNumber = document.getElementById('numberText').value;
	const addInvoiceDate = document.getElementById('invoiceDateText');
	const addSupplyDate = document.getElementById('supplyDateText');
	const addComment = document.getElementById('commentText');
	const reviewBlocks = document.querySelector('.main-invoice');
	const chekout = document.getElementById('error');

	addInvoiceButton.addEventListener('click', (event) => {
		
		event.preventDefault();
		addNewInvoices();
});

	$('#add').click(function () {
		$('.clear').val('');
	});

	function getDate() {
		const date = new Date();

		const dd = date.getDate();
		if (dd < 10) dd = '0' + dd;
		const mm = date.getMonth() + 1;
		const yy = date.getFullYear();
		return dd + '-' + mm + '-' + yy;
	}

	addSupplyDate.value = getDate()

	
	function addNewInvoices() {

		
	const number = numberText.value;
	const invoiceDate = invoiceDateText.value;
	const supplyDate = supplyDateText.value;
	const comment = commentText.value;


	

	if(number.length < 3) {
		addInvoiceButton.classList.remove('mfp-close');
		chekout.classList.remove('hidden');
		return false;
	} else {
		addInvoiceButton.classList.add('mfp-close');

		const newInvoces = document.createElement('div');
	newInvoces.className = 'new-invoices';
	reviewBlocks.appendChild(newInvoces);

	const newInvoce = document.createElement('div');
	newInvoce.className = 'new-invoice';
	newInvoces.appendChild(newInvoce);


	const newGridC = document.createElement('div');
	newGridC.className = 'container';
	newInvoce.appendChild(newGridC);

	const newGridR = document.createElement('div');
	newGridR.className = 'row';
	newGridC.appendChild(newGridR);

	const textNumber = document.createElement('div');
	textNumber.className = 'col-md-3 col-sm-3 col-xs-3';
	newGridR.appendChild(textNumber);
	textNumber.innerText = number;



	const textInvoiceDate = document.createElement('div');
	textInvoiceDate.className = 'col-md-3 col-sm-3 col-xs-3';
	newGridR.appendChild(textInvoiceDate);
	textInvoiceDate.innerText = invoiceDate;



	const textSupplyDate = document.createElement('div');
	textSupplyDate.className = 'col-md-3 col-sm-3 col-xs-3';
	newGridR.appendChild(textSupplyDate);
	textSupplyDate.innerText = getDate();

	const textComment = document.createElement('div');
	textComment.className = 'col-md-3 col-sm-3 col-xs-3';
	newGridR.appendChild(textComment);
	textComment.innerText = comment;

	chekout.classList.add('hidden');
	

		return true;

		
		};

	};

});


/**
creation de chaque temoignages
**/
function createTestimonialDiv(name, role, imageSrc, quote, years, delay, classSide) {
  var colDiv = document.createElement('div');
  colDiv.className = 'col-md-6 mb-5';
  colDiv.setAttribute('data-aos', classSide);
  colDiv.setAttribute('data-aos-delay', delay);

  var innerDiv1 = document.createElement('div');
  innerDiv1.className = 'd-flex ms-md-3';

  var quoteIconSpan = document.createElement('span');
  var quoteIcon = document.createElement('i');
  quoteIcon.className = 'fas fa-2x fa-quote-left';
  quoteIconSpan.appendChild(quoteIcon);

  var quoteTextSpan = document.createElement('span');
  quoteTextSpan.className = 'm-2';
  quoteTextSpan.textContent = quote;

  innerDiv1.appendChild(quoteIconSpan);
  innerDiv1.appendChild(quoteTextSpan);

  var innerDiv2 = document.createElement('div');
  innerDiv2.className = 'd-flex justify-content-end align-items-end';

  var innerDiv3 = document.createElement('div');
  innerDiv3.className = 'text-end me-2';

  var nameDiv = document.createElement('div');
  nameDiv.className = 'fw-bolder';
  nameDiv.textContent = name;

  var roleDiv = document.createElement('div');
  roleDiv.className = 'text-small';
  roleDiv.textContent = role;
  
  var yearsDiv = document.createElement('div');
  yearsDiv.className = 'text-small';
  yearsDiv.textContent = years;

  innerDiv3.appendChild(nameDiv);
  innerDiv3.appendChild(roleDiv);
  innerDiv3.appendChild(yearsDiv);

  var image = document.createElement('img');
  image.className = 'me-md-3 rounded';
  image.src = imageSrc;
  image.width = 96;
  image.height = 96;
  image.alt = name;

  innerDiv2.appendChild(innerDiv3);
  innerDiv2.appendChild(image);

  colDiv.appendChild(innerDiv1);
  colDiv.appendChild(innerDiv2);
  return colDiv;
}
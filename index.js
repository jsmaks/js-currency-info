const BASE_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const currencyRef = document.querySelector(".currency");

function createCurrencyList({ccy, base_ccy, buy, sale}) {
  const liRef = document.createElement('li');
  liRef.classList.add('currency__list');
  liRef.insertAdjacentHTML(
    'beforeEnd',
    `<ul class="currency__item">
    <li class="currency__info">${ccy}/${base_ccy}</li>
    <li class="currency__info">${buy}</li>
    <li class="currency__info">${sale}</li>
</ul>`,
  );
  return liRef;
}

const getCurrency = async () => {
  try {
    const data = await fetch(BASE_URL);
    const result = await data.json();
    return currencyRef.append(...result.map(createCurrencyList));
  } catch (error) {
    console.log(error);
  }
};
getCurrency();
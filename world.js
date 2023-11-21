window.addEventListener("load", function () {
  let countbtn = document.getElementById("lookup-country");
  let citybtn = document.getElementById("lookup-city");
  let result = document.querySelector("#result");
  let input = document.querySelector("#country");

  countbtn.addEventListener("click", function (event) {
    event.preventDefault();

    let input_value = input.value;
    let url = `world.php?country=${input_value}&lookup=countries`;
    console.log(url);

    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(function (data) {
        result.innerHTML = data;
      });
  });

  citybtn.addEventListener("click", function (event) {
    event.preventDefault();

    let input_value = input.value;
    let url = `world.php?country=${input_value}&lookup=cities`;

    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(function (data) {
        result.innerHTML = data;
      });
  });
});
countbtn.addEventListener('click', () => {
  const countryInput = document.getElementById('country');
  const country = countryInput.value;
  const lookupType = 'countries';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `world.php?country=${country}&lookup=${lookupType}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      result.innerHTML = xhr.responseText;
    } else {
      console.error('Error fetching data:', xhr.statusText);
    }
  };
  xhr.send();
});

citybtn.addEventListener('click', () => {
  const countryInput = document.getElementById('country');
  const country = countryInput.value;
  const lookupType = 'cities';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `world.php?country=${country}&lookup=${lookupType}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      result.innerHTML = xhr.responseText;
    } else {
      console.error('Error fetching data:', xhr.statusText);
    }
  };
  xhr.send();
});

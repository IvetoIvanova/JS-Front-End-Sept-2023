function attachEvents() {

    const baseURL = 'http://localhost:3030/jsonstore/phonebook/';

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phoneBook = document.getElementById('phonebook');

    document.getElementById('btnLoad').addEventListener('click', getAllPhones);
    document.getElementById('btnCreate').addEventListener('click', createContact);

    async function getAllPhones() {
        try {
            const phoneBookRes = await fetch(baseURL);
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);

            phoneBook.innerHTML = '';

            for (const { phone, person, _id } of phoneBookData) {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                button.id = _id;
                button.addEventListener('click', deletePhoneBookHandler);
                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(button);
                phoneBook.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }


    }

    function createContact() {

        const person = personInput.value;
        const phone = phoneInput.value;

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(
                {
                    person,
                    phone
                }
            )
        })

            .then((response) => response.json())
            .then(() => {
                getAllPhones();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    async function deletePhoneBookHandler() {
        const id = this.id;
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${baseURL}${id}`, httpHeaders)
            .then((response) => response.json())
            .then(getAllPhones)
            .catch((err) => {
                console.error(err);
            })

    }
}

attachEvents();
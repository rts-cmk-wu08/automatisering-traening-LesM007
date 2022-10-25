
let ContactForm = function() {

    let element = document.createElement('form')
    element.classList.add('contactForm')

    element.innerHTML = `
        <div class="contactForm__group">
            <label for="firstname">Fornavn:</label>
            <input type="text" name="firstname" id="firstname" required minlength=2 />
        </div>
        <div class="contactForm__group">
            <label for="lastname">Efternavn:</label>
            <input type="text" name="lastname" id="lastname" required minlength=3 />
        </div>
        <div class="contactForm__group">
            <label for="address">Adresse:</label>
            <input type="text" name="address" id="address" />
        </div>
        <div class="contactForm__group">
            <label for="postalcode">Post nr.:</label>
            <input type="text" name="postalcode" id="postalcode" required pattern="[0-9]{4}"/>
        </div>
        <div class="contactForm__group">
            <label for="city">By:</label>
            <input type="text" name="city" id="city" />
        </div>
        <div class="contactForm__group">
            <label for="email">E-mail:</label>
            <input title="Indtast en valid email adresse." type="email" name="email" id="email" required pattern="[A-Za-z0-9-._+]+@[A-Za-z0-9.-]+\[.]+[a-zA-Z]{2,}"/>
        </div>
        <div class="contactForm__group">
            <label for="phone">Telefon:</label>
            <input type="tel" name="phone" id="phone" required pattern="[0-9]{8}"/>
        </div>
        <div class="contactForm__group">
            <label for="message">Besked:</label>
            <textarea name="message" id="message" cols="30" rows="10" required minlength=10></textarea>
        </div>
        <button type="submit">Send!</button>
        `

        element.addEventListener("submit", function(e) {
            e.preventDefault()
            //console.log(e.target.firstname.value)

            if(e.target.firstname.value === "") {
                console.log
            }

            let data = {
                firstname: e.target.firstname.value,
                lastname: e.target.lastname.value,
                address: e.target.address.value,
                postalcode: e.target.postalcode.value,
                city: e.target.city.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
            }

            //console.log(data)
            fetch("http://localhost:4000/comments", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())  //.then(response => console.log(response))
            .then(data => console.log(data))
        })

    return element
    }

export default ContactForm
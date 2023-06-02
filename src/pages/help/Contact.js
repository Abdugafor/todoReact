export default function Contact() {
    return (
        <>
            <h1>Contacts</h1>

            <form action="/">
                <label for="name">Name</label>
                <input id="name"/>

                <label for="name">Email:</label>
                <input type="email" id="name"/>

                <label for="message">Message:</label>
                <textarea id="message" rows="4" />

                <button>Submit</button>
            </form>
        </>
    )
}
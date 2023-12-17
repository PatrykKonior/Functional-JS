function writeMessage(message, salutation, name) {
    return md`<p style="padding:3em;font-family:monospace">
    ${message}<br><br>${salutation},<br>${name}</p>`;
  }

function signMessageFrom(name) {
    return (message, salutation) => writeMessage(message, salutation, name);
  }

function signMessageWith(salutation) {
    return (message, name) => {
        writeMessage(message, salutation, name);
    }
}
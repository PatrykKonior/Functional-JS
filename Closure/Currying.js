function quote(name, year, text) {
    return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"
    ${text}"<br>- ${name} (${year})</p>`;
  }

let curriedQuote = name => year => text => quote(name, year, text)
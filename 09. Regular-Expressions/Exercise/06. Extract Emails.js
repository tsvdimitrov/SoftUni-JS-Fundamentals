function extractEmails(input) {

    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;
    let line;

    while ((line = input.shift()) !== "end") {
        let matches = line.match(pattern);
        for (const match of matches) {

            console.log(match);
        }
    }
}
extractEmails(['Please contact us at: support@github.com.', 'end']);
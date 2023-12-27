function processBrowserActions(browser, actions) {

    let { "Browser Name": browserName, "Open Tabs": openTabs, "Recently Closed": recentlyClosed, "Browser Logs": browserLogs } = browser;

    for (let action of actions) {
        let [command, site] = action.split(' ');

        switch (command) {
            case "Open":
                openTabs.push(site);
                browserLogs.push(action);
                break;
            case "Close":
                if (openTabs.includes(site)) {
                    openTabs = openTabs.filter(tab => tab !== site);
                    recentlyClosed.push(site);
                    browserLogs.push(action);
                }
                break;
            case "Clear":
                openTabs = [];
                recentlyClosed = [];
                browserLogs = [];
                break;
        }
    }

    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}

processBrowserActions({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

processBrowserActions({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
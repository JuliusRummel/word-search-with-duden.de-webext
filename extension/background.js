var URL_TEMPLATE = "https://www.duden.de/suchen/dudenonline/$WORD";

function onError(error) {
    console.log(error);
}

browser.contextMenus.create({
    id: "word-selection",
    title: browser.i18n.getMessage('contextMenuTitle'),
    contexts: ['selection']
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "word-selection") {
        var word = info.selectionText;
        var newIndex = tab.index + 1;

        browser.tabs.create({
                active: true,
                index: newIndex,
                url: URL_TEMPLATE.replace("$WORD", encodeURIComponent(word))
        }).catch(onError);
    }
});
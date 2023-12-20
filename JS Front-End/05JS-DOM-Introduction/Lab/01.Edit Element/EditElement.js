function editElement(element, match, replacer) {
    // const content = element.textContent;
    // const editedText = content.replace(new RegExp(match, 'g'),
    //     replacer);
    // element.textContent = editedText;

    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
}


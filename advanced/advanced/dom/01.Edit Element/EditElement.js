function editElement(ref, match, replacer) {
    
    const pattern = new RegExp(match, "g");
    let text = ref.textContent;
    const result = text.replace(pattern, replacer);
    ref.textContent = result;

}
function showPopupMenu() {
    let popupMenu = document.tElementById('popupMenu');

    if (popupMenu.style.display === 'none') {
        popupMenu.style.display = 'block';
    } else {
        popupMenu.style.display = 'none';
    }
}
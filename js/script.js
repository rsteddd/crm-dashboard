const searchInput = document.getElementById('searchInput');
const tableRows = document.querySelectorAll('.table__row');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(searchValue) ? '' : 'none';
    });
});

function sortTable(n) {
  let table = document.querySelector("table");
  let isSwitching = true;
  let orderDirection = "ASC";
  let i, current, next, switchCounter = 0;
  let shouldSwitch = false;
  while (isSwitching) {
    isSwitching = false;
    let tableRows = table.rows;
    for (i = 1; i < tableRows.length - 1; i++) {
      shouldSwitch = false;
      current = tableRows[i].getElementsByTagName("td")[n];
      next = tableRows[i + 1].getElementsByTagName("td")[n];
      if (orderDirection == "ASC") {
        if (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (orderDirection == "DESC") {
        if (current.innerHTML.toLowerCase() < next.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      tableRows[i].parentNode.insertBefore(tableRows[i + 1], tableRows[i]);
      isSwitching = true;
      switchCounter++;
    } else {
      if (switchCounter == 0 && orderDirection == "ASC") {
        orderDirection = "DESC";
        isSwitching = true;
      }
    }
  }
}

const BASE_URL = "https://northwind.vercel.app/api/suppliers";
let tbody = document.querySelector("tbody");
let search = document.querySelector("#search");
async function getTable() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  console.log(data);
  data.forEach((item) => {
    tbody.innerHTML += `
        <tr>
        <td>${item.companyName}</td>
        <td>${item.contactTitle}</td>
        <td>${item.contactName}</td>
        <td>
        <a href='#' class='btn btn-warning'>Edit</a>
        <a href='#' class='btn btn-danger'>Delete</a>
        </td>
        </tr>
        `;
  });
}
getTable()
function deleteSupplier(id, btn) {
    //   console.log(btn);
    axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
    btn.closest("tr").remove();
  }
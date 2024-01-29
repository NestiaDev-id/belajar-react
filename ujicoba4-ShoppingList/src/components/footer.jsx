export default function Navbar({items}) {

    if (items.length === 0) {
      return (
        <footer className="stats">
          Daftar Belanja Kosong
        </footer>
      );
    }
    const totalItems = items.length;
    const checkedItems = items.filter((barang) => barang.checked === true).length;
    const percentage = Math.round((checkedItems / totalItems) *100);
    return (
      <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
      </footer>
    );
  }
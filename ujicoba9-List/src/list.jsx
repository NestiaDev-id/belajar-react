import PropTypes from "prop-types";

export default function List(props) {
  const kelas = props.class;
  const siswaList = props.items;

  const daftarSiswa = siswaList.map((siswa) => (
    <li key={siswa.id}>{siswa.name}</li>
  ));

  return (
    <>
      <h3 className="list-class">{kelas}</h3>
      <ol className="list-siswa">{daftarSiswa}</ol>
    </>
  );
}
List.defaultProps = {
  class: "Unkwon Class",
  items: [],
};
List.propTypes = {
  class: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      nilai: PropTypes.number,
    })
  ),
};

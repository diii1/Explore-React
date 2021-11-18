import "./Home.css";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const GetAnggota = gql`
  query MyQuery {
    passengers_pengunjung {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const updateData = gql`
  mutation MyMutation($nama: String!, $id: Int!) {
    update_passengers_pengunjung(where: { id: { _eq: $id } }, _set: { nama: $nama }) {
      affected_rows
    }
  }
`;

const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const [updatedatas, { loading }] = useMutation(updateData, {
    refetchQueries: [GetAnggota],
  });

  const [statusNama, setStatusNama] = useState(false);
  const [newNama, setnewNama] = useState("");
  const clickNama = () => {
    return setStatusNama(!statusNama);
  };
  const submitNama = () => {
    updatedatas({
      variables: {
        nama: newNama,
        id: id,
      },
    });
  };
  const onEditNama = (e) => {
    setnewNama(e.target.value);
    console.log("newNama = ", newNama);
  };

  if (loading) {
    return "wait";
  }

  return (
    <tr>
      <td>
        <span onClick={clickNama}>{nama}</span>
        {statusNama ? (
          <form onSubmit={submitNama}>
            <input onChange={onEditNama} placeholder={nama} />{" "}
          </form>
        ) : (
          ""
        )}
      </td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className='removeBorder' onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;

import "./Home.css";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { updateData } from "../graphql/mutation";

const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const [updatedatas, { loading }] = useMutation(updateData);

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

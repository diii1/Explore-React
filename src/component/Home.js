import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";

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
const getById = gql`
  query MyQuery($id: Int!) {
    passengers_pengunjung(where: {id: {_eq: $id}}) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const DeleteData = gql`
  mutation MyMutation($id: Int!) {
    delete_passengers_pengunjung(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

const InsertData = gql`
  mutation MyMutation($object: passengers_pengunjung_insert_input!) {
    insert_passengers_pengunjung_one(object: $object) {
      id
    }
  }
`;

function Home() {
  const [value, setValue] = useState(0);
  const {
    data: allData,
    loading: loadingAllData,
    error: errorAllData,
    refetch,
  } = useQuery(GetAnggota);
  const [deletedata, { loading: loadingDelete }] = useMutation(DeleteData, {
    refetchQueries: [GetAnggota],
  });
  const [getData, { data: dataId, loading: loadId, errorId }] =
    useLazyQuery(getById);
  const [addData, { loading: addLoading }] = useMutation(InsertData, {
    refetchQueries: [GetAnggota],
  });
  const showAllData = () => {
    console.log(allData?.passengers_pengunjung);
    refetch();
  };
  const hapusPengunjung = (id) => {
    deletedata({
      variables: {
        id: id,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      ...newUser,
    };
    addData({
      variables: {
        object: {
          id: newData.id,
          nama: newData.nama,
          umur: newData.umur,
          jenisKelamin: newData.jenisKelamin,
        },
      },
    });
  };

  const HandlerId = () => {
    getData({
      variables: {
        id: value,
      },
    });
  };

  if (errorId) {
    console.log(errorId);
    return null;
  }

  if (loadId) {
    return "wait";
  }
  return (
    <div>
      <Header />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button style={{ marginBottom: "20px" }} onClick={HandlerId}>
        Search By ID
      </button>
      <button onClick={showAllData}>Show All</button>
      {(loadingAllData || loadId || addLoading || loadingDelete) && (
        <div className='center'>"wait"</div>
      )}
      {!errorAllData && !loadingAllData && !loadId && (
        <ListPassenger
          data={dataId ? dataId?.passengers_pengunjung : allData?.passengers_pengunjung}
          hapusPengunjung={hapusPengunjung}
        />
      )}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}

export default Home;

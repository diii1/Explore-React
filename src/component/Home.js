import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

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
  query MyQuery($id: Int) {
    passengers_pengunjung(where: {id: {_eq: $id}}) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

function Home() {
  const [value, setValue] = useState(0);
  const {
    data: allData,
    loading: loadingAllData,
    error: errorAllData,
  } = useQuery(GetAnggota);
  const [passengers, setPassengers] = useState([]);
  const [getData, { data: dataId, loading: loadId, errorId }] =
    useLazyQuery(getById);

  const showAllData = () => {
    setPassengers(allData?.passengers_pengunjung);
  };
  const hapusPengunjung = (id) => {
    // setData((oldData) =>
    //   oldData.filter((item) => {
    //     return item.id !== id;
    //   })
    // );
  };

  const tambahPengunjung = (newUser) => {
    // const newData = {
    //   id: uuidv4(),
    //   ...newUser,
    // };
    // setData((oldData) => [...oldData, newData]);
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
      {errorAllData && <p>Something Went Wrong...</p>}
      {(loadingAllData || loadId) && <div className='center'>"wait"</div>}
      {!errorAllData && !loadingAllData && !loadId && (
        <ListPassenger
          data={dataId ? dataId?.passengers_pengunjung : allData?.passengers_pengunjung}
          hapusPengunjung={hapusPengunjung}
        />
      )}
      {console.log(passengers)}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}

export default Home;

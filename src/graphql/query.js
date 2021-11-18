import { gql } from "graphql-tag";

export const GetAnggota = gql`
  query MyQuery {
    passengers_pengunjung {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

export const getById = gql`
  query MyQuery($id: Int!) {
    passengers_pengunjung(where: {id: {_eq: $id}}) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;
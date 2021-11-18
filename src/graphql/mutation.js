import { gql } from "graphql-tag";

export const DeleteData = gql`
  mutation MyMutation($id: Int!) {
    delete_passengers_pengunjung(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

export const InsertData = gql`
  mutation MyMutation($object: passengers_pengunjung_insert_input!) {
    insert_passengers_pengunjung_one(object: $object) {
      id
    }
  }
`;

export const updateData = gql`
  mutation MyMutation($nama: String!, $id: Int!) {
    update_passengers_pengunjung(where: { id: { _eq: $id } }, _set: { nama: $nama }) {
      affected_rows
    }
  }
`;
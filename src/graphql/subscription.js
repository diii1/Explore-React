import { gql } from "graphql-tag";

export const SubsData = gql `
  subscription MySubscription {
    passengers_pengunjung {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;
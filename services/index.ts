import request, { gql } from "graphql-request";

const API_URL =
  // "https://us-west-2.cdn.hygraph.com/content/cm1cp6bc0031508vvc88zus0l/master";
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clldztc6841zx01umdqjv9xok/master";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(API_URL, query);
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(API_URL, query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createBooking(
      data:  {name: "` +
    formValue.name +
    `",
      pickUpDate: "` +
    formValue.pickUpDate +
    `",
      email: "` +
    formValue.email +
    `",

      dropOffDate: "` +
    formValue.dropOffDate +
    `",

      contactNumber: "` +
    formValue.contactNumber +
    `",
      carId: {connect:
        {id: "` +
    formValue.carId +
    `"}}}
    ) {
      id
    }
  }

  `;

  const result = await request(API_URL, mutationQuery);
  return result;
};

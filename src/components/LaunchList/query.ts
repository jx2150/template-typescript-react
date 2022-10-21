import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList($sort: String!, $order: Order) {
    launches(sort: $sort, order: $order) {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;
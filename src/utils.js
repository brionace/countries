import { gql } from "@apollo/client";

export const INCREASE_BY = 2;
export const PER_PAGE  = 10;
export const COUNTRIES = gql`
    query Countries {
        countries {
            name,
            emoji  
        }
}`;
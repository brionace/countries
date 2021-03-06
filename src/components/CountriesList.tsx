import { useState } from 'react'
import PropTypes from 'prop-types';
import { useQuery } from "@apollo/client";
import { InView } from 'react-intersection-observer';
import { INCREASE_BY, COUNTRIES, PER_PAGE } from '../utils'
import { 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Divider, 
    Container,
    Typography,
    withStyles } 
from '@material-ui/core';

// Declare styles
const styles = () => ({
    icon: {
        color: 'inherit',
    }
});

// Declare interfaces
interface NameEmoji{
    name: string,
    emoji: string
}

interface CountryType{
    countries: NameEmoji[]
}
  
/**
 * Countries component
 * @param props 
 * @returns countries list
 */
function Countries(props: any) {
    const { classes } = props;
    const { loading, error, data }  = useQuery<CountryType>(COUNTRIES);
    const [ offset, setOffset ]     = useState(PER_PAGE);

    // Slice countries list into chunks for pagination/infinite loading; then map into a ListItem
    // Todo: this implementation could be more robust by using Apollo Client and GraphQL instead
    const list = data?.countries.slice(0, offset).map((country, index) => (
      <span key={index}>
        <ListItem>
            <ListItemIcon className={classes.icon} >{country.emoji}</ListItemIcon>
            <ListItemText primary={country.name} />
        </ListItem>
        <Divider />
      </span>
    ));
  
    // Show appropriate view if content is still loading or an error occured
    // Todo: this could be extracted into a single component to prvent repetition and easier management
    if (loading) return <Container fixed className="loading"><Typography align='center'>Loading...</Typography></Container>;
    if (error) return <Container fixed className="loading"><Typography align='center'>Error occured!</Typography></Container>;

    // Return countries list
    // InView is used for pagination/infinite scroll
    return (
        <List aria-label="list of countries">
            {list}
            <InView
                onChange={inView => {
                    if (inView) {
                        // Infinite scroll, doing a simple multiplication
                        // Todo: implement a better computation where remainers and outliers are considered
                        setOffset(offset * INCREASE_BY);
                    }
                }}
            />
        </List>
    )
}

Countries.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Countries);

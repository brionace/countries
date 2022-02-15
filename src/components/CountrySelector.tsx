import PropTypes from 'prop-types';
import { useQuery } from "@apollo/client";
import { COUNTRIES } from '../utils'
import { TextField, withStyles, Box } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

// Declare styles for Countries component
const styles = () => ({
    icon: {
        color: 'inherit',
    },
    option: {
        fontSize: 15,
        '& > span': {
          marginRight: 10,
          fontSize: 18,
        },
      },
});

// Declare countries interfaces and constant variables
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
 * @returns Autocomplete element
 */
function CountrySelector(props: any) {
    const { classes } = props;
    const { data }  = useQuery<CountryType>(COUNTRIES);


    // Return countries selector
    return (
        <Box p={3}>
            <Autocomplete
                autoHighlight
                id="country-selector"
                options={data?.countries as unknown as CountryType[]}
                classes={{option: classes.option}}
                getOptionLabel={(option: any) => option.name}
                renderOption={(option: any) => (
                    <>
                    <span>{option.emoji}</span>
                    {option.name}
                    </>
                )}
                renderInput={(params: any) => (
                    <TextField
                    {...params}
                    label="Select a country"
                    variant="outlined"
                    />
                )}
            />
        </Box>
    )
}

CountrySelector.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(CountrySelector);
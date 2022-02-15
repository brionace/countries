import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Countries from './components/CountriesList';
import CountrySelector from './components/CountrySelector';
import { withStyles, createTheme } from '@material-ui/core/styles';
import './App.css';

// Todo: Declare and use App interface here

// Todo: use theme for styling

// Declare App styles
// Todo: 1. use interface instead of adding any in parameter. 2 fix bug where bg colour not showing correctly
const styles = () => ({
    root: {
      width: '100%',
      backgroundColor: '#90caf9'
    }
});

/**
 * App to display a list of countries
 * @param props 
 * @returns Countries (component)
 */
function App(props: any) {
  const { classes } = props;
  return (
    <Container maxWidth="sm" className={classes.root}>
      <CountrySelector /> 
      <Countries />
    </Container>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: 'lightgray',
        padding: '20px'
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '2'
    },
    footer: {
        backgroundColor: 'lightgray',
        padding: '50 0'
    }
}));

export default useStyles;
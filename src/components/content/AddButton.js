// import React from 'react';
// import { loadCSS } from 'fg-loadcss';
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import Icon from '@material-ui/core/Icon';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > .fa': {
//             margin: theme.spacing(2),
//         },
//     },
// }));

// export default function AddButton() {
//     const classes = useStyles();

//     React.useEffect(() => {
//         const node = loadCSS(
//             document.querySelector('#font-awesome-css'),
//         );

//         return () => {
//             node.parentNode.removeChild(node);
//         };
//     }, []);

//     return (
//         <div className={classes.root}>

//             <Icon className="fa fa-plus-circle" style={{ color: green[500] }} />

//         </div>
//     );
// }
import React, { lazy } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const CodeAnalysisModule = lazy(() => import('../../CodeAnalysis/CodeAnalysisModule'));
const CodeCommentModule = lazy(() => import('../../CodeAnalysis/CodeCommentModule'));

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        maxWidth: '50vw',
    },
    container: {
        marginLeft: "10px",
        marginRight: "10px",
    }
}));

//const _path = '../../Resources/CodeAnalysis/algorithms/merge.cpp'
const _path = 'https://raw.githubusercontent.com/Kaillus/algorithms-datastructures/master/public/Resources/CodeAnalysis/algorithms/merge.cpp'

function MergeSort(props) {
    const classes = useStyles();
    const _id = "merge";

    return (
        <div>
            <h1>Merge Sort is a divide-and-conquer algorithm</h1>
            <Paper elevation={3} className={classes.container}>
                <Grid container spacing={0} direction="row" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <CodeAnalysisModule unit={_path} id={_id}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <CodeCommentModule unit={_path} id={_id}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default MergeSort;
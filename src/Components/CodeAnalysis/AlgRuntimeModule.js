import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Menu, MenuItem, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(3px + 1vw)",
        display: "inline-block!important",
        boxSizing: "border-box!important",
        wordBreak: "break-all",
    },
    tooltip: {
        position: 'relative',
    },
    text: {
        display: 'table',
        wordBreak: "break-all",
        '&:hover': {
            color: '#eeeeee',
            backgroundColor: 'rgba(00, 00, 00, 0.6)',
            boxShadow: "0 0 10px 3px rgba(11, 11, 11, 0.6)",
        },
        cursor: 'pointer',
    },
    active: {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
        boxShadow: "0 0 10px 3px rgba(11, 11, 11, 0.6)",
    },
    table: {
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        minWidth: '650px',
        //backgroundColor: 'rgba(00, 00, 00, 0)',
    },
    tableNoBorderRight: {
        backgroundColor: 'rgba(00, 00, 00, 0.2)',
        fontWeight: '500',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        paddingRight: '2px',
    },
    tableNoBorderLeft: {
        backgroundColor: 'rgba(00, 00, 00, 0.2)',
        fontWeight: '500',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
        paddingLeft: '2px',
    },
    icon: {
        padding: '0px',
    },
    zero: {
        backgroundColor: 'rgba(00, 00, 00, 0.2)',
        fontWeight: '500',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    one: {
        backgroundColor: 'rgba(00, 150, 00, 0.6)',
        color: '#004000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    two: {
        backgroundColor: 'rgba(130, 240, 10, 0.6)',
        color: '#004000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    three: {
        backgroundColor: 'rgba(255,255,10, 0.6)',
        color: '#804000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    four: {
        backgroundColor: 'rgba(255,100,0, 0.6)',
        color: '#804000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    five: {
        backgroundColor: 'rgba(215,0,0, 0.6)',
        color: '#800000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    }
}));

function AlgRuntimeModule(unit) {
    const classes = useStyles();
    const [_data, setData] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const mounted = useRef(false);
    const data = unit.unit;
    const _id = unit.id;
    const _solo = unit.solo;
    const _traversal = unit.traversal
    const rToC = [ //rankToColour
        classes.zero, // not used for runtime, outer cells
        classes.one, // constant
        classes.two, // logn
        classes.three, // n
        classes.four, // n log n
        classes.five, // n^2
    ];
    const sorting = [
        "Insertion Sort",
        "Selection Sort",
        "Bubble Sort",
        "Merge Sort",
        "Quick Sort",
        "Heap Sort",
        "Binary Insertion Sort",
    ];
    const traversal = [
        "Binary Search",
        "Depth-First Search",
        "Breadth-First Search",
        "Kruskal's",
        "Prim's",
        "MST",
        "Dijkstra's",
    ]
    const nameToFile = {
        "Insertion Sort": "insertion-sort",
        "Selection Sort": "selection-sort",
        "Bubble Sort": "bubble-sort",
        "Merge Sort": "merge-sort",
        "Quick Sort": "quick-sort",
        "Heap Sort": "heap-sort",
        "X-Order Traversal": "order-traversal",
        "Binary Insertion Sort": "binary-insertion",
        "Binary Search": "binary-search",
        "Depth-First Search": "dfs",
        "Breadth-First Search": "bfs",
        "Kruskal's": "kruskal",
        "Prim's": "prim",
        "MST": "mst",
        "Dijkstra's": "dijkstra",
    };

    function createDataObject(name, desc, rc_avg, rc_avg_rank, rc_avg_desc, rc_worst, rc_worst_rank, rc_worst_desc, sc_worst, sc_worst_rank, sc_worst_desc) {
        return { name, desc, rc_avg, rc_avg_rank, rc_avg_desc, rc_worst, rc_worst_rank, rc_worst_desc, sc_worst, sc_worst_rank, sc_worst_desc };
    }

    const createData = (query) => {
        return createDataObject(query.name,
            query.desc,
            query.runtimeComplexity.average.runtime,
            query.runtimeComplexity.average.rank,
            query.runtimeComplexity.average.desc,
            query.runtimeComplexity.worst.runtime,
            query.runtimeComplexity.worst.rank,
            query.runtimeComplexity.worst.desc,
            query.spaceComplexity.worst.runtime,
            query.spaceComplexity.worst.rank,
            query.spaceComplexity.worst.desc)
    }

    const addRow = (query, solo) => {
        if (solo) {
            if (!(_data.some(e => e.name === query.name))) { // if the requested element doesn't already exist in the list
                setData(_data => [..._data, createData(query)]);
            }
        } else if (!solo) {
            query.map( alg => setData(_data => [..._data, createData(alg)]));
        }
    }

    const filtRow = (name) => {
        setData(_data.filter(query => query.name !== name));
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuManageRow = (name) => {
        if (!(_data.some(e => e.name === name))) { // if the requested element doesn't already exist in the list
            try {
                import('../Module/algorithms/json/'.concat(nameToFile[name])).then(query => {
                    addRow(query, true);
            })
            } catch(err) {}
        } else {
            filtRow(name);
        }
        handleClose();
    }

    const returnTitle = () => {
        return (_traversal ? 'Search Algorithms' : 'Sorting Algorithms');
    }

    const returnMap = (bool) => {
        if (bool) {
            return traversal.map((option) => (
                <MenuItem key={option} onClick={() => menuManageRow(option)} alignItems={'center'}>
                    {option}
                </MenuItem>
            ))
        } else {
            return sorting.map((option) => (
                <MenuItem key={option} onClick={() => menuManageRow(option)} alignItems={'center'}>
                    {option}
                </MenuItem>
            ))
        }
    }

    if (!mounted.current) {
        addRow(data, _solo);
        mounted.current = true;
    }

    return (
        <div>
            <TableContainer component={Paper} className={classes.table} square>
            <Table aria-label="table">
                <TableHead>
                <TableRow>
                    <TableCell align="center" className={classes.zero}>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={classes.icon}
                        >
                        <Tooltip title={"Add or remove items from the table with this button!"} arrow placement={'top'}>
                            <MoreHorizIcon />
                        </Tooltip>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }} //doesn't work
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '24ch',
                                },
                            }}
                        >
                            {returnMap(_traversal)}
                        </Menu>
                    </TableCell>
                    <TableCell align="right" className={classes.tableNoBorderRight}>Runtime</TableCell>
                    <TableCell align="left" className={classes.tableNoBorderLeft}>Complexity</TableCell>
                    <TableCell align="center" className={classes.zero}>Space Complexity</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="left" className={classes.zero}>{returnTitle()}</TableCell>
                    <TableCell align="center" className={classes.zero}>Average Case</TableCell>
                    <TableCell align="center" className={classes.zero}>Worst Case</TableCell>
                    <TableCell align="center" className={classes.zero}>Worst Case</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {_data.map(row => (
                    <TableRow key={row.name}>
                        <Tooltip title={row.desc} interactive arrow placement={'right'}>
                            <TableCell component="th" scope="row" className={classes.zero}>
                                {row.name}
                            </TableCell>
                        </Tooltip>
                        <Tooltip title={row.rc_avg_desc} interactive arrow>
                            <TableCell align="center" className={rToC[row.rc_avg_rank]}>{row.rc_avg}</TableCell>
                        </Tooltip>
                        <Tooltip title={row.rc_worst_desc} interactive arrow>
                            <TableCell align="center" className={rToC[row.rc_worst_rank]}>{row.rc_worst}</TableCell>
                        </Tooltip>
                        <Tooltip title={row.sc_worst_desc} interactive arrow>
                            <TableCell align="center" className={rToC[row.sc_worst_rank]}>{row.sc_worst}</TableCell>
                        </Tooltip>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default AlgRuntimeModule;
import React, { useEffect, useState, useRef } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import atom from './atom-one-light';
import { makeStyles } from '@material-ui/core/styles';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
SyntaxHighlighter.registerLanguage('cpp', cpp);

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(4px + 1vw)",
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
    },
    active: {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
        boxShadow: "0 0 10px 3px rgba(11, 11, 11, 0.6)",
    },
}));

function CodeAnalysisModule(unit) {
    const classes = useStyles();
    const [code, setCode] = useState([]);
    const [hover, setHoverIndex] = useState(false);
    const _path = unit.unit;
    const _id = unit.id;
    const mounted = useRef(false);

    useEffect(() => {
        async function loadFile(path) {
            return await fetch(path)
                .then((r) => r.text())
                .then((r) => r.split("\n"))
                .then((r) => r.filter(a => !a.includes("/* ")))
                .then((r) => setCode(r));
        }

        if (!mounted.current) {
            loadFile(_path);
            mounted.current = true;
        }
    });

    const onMouseHover = (index) => {
        setHoverIndex(index);
        scrollTo(index);
        //console.log("hovering");
        //console.log("index is " + index);
    }

    const onMouseExit = () => {
        //console.log("exit");
    }

    function scrollTo(index) {
        let goto;
        if (index > 7) {
            goto = 7;
        } else {
            goto = index;
        }
        scroller.scrollTo(goto, {
            activeClass: 'active',
            duration: 300,
            smooth: true,
            containerId: _id,
            });
            console.log("jumping to " + goto);
            //console.table(code);
    }

    return (
        <div className={classes.code}>
            {code.map((item, index) => 
            { return (
                <pre className={classes.text} onMouseEnter={() => onMouseHover(index)} onMouseLeave={() => onMouseExit()} key={index}>
                    <SyntaxHighlighter language="cpp" style={atom}>
                        {item}
                    </SyntaxHighlighter>
                </pre>)
            })}
        </div>
    );
}

export default CodeAnalysisModule;
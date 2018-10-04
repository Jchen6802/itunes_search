import { injectGlobal } from 'styled-components';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        pading: 0;
        font-family: sans-serif;
    }

    .col-4 .column {
        float: left;
        width: 25%;
        height: 230px;
        padding: 20px 10px 0px 10px;
    }

    .col-4:after {
        clear: both;
        content: '';
        display: table;
    }

    @media (max-width: 1000px) {
        .col-4 .column {
            width: 33.33%;
        }
    }

    @media (max-width: 500px) {
        .col-4 .column {
            width: 100%;
        }
    }
`;

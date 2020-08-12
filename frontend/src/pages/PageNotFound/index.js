import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

export default function PageNotFound() {

    return(
        <div id="container-page-not-found">
            <h1>Página não encontrada!</h1>
            <Link to="/">Voltar para a Página Principal</Link>
        </div>
    );

}